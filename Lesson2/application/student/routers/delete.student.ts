import { ObjectID } from "bson";
import { Id } from './../interface/student.interface';
import { Router, Request, Response } from "express";
import { deleteStudent, getStudents } from "../service";

const route = Router();

route.delete("/:id", async (req: Request, res: Response) => {
    console.log("id to delete: ", req.params.id)
    let studentId: Id = {
        _id: new ObjectID(`${req.params.id}`)
    } 
  let result = await deleteStudent(studentId);
  res.send(result);
});

export { route as deletStudentRoute };
