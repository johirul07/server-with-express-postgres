"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const user_service_1 = require("./user.service");
//+createUser==============
const createUser = async (req, res) => {
    try {
        const result = await user_service_1.userServices.createUser(req.body);
        // console.log(result.rows[0]);
        res.status(200).json({
            success: true,
            message: "Data inserted",
            data: result.rows[0],
        });
        // res.send({ message: "data inserted" });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};
//+getUsers==============
const getUsers = async (req, res) => {
    try {
        const result = await user_service_1.userServices.getUsers();
        res.status(200).json({
            success: true,
            message: "Users retrieved successful",
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
//+ getSingleUser =================
const getSingleUser = async (req, res) => {
    try {
        const result = await user_service_1.userServices.getSingleUser(req.params.id);
        if (result.rows.length === 0) {
            res.status(404).json({
                success: false,
                message: "Users not found",
            });
        }
        else {
            res.status(200).json({
                success: true,
                message: "User data Fetched",
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
//+updateUser=============
const updateUser = async (req, res) => {
    const { name, email } = req.body;
    try {
        const result = await user_service_1.userServices.updateUser(name, email, req.params.id);
        if (result.rows.length === 0) {
            res.status(404).json({
                success: false,
                message: "Users not found",
            });
        }
        else {
            res.status(200).json({
                success: true,
                message: "User  updated successfully",
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
//+ deleteUser==============
const deleteUser = async (req, res) => {
    try {
        const result = await user_service_1.userServices.deleteUser(req.params.id);
        if (result.rowCount === 0) {
            res.status(404).json({
                success: false,
                message: "Users not found",
            });
        }
        else {
            res.status(200).json({
                success: true,
                message: "User deleted successfully",
                data: null,
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
exports.userController = {
    createUser,
    getUsers,
    getSingleUser,
    updateUser,
    deleteUser,
};
