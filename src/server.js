const express = require('express');
const mongoose = requiere('mongoose');
const connectionDB = require ('./db.connection');
const routerTasks = require('./routes/tasks.routes');
const app = express();

connectionDB();

app.set("PORT", process.env.PORT || 3000);
app.use(function(req, res, next) {
    res.setTimeout(1000);
    next();
  });
app.use(express.json());
app.get('/', (req, res) =>{
    res.send('Hi');
});



app.use("/todos", routerTasks);
module.exports = app;


