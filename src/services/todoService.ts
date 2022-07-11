import "reflect-metadata";

import { User } from "../entity/user/user";
import { Todo } from "../entity/todo/todo";
import { AppDataSource } from "../data-source";
import { RequestTodoDto } from "../entity/todo/dto/requestTodoDto";
import { Repository } from "typeorm";

// const userRepository = AppDataSource.getRepository(User);
// const todoRepository = AppDataSource.getRepository(Todo);
//
// export const find = (): Promise<Todo[]> => {
//   return todoRepository.find();
// };
//
// export const create = (dto: RequestTodoDto): Todo => {
//   console.log("dto", dto);
//   return todoRepository.create(dto);
// };
//

export class TodoService {
  private todoRepository: Repository<Todo>;

  constructor() {
    this.todoRepository = AppDataSource.getRepository(Todo);
  }

  public find = (): Promise<Todo[]> => {
    return this.todoRepository.find();
  };

  public create = (dto: any) => {
    console.log(dto);
    return dto;
  };

  public update = () => {};
  public delete = () => {};
}
