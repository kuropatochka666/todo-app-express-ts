import { Router } from "express";
import * as controller from "../controllers/index";

export const index = Router();

index.route("/todos").get(controller.getTodo).post(controller.createTodo);
index.put("/todos/:id", controller.updateTodo);
index.delete("/todos/:id", controller.deleteTodo);
