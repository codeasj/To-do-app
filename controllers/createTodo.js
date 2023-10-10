//import the model
const Todo = require("../models/Todo")

//Define Route handler
exports.createTodo = async(req,res) => {
    try {
        //Extract title and description from request body
        const {title,description} = req.body;
        //create a new todo obj and insert in db
        const response = await Todo.create({title,description});
        //Send a json response with a success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Entry created succesfully'
            }
        );
    }
    catch(err) {
        console.error(err);
        res.status(500).json({
            success:false,
            data: "internal server error",
            message: err.message })
    }
}

