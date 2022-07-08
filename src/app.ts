import "reflect-metadata";
import express from "express";
import cors from "cors";
import logger from "morgan";
import * as path from "path";
import * as dotenv from "dotenv";
import * as bodyParser from "body-parser";

dotenv.config();

import { errorHandler, errorNotFoundHandler } from "./middlewares/errorHandler";
import { AppDataSource } from "./data-source";

// Routes
import { index } from "./routes/index";

// Create Express server
export const app = express();

// Express configuration
app.use(cors());
app.set("port", process.env.PORT || 5000);
app.use(bodyParser.json());

app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");

app.use(logger("dev"));

app.use(express.static(path.join(__dirname, "../public")));
app.use("/", index);

app.use(errorNotFoundHandler);
app.use(errorHandler);

AppDataSource.initialize()
  .then(() => {})
  .catch((error) => console.log(error));
