const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const express = require('express');
const router = express.Router();


const problemService = require('../services/problemService');

// GET /api/v1/problems
router.get('/problems', (req, res) => {
    problemService.getProblems()
        .then(problems => res.json(problems));
});

// GET /api/v1/problem/:id
router.get('/problem/:id', (req, res) => {
    const id = req.params.id;
    problemService.getProblem(+id)
        .then(problem => res.json(problem));
});

// POST /api/v1/problems
router.post('/problems', jsonParser, (req, res) => {
  problemService.addProblem(req.body)
      .then(problem => {
          res.json(problem);
      }, error => {
          res.status(400).send('Problem name already exists.');
      });
});

module.exports = router;