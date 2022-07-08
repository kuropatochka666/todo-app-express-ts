import "reflect-metadata";

import { User } from "../entity/user";
import { Todo } from "../entity/todo";
import { AppDataSource } from "../data-source";

const userRepository = AppDataSource.getRepository(User);
const todoRepository = AppDataSource.getRepository(Todo);

export const find = (): Promise<Todo[]> => {
  return todoRepository.find();
};

export const create = (dto: Todo): Todo => {
  console.log("dto", dto);
  return todoRepository.create(dto);
};
