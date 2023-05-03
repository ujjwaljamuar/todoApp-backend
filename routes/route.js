import express from "express";

import { addTodo, fetchTodos, toggleTodoDone, updateTodo, deleteTodo } from "../controller/controller.js";

const route = express.Router();

route.post("/todos", addTodo);

route.get("/todos", fetchTodos);

route.get("/todos/:id", toggleTodoDone);

route.put("/todos/:id", updateTodo);

route.delete("/todos/:id", deleteTodo);


export default route;
