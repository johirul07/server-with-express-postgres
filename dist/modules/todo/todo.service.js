"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoServices = void 0;
const db_1 = require("../../config/db");
//+createTodo
const createTodo = async (user_id, title) => {
    const result = await db_1.pool.query(`INSERT INTO todos (user_id, title) VALUES ($1, $2) RETURNING * `, [user_id, title]);
    return result;
};
//+getTodo
const getTodo = async () => {
    const result = await db_1.pool.query(`SELECT * FROM todos`);
    return result;
};
//+singleTodo
const singleTodo = async (id) => {
    const result = await db_1.pool.query(`SELECT * FROM todos WHERE id = $1`, [id]);
    return result;
};
//+ updateTodo
const updateTodo = async (title, completed, id) => {
    const result = await db_1.pool.query(`UPDATE todos SET title=$1, completed=$2 WHERE id=$3 RETURNING *`, [title, completed, id]);
    return result;
};
//+ deleteTodo
const deleteTodo = async (id) => {
    const result = await db_1.pool.query(`DELETE FROM todos WHERE id=$1 RETURNING *`, [
        id,
    ]);
    return result;
};
exports.todoServices = {
    createTodo,
    getTodo,
    singleTodo,
    updateTodo,
    deleteTodo,
};
