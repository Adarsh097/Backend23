// import the model that we have define in the models

const Todo = require("../models/Todo");


// define route handler
exports.deleteTodoById = async(req,res) =>{
    try{
        //fetch the id to update
        const {id} = req.params;
        const todo = await Todo.findByIdAndDelete({_id:id});

        res.status(200)
            .json({
                success:true,
                message:"Deleted Successfully."
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
