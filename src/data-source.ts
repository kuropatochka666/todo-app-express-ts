import { DataSource } from "typeorm";
import { User } from "./entity/user/user";
import { Todo } from "./entity/todo/todo";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "root",
  database: "todo_app",
  synchronize: true,
  logging: true,
  entities: [User, Todo],
  subscribers: [],
  migrations: [],
});
