// import the model that we have define in the models

const Todo = require("../models/Todo");

/*
    - you have reached here by hitting some route
    so, we define the route handler i.e action to 
    be performed when we hit the route.

    - whenever we are making interaction with DB, we
    want that our main thread should not be blocked so,
    we async function call to perform the task.
    It will not block the main thread, while interaciton with 
    database.
*/
// hit the route -> action: rotueHandler


/*
    -when we want to create the to-do object, we sending
    title and description in req.body
    - we need to fetch title and description from the req.body
*/

exports.createTodo = async(req,res)=>{
    try{
        //extract title and description from req.body
        const {title,description} = req.body;
        //create a new Todo Obj and insert in db
        const response = await Todo.create({title,description});
        res.status(200).json(
            { 
                success:true,
                data:response,
                message:"Entry created successfully."
            }
        )
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
}  