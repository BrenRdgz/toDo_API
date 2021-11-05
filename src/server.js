const express = require('express');
const connectionDB = require ('./db.connection');
const routerTasks = require('./routes/tasks.routes');
const app = express();

connectionDB();

app.set("port", process.env.PORT || 3000);

app.use(express.json());

app.use("/todos", routerTasks);
module.exports = app;