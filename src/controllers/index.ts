import { Request, Response } from "express";
import { getAllTodos } from "../services";

export const getTodo = async (req: Request, res: Response): Promise<void> => {
  res.send(await getAllTodos());
};

export const createTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  res.render("index", { title: "Express" });
};

export const updateTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  res.render("index", { title: "Express" });
};

export const deleteTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  res.render("index", { title: "Express" });
};
