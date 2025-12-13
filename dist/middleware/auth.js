"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const auth = (...roles) => {
    return async (req, res, next) => {
        try {
            const token = req.headers.authorization;
            // console.log({ authToken: token });
            if (!token) {
                return res.status(401).json({ message: "Unauthorized" });
            }
            const decoded = jsonwebtoken_1.default.verify(token, config_1.default.jwtSecret);
            console.log(decoded);
            req.user = decoded;
            if (roles.length && !roles.includes(decoded.role)) {
                return res.status(401).json({ message: "Unauthorized" });
            }
            next();
        }
        catch (err) {
            res.status(500).json({
                success: false,
                message: err.message,
            });
        }
    };
};
exports.default = auth;
