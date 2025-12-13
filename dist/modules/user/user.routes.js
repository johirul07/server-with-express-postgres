"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const auth_1 = __importDefault(require("../../middleware/auth"));
const router = (0, express_1.Router)();
//+ post================
router.post("/", user_controller_1.userController.createUser);
//+ get================
router.get("/", (0, auth_1.default)("admin"), user_controller_1.userController.getUsers);
router.get("/:id", (0, auth_1.default)("admin", "user"), user_controller_1.userController.getSingleUser);
//+put===========
router.put("/:id", (0, auth_1.default)("admin", "user"), user_controller_1.userController.updateUser);
//+ delete
router.delete("/:id", user_controller_1.userController.deleteUser);
exports.UserRouter = router;
