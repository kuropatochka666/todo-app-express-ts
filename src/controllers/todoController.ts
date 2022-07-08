import { Request, Response } from "express";
import { find, create } from "../services/todoService";

export const getTodo = async (req: Request, res: Response): Promise<void> => {
  res.send(await find());
};

export const createTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  console.log(req.body);
  res.send(await create(req.body));
};

export const updateTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  // res.render("index", { title: "Express" });
};

export const deleteTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  // res.render("index", { title: "Express" });
};
