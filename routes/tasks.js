var express = require('express');
const route = require('.');
var router = express.Router();

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
router.get('/getTask', function (req, res, next) {
    res.json(tasks);
    }      
);

router.delete('deleteTask/:id', function (req, res, next) {
    const TaskId = parseInt(req.params.id);
    const task = tasks.find(task => task.id === TaskId);
    if (!task) {
        return res.status(400).json({ message: 'Task not found' });
    } else {
        res.status(200).json({ message: 'Task deleted successfully' });
    }
    tasks = tasks.filter(task => task.id !== TaskId);
    res.json({message: 'Task deleted successfully'});
});

router.post('/addTask', function (req, res, next) {
    const { name, description } = req.body;
    const newTask = {
        id: tasks.length + 1,
        name,
        description,
        completed: false
    };
    tasks.push(newTask);
    res.json(newTask);
});

module.exports = router;