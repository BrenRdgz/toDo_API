const { Schema, model } = require('mongoose');

const TaskSchema = new Schema ({
    text:{
        type: String,
        required: true
    }, 
    done: {
        type: Boolean,
        default: false
    }
});

module.exports = model ("Task", TaskSchema);