import { Router } from "express";
import * as controller from "../controllers/todoController";

export const index = Router();

index.route("/todos").get(controller.getTodo).post(controller.createTodo);
index.patch("/todos/:id", controller.updateTodo);
index.delete("/todos/:id", controller.deleteTodo);
