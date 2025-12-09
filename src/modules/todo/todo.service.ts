import { pool } from "../../config/db";

//+createTodo
const createTodo = async (user_id: string, title: string) => {
  const result = await pool.query(
    `INSERT INTO todos (user_id, title) VALUES ($1, $2) RETURNING * `,
    [user_id, title]
  );

  return result;
};

//+getTodo
const getTodo = async () => {
  const result = await pool.query(`SELECT * FROM todos`);
  return result;
};

//+singleTodo

const singleTodo = async (id: string) => {
  const result = await pool.query(`SELECT * FROM todos WHERE id = $1`, [id]);
  return result;
};

//+ updateTodo

const updateTodo = async (title: string, completed: string, id: string) => {
  const result = await pool.query(
    `UPDATE todos SET title=$1, completed=$2 WHERE id=$3 RETURNING *`,
    [title, completed, id]
  );

  return result;
};

//+ deleteTodo

const deleteTodo = async (id: string) => {
  const result = await pool.query(`DELETE FROM todos WHERE id=$1 RETURNING *`, [
    id,
  ]);

  return result;
};
export const todoServices = {
  createTodo,
  getTodo,
  singleTodo,
  updateTodo,
  deleteTodo,
};
