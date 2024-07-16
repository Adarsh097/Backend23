// import the model that we have define in the models

const Todo = require("../models/Todo");


// define route handler
exports.getTodo = async(req,res) =>{
    try{
        //fetch all the todo items from the database
        const todos = await Todo.find({});
        // response
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"Entire data fetched from DB"
        })
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:err.message
        }
        )
    }
};


// define route handler
exports.getTodoById = async(req,res) =>{
    try{
        //extract item on the basis of the id
        //fetch the id from params
        const id = req.params.id;
        const todo = await Todo.findById({_id:id});
        //if id is not found
        if(!todo){
            return res.status(404).json({
                success:false,
                message:"No data is found with given Id"
            })
        }
            // response
            res.status(200)
            .json({
                success:true,
                data:todo,
                message:"Matching data fetched from DB"
            })

    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:err.message
        }
        )
    }
};


