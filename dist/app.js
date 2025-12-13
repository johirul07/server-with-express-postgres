"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./config/db"));
const user_routes_1 = require("./modules/user/user.routes");
const todo_routes_1 = require("./modules/todo/todo.routes");
const auth_routes_1 = require("./modules/auth/auth.routes");
const app = (0, express_1.default)();
//*pares
app.use(express_1.default.json());
// jodi from data poyojon hoy taile
// app.use(express.urlencoded())
(0, db_1.default)();
//+ user post & get $ put & delete==================
app.use("/users", user_routes_1.UserRouter);
//todo post & get $ put & delete============================
app.use("/todos", todo_routes_1.TodoRouter);
//+ auth
app.use("/auth", auth_routes_1.AuthRouter);
//-404 get======================================
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
        path: req.url,
    });
});
exports.default = app;
