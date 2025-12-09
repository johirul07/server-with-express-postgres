import { Router } from "express";
import { userController } from "./user.controller";

const router = Router();

//+ post================
router.post("/", userController.createUser);

//+ get================
router.get("/", userController.getUsers);

router.get("/:id", userController.getSingleUser);

//+put===========
router.put("/:id", userController.updateUser);

//+ delete
router.delete("/:id", userController.deleteUser);

export const UserRouter = router;
