const { Router } = require('express');
const controllerTasks = require('../controllers/tasks.controller');
const routerTasks = Router();

routerTasks.get('/', checkUserAuth(), controllerTasks.getTasks);

routerTasks.get('/:id', controllerTasks.getTaskById);

routerTasks.post('/', controllerTasks.createTask);

routerTasks.put('/:id', controllerTasks.updateTask);

routerTasks.delete('/:id', controllerTasks.deleteTask);

function checkUserAuth(req, res, next) {
    if (req.session.user) return next();
    return next(new NotAuthorizedError());
  }





module.exports = routerTasks;