const { Router } = require('express');
const controllerTasks = require('../controllers/tasks.controller');
const routerTasks = Router();

routerTasks.get('/',  controllerTasks.getTasks);

routerTasks.get('/:id', controllerTasks.getTaskById);

routerTasks.post('/', controllerTasks.createTask);

routerTasks.put('/:id', controllerTasks.updateTask);

routerTasks.delete('/:id', controllerTasks.deleteTask);





module.exports = routerTasks;