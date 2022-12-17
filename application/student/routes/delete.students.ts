import { Router, Request, Response } from "express";
import { deleteStudent } from "../service";
import {
  deleteStudentAsync,
  //deleteStudentByFirstName,
  deleteStudentByFirstNameLastName,
} from "./../service/mutation";

const route = Router();
//----Delete-by-Id----
route.delete("/:id", async (req: Request, res: Response) => {
    console.log("id to remove", req.params.id);
    // let studentId: Id = {
    //     _id: new ObjectID(`${req.params.id}`)
    // } 
    // let result = await deleteStudent(studentId);
    let result = await deleteStudent(req.params.id);
    res.send(result);
  });

//----Delete-by-all-params----
route.delete("/", async (req: Request, res: Response) => {
  if (req.query && req.query.firstName && req.query.lastName && req.query.age) {
    console.log("start");
    let result = await deleteStudentAsync(
      req.query.firstName as string,
      req.query.lastName as string,
      parseInt(req.query.age as string)
    );
    res.send(result);
  }
  res.send(false);
});

route.delete("/:firstName/:lastName", async (req: Request, res: Response) => {
  if (req.params && req.params.firstName && req.params.lastName) {
    console.log("delete many example", req.params);
    let firstName = req.params.firstName as string;
    let lastName = req.params.lastName as string;
    let result = await deleteStudentByFirstNameLastName(firstName, lastName);
    res.send(result);
  }
});
export { route as deleteStudentsRoute };
