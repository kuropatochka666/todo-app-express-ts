import "reflect-metadata";
import express, { Router } from "express";
import cors from "cors";
import logger from "morgan";
import * as path from "path";
import * as dotenv from "dotenv";
import * as bodyParser from "body-parser";


import { errorHandler, errorNotFoundHandler } from "./middlewares/errorHandler";
import { AppDataSource } from "./data-source";
import { TodoController } from "./controllers/todoController";
// Routes
// import { index } from "./routes/index";
// Create Express server
export const app = express();
dotenv.config();

// Express configuration
app.use(cors());
app.set("port", process.env.PORT || 5000);
app.use(bodyParser.json());


app.use(logger("dev"));

app.use(express.static(path.join(__dirname, "../public")));
app.use("/", new TodoController().router);

app.use(errorNotFoundHandler);
app.use(errorHandler);

AppDataSource.initialize()
  .then(() => {})
  .catch((error) => console.log(error));
