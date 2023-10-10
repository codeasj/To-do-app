const Todo = require("../models/Todo")

//get all
exports.getTodo = async (req,res) => {
    try {
        const todos = await Todo.find({})
        res.status(200).json({
            success: true,
            data: todos,
            message: "Entire data fetched succesfully"
        })
    }
    catch(err) {
        console.error(err);
        res.status(500).json({
            success: false,
            error: err.message, 
            message: "Server Error"
        })
    }
}

//get single todo
exports.getTodoById = async (req,res) => {
    try{
        const id = req.params.id;
        const todo = await Todo.findById({_id:id});
        
        if(!todo) {
            res.status(404).json({
                success:false,
                message: "No data found with id"
            })
            return;
        }
        res.status(200).json({
            success :true,
            data: todo,
            message: "Entry fetched by id succesfully"
        })
    }
    catch(err) {
        console.error(err)
        res.status(500).json({
            success: false,
            error: err.message,
            message: 'server error' 
        })
    }
}