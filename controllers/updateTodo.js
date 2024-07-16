// import the model that we have define in the models

const Todo = require("../models/Todo");


// define route handler
exports.updateTodoById = async(req,res) =>{
    try{
        //fetch the id to update
        const {id} = req.params;
        const {title,description} = req.body;
        const todo = await Todo.findByIdAndUpdate(
            {_id:id},
            {title,description,updatedAt:Date.now()},
        )

        res.status(200)
            .json({
                success:true,
                data:todo,
                message:"Updated Successfully."
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
