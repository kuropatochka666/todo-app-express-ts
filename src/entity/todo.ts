import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
} from "typeorm";
import { User } from "./user";

@Entity("todos")
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  user: string;

  @Column()
  email: string;

  @Column()
  text: string;

  @Column()
  completed: boolean;
}
