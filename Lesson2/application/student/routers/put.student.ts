import { ObjectID } from "bson";
import { Router, Request, Response } from "express";
import { IStudent } from "../interface";
import { UpdateStudent } from "../service";

const route = Router();

route.put("/", async (req: Request, res: Response) => {
  let student: IStudent = {
    _id: new ObjectID(`${req.body._id}`),
    age: req.body.age,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  };
  let result = await UpdateStudent(student);
  res.send(result);
});

export { route as updateStudentRoute };
