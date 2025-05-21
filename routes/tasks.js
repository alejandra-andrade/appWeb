var express = require('express');
const route = require('.');
var router = express.Router();
const Task = require("../models/Task")

let tasks = [
    {
        id: 1,
        name: 'Tarea 1',
        description: 'Descripcion de la tarea 1',
        completed: false
    },
    {
        id: 2,
        name: 'Tarea 2',
        description: 'Descripcion de la tarea 2',
        completed: false
    },
    {
        id: 3,
        name: 'Tarea 3',
        description: 'Descripcion de la tarea 3',
        completed: false
    }
];

router.get("/getTasks", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});


router.post("/addTask", async (req, res) => {
  const { title, description, dueDate } = req.body;
  const newTask = new Task({ title, description, dueDate });
  await newTask.save();
  res.json({ message: "Tarea agregada" });
});


router.delete("/removeTask/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Tarea eliminada" });
});

module.exports = router;