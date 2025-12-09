import { Request, Response } from "express";
import { todoServices } from "./todo.service";

//+createTodo
const createTodo = async (req: Request, res: Response) => {
  const { user_id, title } = req.body;

  try {
    const result = await todoServices.createTodo(user_id, title);

    res.status(200).json({
      success: true,
      message: "Todos created successfully",
      data: result.rows[0],
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

//+getTodo
const getTodo = async (req: Request, res: Response) => {
  try {
    const result = await todoServices.getTodo();

    res.status(200).json({
      success: true,
      message: "todos retrieved successful",
      data: result.rows,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
      details: err,
    });
  }
};

//+singleTodo

const singleTodo = async (req: Request, res: Response) => {
  try {
    const result = await todoServices.singleTodo(req.params.id!);
    if (result.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: "todos not found",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "todos data fetched",
        data: result.rows[0],
      });
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
      details: err,
    });
  }
};

//+ updateTodo

const updateTodo = async (req: Request, res: Response) => {
  const { title, completed } = req.body;

  try {
    const result = await todoServices.updateTodo(
      title,
      completed,
      req.params.id!
    );

    if (result.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: "todos not found",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "todos updated successfully",
        data: result.rows[0],
      });
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
      details: err,
    });
  }
};

//+ deleteTodo

const deleteTodo = async (req: Request, res: Response) => {
  try {
    const result = await todoServices.deleteTodo(req.params.id!);

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
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
      details: err,
    });
  }
};

export const todoController = {
  createTodo,
  getTodo,
  singleTodo,
  updateTodo,
  deleteTodo,
};
