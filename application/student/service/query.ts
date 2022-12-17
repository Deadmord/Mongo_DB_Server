import { isValidObjectId } from "mongoose";
import { IStudent } from "../interface/student.interface";
import { StudentModel } from "./../models/model";

export const getStudents = async (): Promise<IStudent[]> => {
  let res = await StudentModel.find()
    .select({ firstName: 1, lastName: 1, age: 1, _id: 1 })
    .lean();
  return res;
};

export const getStudentById = async (id: string): Promise<IStudent> => {
    if (isValidObjectId(id)) {
        let query = { _id: id };
        let result = (await StudentModel.findOne(query));
        if(result) return result;
      }
      return {} as IStudent ;
}; 
  
export const getStudentByName = async (firstName: string, lastName: string): Promise<IStudent[]> => {
    if (firstName && lastName) {
        let query = { firstName: firstName, lastName: lastName };
        let result = await StudentModel.find(query);
    
        return result;
    }
    return [];
}; 

// import { Id, IStudent, IStudentName } from "../interface/student.interface";
// import { StudentCollection } from "../models/model";

// export const getStudents = async (): Promise<IStudent[]> => {
//   let res = StudentCollection.find();
//   let result = (await res.toArray()) as IStudent[];
//   return result;
// };

// export const getStudentByName = async (studentName: IStudentName): Promise<IStudent[]> => {
//   let res = StudentCollection.find(studentName);
//   let result = (await res.toArray()) as IStudent[];
//   return result;
// };

// export const getStudentById = async (studentId: Id): Promise<IStudent> => {
//     let res = StudentCollection.findOne(studentId);
//     let result = (await res) as IStudent;
//     return result;
//   };
