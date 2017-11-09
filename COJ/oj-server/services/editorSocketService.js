module.exports = function(io) {
    // collaboration sessions
    const collaborations = {};
    const socketIdToSessionId = {};

    io.on('connection', (socket) => {
        const sessionId = socket.handshake.query['sessionId'];
        socketIdToSessionId[socket.id] = sessionId;

        if (!(sessionId in collaborations)) {
            collaborations[sessionId] = {
                participants: []
            };
        }
        collaborations[sessionId]['participants'].push(socket.id);

        socket.on('change', delta => {
            console.log('change' + socketIdToSessionId[socket.id] + ' ' +delta);
            forwardEvent(socket.id, 'change', delta);            
        });

        socket.on('cursorMove', cursor => {
            console.log('cursorMove' + socketIdToSessionId[socket.id] + ' ' +cursor);
            cursor = JSON.parse(cursor);
            cursor['socketId'] = socket.id;
            forwardEvent(socket.id, 'cursorMove', JSON.stringify(cursor));
        });
    });

    const forwardEvent = function(socketId, eventName, dataString) {
        const sessionId = socketIdToSessionId[socketId];
        if (sessionId in collaborations) {
            const participants = collaborations[sessionId]['participants'];
            for (let participant of participants) {
                if (socketId != participant) {
                    io.to(participant).emit(eventName, dataString);
                }
            }
        } else {
            console.warn('WARNING');
        }
    }
}