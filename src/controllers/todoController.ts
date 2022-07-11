import { Request, Response, Router } from "express";
import { TodoService } from "../services/todoService";
import dtoValidationMiddleware from "../middlewares/dtoValidationMiddleware";
import {RequestTodoDto} from "../entity/todo/dto/requestTodoDto";

export class TodoController {
  public router: Router;
  private todoService: TodoService;
  private path = "/todos";

  constructor() {
    this.router = Router();
    this.todoService = new TodoService();
    this.routes();
  }

  public find = async (req: Request, res: Response) => {
    res.send( await this.todoService.find());
  };

  public create = (req: Request, res: Response) => {
    console.log(req);
    // res.send(this.todoService.create(req));
  };

  public update = (req: Request, res: Response) => {
    console.log(req.params.id);
    res.send(this.todoService.update());
  };

  public delete = (req: Request, res: Response) => {
    res.send(this.todoService.delete());
  };

  public routes() {
    this.router.get(`${this.path}`, this.find);
    this.router.post(`${this.path}`, this.create);
    this.router.patch(`${this.path}/:id`, this.update);
    this.router.delete(`${this.path}/:id`, this.delete);
  }
}
