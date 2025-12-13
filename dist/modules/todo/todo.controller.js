"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoController = void 0;
const todo_service_1 = require("./todo.service");
//+createTodo
const createTodo = async (req, res) => {
    const { user_id, title } = req.body;
    try {
        const result = await todo_service_1.todoServices.createTodo(user_id, title);
        res.status(200).json({
            success: true,
            message: "Todos created successfully",
            data: result.rows[0],
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};
//+getTodo
const getTodo = async (req, res) => {
    try {
        const result = await todo_service_1.todoServices.getTodo();
        res.status(200).json({
            success: true,
            message: "todos retrieved successful",
            data: result.rows,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
            details: err,
        });
    }
};
//+singleTodo
const singleTodo = async (req, res) => {
    try {
        const result = await todo_service_1.todoServices.singleTodo(req.params.id);
        if (result.rows.length === 0) {
            res.status(404).json({
                success: false,
                message: "todos not found",
            });
        }
        else {
            res.status(200).json({
                success: true,
                message: "todos data fetched",
                data: result.rows[0],
            });
        }
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
            details: err,
        });
    }
};
//+ updateTodo
const updateTodo = async (req, res) => {
    const { title, completed } = req.body;
    try {
        const result = await todo_service_1.todoServices.updateTodo(title, completed, req.params.id);
        if (result.rows.length === 0) {
            res.status(404).json({
                success: false,
                message: "todos not found",
            });
        }
        else {
            res.status(200).json({
                success: true,
                message: "todos updated successfully",
                data: result.rows[0],
            });
        }
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
            details: err,
        });
    }
};
//+ deleteTodo
const deleteTodo = async (req, res) => {
    try {
        const result = await todo_service_1.todoServices.deleteTodo(req.params.id);
        if (result.rowCount === 0) {
            return res.status(404).json({
                error: "Todo not Found",
            });
        }
        res.json({
            success: true,
            message: "Todos deleted",
            data: null,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
            details: err,
        });
    }
};
exports.todoController = {
    createTodo,
    getTodo,
    singleTodo,
    updateTodo,
    deleteTodo,
};
