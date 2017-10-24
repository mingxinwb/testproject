// Callback Async
// var fs = require('fs');
// fs.readFile('test.txt', function onFileData(err, data) {
//     console.log('');
//     console.log(data.toString());
// });

// console.log('reading file.....'); 

////////////////////////////////////////
// Callback Sync

// function greet(callback) {
//     console.log('Hello!');
//     callback();
// }

// greet(function() {
//     console.log('The callback is invoked!');
// });

// greet(function() {
//     console.log('A diiferent callback is invoked!');
// });

///////////////////////////////////////////////
// callback with feed parameter

// function greet(callback) {
//     console.log('Hello!');
//     var data = {
//         name: 'Claire Bai'
//     };
//     callback(data);
// }

// greet(function(data) {
//     console.log('The callback is invoked!');
//     console.log(data);
// });

// greet(function(data) {
//     console.log('A diiferent callback is invoked!');
//     console.log(data.name);
// });

//////////////////////////////////////////////////
// add two numbers normally

// let resultA, resultB, resultC;

// function add(num1, num2) {
//     return num1 + num2;
// }

// resultA = add(1,2);
// resultB = add(resultA, 3);
// resultC = add(resultB, 4);

// console.log('total ' + resultC);
// console.log(resultA, resultB, resultC);

////////////////////////////////////////////////
// add two in Async, callback hell

// let resultA1, resultB1, resultC1;

// function addAsync(num1, num2, someFunction) {
//     // use the famous jQuery getJSON callback API
//     return $.getJSON('http://www.example.com', {
//         num1: num1,
//         num2: num2
//     }, someFunction);
// }

// addAsync(1, 2, success => {
//     // callback 1
//     resultA1 = success;
    
//     addAsync(resultA1, 3, success => {
//         // callback 2
//         resultB1 = success;

//         addAsync(resultC1, 4, success => {
//             // callback 3
//             resultC1 = success;

//             console.log('total ' + resultC1);
//             console.log(resultA1, resultB1, resultC1);
//         });
//     });
// });

////// do sth async 5 times, callback hell

// doSthAsync1(function() {
//     doSthAsync2(function() {
//         doSthAsync3(function() {
//             doSthAsync4(function(){
//                 doSthAsync5(function() {
//                 });
//             });
//         });
//     });
// });

////// use Promise

// let r1, r2, r3;
// function addAsync(num1, num2) {
//     // use ES6 fetch API, which returns a proise
//     return fetch('http://www.example.com?num1=${num1}&num2=${num2}')
//              .then(x => x.json());
// }
// addAsync(1, 2)
//     .then(result => {
//         r1 = result;
//         return r1;
//     })
//     .then(success => addAsync(success, 3))
//     .then(success => {
//         r2 = success;
//         return r2;
//     })
//     .then(success => addAsync(success, 4))
//     .then(success => {
//         r3 = success;
//         return r3;
//     })

////////////////////////////////////////////////////////
// Promise

// var isMumHappy = true;

// var WillIGetNewPhone = new Promise(
//   function(resolve, reject) {
//       if (isMumHappy) {
//           var phone = {
//               brand: 'iphone',
//               color: 'red'
//           };
//           resolve(phone);  // fulfilled
//       } else {
//           var reason = new Error('Mum is not happy.');
//           reject(reason);  // reject
//       };
//   }
// );

// var askMum = function() {
//     WillIGetNewPhone
//         .then(function(fulfilled) {
//             // yay, you got a new phone.
//             console.log(fulfilled);
//             //output: {brand: 'iphone', color: 'red'}
//         }, function(error) {
//             // oops, mum didn't buy it.
//             console.log(error.message);
//             // output: 'Mum is not happy.'
//         })
// };

// askMum();

//////////////////////////////////////////////////
/////// promise sleep
var sleep = function(ms) {
    var promise =new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('haha');
        }, ms);
    });
    return promise;
};

// sleep(2000)
//     .then(function(result)  {
//         console.log(result);
//     });

////// promise demo advance
// Promise.all([sleep(1000), sleep(2000)])
//     .then(functio() {
//         console.log('All done.');
//     });

Promise.race([sleep(1000), sleep(5000)])
    .then(function() {
        console.log('Race is won!');
    });