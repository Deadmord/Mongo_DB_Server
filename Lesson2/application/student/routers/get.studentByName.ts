import { Router, Request, Response } from "express";
import { IStudentName } from "../interface";
import { getStudentByName } from "../service";

const route = Router();

route.get("/byName/", async (req: Request, res: Response) => {
    let studentName: IStudentName = {
        firstName: req.body.firstName
    }
  let result = await getStudentByName(studentName);
  res.send(result);
});

export { route as getStudentByNameRoute };
