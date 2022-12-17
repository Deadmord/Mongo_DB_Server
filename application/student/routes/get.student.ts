import { Router, Request, Response } from "express";
//import { ObjectId } from "mongodb";
//import { Id } from "../interface";
import { getStudentById, getStudentByName, getStudents } from "../service";

const route = Router();

//---Get-all-students
route.get("/", async (req: Request, res: Response) => {
  console.log("our get students request");
  let result = await getStudents();
  res.send(result);
});

//---Get-student-by-Id----
route.get("/:id", async (req: Request, res: Response) => {
    console.log("id to find: ", req.params.id);
    // let studentId: Id = {
    //     _id: new ObjectId(`${req.body._id}`)
    // }
  let result = await getStudentById(req.params.id);
  res.send(result);
});

route.get("/:firstName/:lastName", async (req: Request, res: Response) => {
    if (req.params && req.params.firstName && req.params.lastName) {
      console.log("get many student by name example ", req.params);
      let firstName = req.params.firstName as string;
      let lastName = req.params.lastName as string;
      let result = await getStudentByName(firstName, lastName);
      res.send(result);
    }
  });

export { route as getStudentsRoute };
