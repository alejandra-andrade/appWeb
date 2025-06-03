var express = require('express');
const route = require('.');
var router = express.Router();
const Goal = require("../models/Goal");

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

router.get("/getGoals", async (req, res) => {
    const goals = await Goal.find();
    res.status(200).json(goals);
});

router.post("/addGoal", async (req, res) => {
    const { name, dueDate } = req.body;
    if (!name || !dueDate) {
        return res.status(400).json({ error: "Bad Request - Parámetros inválidos" });
    }

    const newGoal = new Goal({ name, dueDate });
    await newGoal.save();
    res.status(200).json({ message: "Meta agregada", goal: newGoal });
});

router.delete("/removeGoal/:id", async (req, res) => {
    const { id } = req.params;
    const deletedGoal = await Goal.findByIdAndDelete(id);

    if (!deletedGoal) {
        return res.status(400).json({ error: "Bad Request - ID inválido" });
    }

    res.status(200).json({ message: "Meta eliminada", goal: deletedGoal });
});

module.exports = router;
