import express, { Application, Request, Response, NextFunction } from "express";
import { studentRouter } from "./application/student/routers";
import cors from "cors"

const app: Application = express();

app.use(express.json());

app.use(cors());
app.use(myLogger);
app.use("/api/students", studentRouter);

export { app };
    
function myLogger(req: Request, res: Response, next: NextFunction) {
    console.log("my logger");
    next();
    }
