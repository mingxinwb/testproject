const problemModel = require('../models/problemModel');

const getProblems = () => {
    return new Promise((resolve,reject) => {
        problemModel.find({}, (err, problems) => {
            if (err) {
                reject('There is an error/no problemlist.');
            } else {
                resolve(problems);
            }
        });       
    });
};

const getProblem = (id) => {
    return new Promise((resolve, reject) => {
        problemModel.findOne({id : id}, (err, problem) => {
            if (err) {
                reject('There is no data for this id.');
            } else {
                resolve(problem);
            }
        });       
    });
};

const addProblem = function(newProblem) {
    return new Promise((resolve, reject) => {
        problemModel.findOne({name : newProblem.name}, (err, problemExists) => {
            if (problemExists) {
                reject('Problem already exists.'); 
            } else {
                problemModel.count({}, (err, latestId) => {
                    if (err) {
                        reject(err);
                    } else {
                        newProblem.id = latestId + 1;
                        const dbNewProblem = new problemModel(newProblem);
                        dbNewProblem.save();
                        resolve(dbNewProblem);
                    }
                });               
            }
        });
    });
};

module.exports = {
    getProblems,
    getProblem,
    addProblem
}