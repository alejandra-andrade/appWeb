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
  res.json(goals);
});


router.post("/addGoal", async (req, res) => {
  const { name, description, dueDate } = req.body;
  const newGoal = new Goal({ name, description, dueDate });
  await newGoal.save();
  res.json({ message: "Meta agregada" });
});


router.delete("/removeGoal/:id", async (req, res) => {
  await Goal.findByIdAndDelete(req.params.id);
  res.json({ message: "Meta eliminada" });
});

module.exports = router;
