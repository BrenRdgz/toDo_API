const express = require('express');
const connectionDB = require ('./db.connection');
const routerTasks = require('./routes/tasks.routes');
const app = express();
const timeout = requiere ('connect-timeout');
connectionDB();

app.set("PORT", process.env.PORT || 3000);
app.use(timeout('10s'));
app.use(express.json());
app.get('/', (req, res) =>{
    res.send('Hi');
});

app.use("/todos", routerTasks);
module.exports = app;
