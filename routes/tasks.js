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
    res.status(200).json(tasks);
});

router.post("/addTask", async (req, res) => {
    const { name, dueDate } = req.body;
    if (!name || !dueDate) {
        return res.status(400).json({ error: "Bad Request - Parámetros inválidos" });
    }

    const newTask = new Task({ name, dueDate });
    await newTask.save();
    res.status(200).json({ message: "Tarea agregada", task: newTask });
});

router.delete("/removeTask/:id", async (req, res) => {
    const { id } = req.params;
    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
        return res.status(400).json({ error: "Bad Request - ID inválido" });
    }

    res.status(200).json({ message: "Tarea eliminada", task: deletedTask });
});

module.exports = router;
