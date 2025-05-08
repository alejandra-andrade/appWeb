var express = require('express');
const route = require('.');
var router = express.Router();

let goals = [
    {
        id: 1,
        name: 'Meta 1',
        description: 'Descripción de la meta 1',
        completed: false
    },
    {
        id: 2,
        name: 'Meta 2',
        description: 'Descripción de la meta 2',
        completed: false
    },
    {
        id: 3,
        name: 'Meta 3',
        description: 'Descripción de la meta 3',
        completed: false
    }
];

router.get('/getGoal', function (req, res, next) {
    res.json(goals);
});

router.delete('/deleteGoal/:id', function (req, res, next) {
    const goalId = parseInt(req.params.id);
    goals = goals.filter(goal => goal.id !== goalId);
    res.json({ message: 'Goal deleted successfully' });
});

router.post('/addGoal', function (req, res, next) {
    const { name, description } = req.body;
    const newGoal = {
        id: goals.length + 1,
        name,
        description,
        completed: false
    };
    goals.push(newGoal);
    res.json(newGoal);
});

module.exports = router;
