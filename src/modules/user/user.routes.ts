import { Router } from "express";
import { userController } from "./user.controller";
import auth from "../../middleware/auth";

const router = Router();

//+ post================
router.post("/", userController.createUser);

//+ get================
router.get("/", auth("admin"), userController.getUsers);

router.get("/:id", auth("admin", "user"), userController.getSingleUser);

//+put===========
router.put("/:id", auth("admin", "user"), userController.updateUser);

//+ delete
router.delete("/:id", userController.deleteUser);

export const UserRouter = router;
