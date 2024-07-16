const mongoose = require('mongoose');
// here, we will define the schema to show how the data is store in DB

// defining what a todo object will contain
// it defines which paremeters do we consider to store the object in DB

const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxLength:50,
    },
    description:{
        type:String,
        required:true,
        maxLength:50,
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now(),
    },
    updatedAt:{
        type:Date,
        required:true,
        default:Date.now(),
    }
});

module.exports = mongoose.model("Todo",todoSchema);
/*
    - this model will be used by the controller 
    where we define the business logics.
*/