const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const express = require('express');
const router = express.Router();

const problemService = require('../services/problemService');

// GET /api/v1/problems
router.get('/problems', (req, res) => {
    problemService.getProblems()
        .then((problems) => res.json(problems));
});

// GET /api/v1/problems/:id
router.get('/problems/:id', (req, res) => {
    problemService.getProblem(+req.params.id)
        .then((problem) => res.json(problem));
});

// POST /api/v1/problems
router.post('/problems', jsonParser, (req, res) => {
    problemService.addProblem(req.body)
        .then((problem) => {
            res.json(problem);
        }, (error) => {
            res.status(400).send('Problem name already exists.');
        });
});

module.exports = router;