import { ObjectID } from "bson";
import { Router, Request, Response } from "express";
import { Id } from "../interface";
import { getStudentById } from "../service";

const route = Router();

route.get("/byId/", async (req: Request, res: Response) => {
    let studentId: Id = {
        _id: new ObjectID(`${req.body._id}`)
    }
  let result = await getStudentById(studentId);
  res.send(result);
});

export { route as getStudentByIdRoute };
