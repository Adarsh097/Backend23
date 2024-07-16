/*
    - to map the controller with the route we need to import 
    the controller
*/
const express = require("express");
//creating the router instance
const router = express.Router();

// importing the controller
const {createTodo} = require("../controllers/createTodo");
const {getTodo,getTodoById} = require("../controllers/getTodo");
const {updateTodoById} = require("../controllers/updateTodo")
const {deleteTodoById} = require("../controllers/deleteTodo");


// defining the API routes
router.post("/createTodo",createTodo);
router.get("/getTodos",getTodo);
router.get("/getTodosById/:id",getTodoById);
router.put("/updateTodoById/:id",updateTodoById);
router.delete("/deleteTodoById/:id",deleteTodoById);

module.exports = router;