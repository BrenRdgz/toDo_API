const Task = require('../models/task');

exports.getTasks = async  (req, res) =>{
    try{
        const tasks = await Task.find();
        res.json(tasks);
    }catch(error){
        res.json(error);
    }
};

exports.createTask = async (req, res) => {
    try{
        const {text, status} = req.body;
        const newTask = new Task ({text, status});
       await newTask.save();
        res.json({
            message: 'Task created',
            id: newTask._id,
            texte: newTask.text,
            done: newTask.status
        });
    }catch(error){
        res.json(`ups, task was not created ${error}`);
    }

};

exports.updateTask = async (req, res) => {
    try{
        const id = req.params.id;
        const data = req.body;
        const task = await Task.findByIdAndUpdate(id, data);
        console.log(task);
        if(task === null){
            res.json(`Task ${id} doesn't exist`);
        }
        else{
            res.json(`Task ${id} updated`);
        }
    }catch(error){
        res.json(error)        ;
    }
};

exports.deleteTask = async (req, res) => {
    try{
        const id = req.params.id;
        const task = await Task.find({_id:id});
        if(task.length !== 0){
            if(task[0].done === true){
                await Task.findByIdAndDelete(id);
                res.json(`Task  ${id} deleted`);
            }
            else{
                res.json(`Task ${id} can not be deleted because it is not done`);
            }
        }
        else{
            res.json(`Task ${id} doesn't exist`);
        }
    }catch(error){
        res.json(error);
    }
};

exports.getTaskById = async (req, res) => {
    try{
        const id = req.params.id;
        const task = await Task.find({_id:id});
        if(task.length === 0){
            res.json(`Task ${id} doesn't exist`); 
        }
        else{
            res.json(task);
        }
    }  catch(error){
        res.json(error);
    }
};

