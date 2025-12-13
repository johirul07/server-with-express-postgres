"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoRouter = void 0;
const express_1 = require("express");
const todo_controller_1 = require("./todo.controller");
const router = (0, express_1.Router)();
//+ post================
router.post("/", todo_controller_1.todoController.createTodo);
//+ get
router.get("/", todo_controller_1.todoController.getTodo);
router.get("/:id", todo_controller_1.todoController.singleTodo);
//+put===========
router.put("/:id", todo_controller_1.todoController.singleTodo);
//+ delete
router.delete("/:id", todo_controller_1.todoController.deleteTodo);
exports.TodoRouter = router;
