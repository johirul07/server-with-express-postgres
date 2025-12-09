import express, { NextFunction, Request, Response } from "express";
import { Pool } from "pg";
import config from "./config";
import initDB, { pool } from "./config/db";
import { logger } from "./middleware/logger";
import { UserRouter } from "./modules/user/user.routes";
import { TodoRouter } from "./modules/todo/todo.routes";

const app = express();
const port = config.port;

//*pares
app.use(express.json());
// jodi from data poyojon hoy taile
// app.use(express.urlencoded())

initDB();

//+ user post & get $ put & delete==================

app.use("/users", UserRouter);

//todo post & get $ put & delete============================

app.use("/todos", TodoRouter);


//-404 get======================================
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
    path: req.url,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
