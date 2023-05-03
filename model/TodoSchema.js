import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    data: {
        type: String,
        required: true,
    },
    done: {
        type: Boolean,
        default: false,
    },
    createdTime: {
        type: Date,
        default: Date.now(),
    },
});

const Todo = mongoose.model("todo", todoSchema);

export default Todo;
