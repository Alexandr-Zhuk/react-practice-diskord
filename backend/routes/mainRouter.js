const express = require('express');
//const Ajv = require('ajv');
//const multer = require('multer');
const path = require('path');
const router = express.Router();
//const taskController = require('../controllers/taskController');

//const ajv = new Ajv();

//const pathUp = path.join(__dirname + '/../public/uploads');
//const upload = multer({dest: pathUp});
const people = [
    {id: 1, name: 'Andrey_Shuma', avatar: '/images/ava.png', isTranslation: true},
    {id: 2, name: 'agruss (Катерина)', avatar: '/images/ava.png'},
    {id: 3, name: 'Mykhailo', avatar: '/images/ava.png'},
    {id: 4, name: 'OlexFish', avatar: '/images/ava.png'},
    {id: 5, name: 'Viktoria21', avatar: '/images/ava.png'},
    {id: 7, name: 'Vitalik', avatar: '/images/ava.png'},
    {id: 8, name: 'Alex Zhuk', avatar: '/images/ava.png'},
    {id: 9, name: 'Володимир', avatar: '/images/ava.png'},
    {id: 10, name: 'Снежка*', avatar: '/images/ava.png'},
];

router.get('/', (req, res) => {
    const channels = [
        {id: 1, name:'чат'}, 
        {id: 2, name:'матеріали'}, 
        {id: 3, name:'домашки'},
        {id: 4, name:'відвідування'},
        {id: 5, name:'інформація'}

    ];
    res.json(channels);
});


router.get('/people', (req, res) => {

    res.json(people);
});
/*
router.get('/list', async(req, res) => {
    const taskList = await taskController.getAllTasks();
    res.json(taskList);
});

router.post('/change', async(req, res) => {
    const data = req.body;
    console.log(data);
    await taskController.updateTask(data);
    const taskList = await taskController.getAllTasks();
    res.json(taskList);
});

router.post('/delete', async(req, res) => {
    const id = req.body.id;
    await taskController.deleteTask(id);
    const taskList = await taskController.getAllTasks();
    res.json(taskList);
});

router.post('/add', upload.none(), async(req, res) => {
    const newTask = req.body;
    console.log(newTask);
    await taskController.addTask(newTask);
    const taskList = await taskController.getAllTasks();
    res.json(taskList);
});
*/

module.exports = router;