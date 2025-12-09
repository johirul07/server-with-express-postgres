import { Router } from "express";
import { todoController } from "./todo.controller";

const router = Router();

//+ post================
router.post("/", todoController.createTodo);

//+ get
router.get("/", todoController.getTodo);

router.get("/:id", todoController.singleTodo);

//+put===========
router.put("/:id", todoController.singleTodo);

//+ delete
router.delete("/:id", todoController.deleteTodo);

export const TodoRouter = router;
