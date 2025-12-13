"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userServices = void 0;
const db_1 = require("../../config/db");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
//+ createUser============
const createUser = async (payload) => {
    const { name, role, email, password } = payload;
    const hashPassword = await bcryptjs_1.default.hash(password, 10);
    const result = await db_1.pool.query(`INSERT INTO users(name, role, email, password) VALUES($1, $2, $3, $4) RETURNING *`, [name, role, email, hashPassword]);
    return result;
};
//+ getUsers===================
const getUsers = async () => {
    const result = await db_1.pool.query(`SELECT * FROM users`);
    return result;
};
//+ getSingleUser===================
const getSingleUser = async (id) => {
    const result = await db_1.pool.query(`SELECT * FROM users WHERE id = $1`, [id]);
    return result;
};
//+updateUser=====================
const updateUser = async (name, email, id) => {
    const result = await db_1.pool.query(`UPDATE users SET name=$1, email=$2 WHERE id=$3 RETURNING *`, [name, email, id]);
    return result;
};
//+deleteUser===========
const deleteUser = async (id) => {
    const result = await db_1.pool.query(`DELETE FROM users WHERE id = $1`, [id]);
    return result;
};
exports.userServices = {
    createUser,
    getUsers,
    getSingleUser,
    updateUser,
    deleteUser,
};
