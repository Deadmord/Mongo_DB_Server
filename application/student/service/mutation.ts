import { isValidObjectId } from "mongoose";
import { Id, IStudent } from "../interface";
import { StudentModel } from "./../models/model";

export const addStudent = async (student: IStudent): Promise<IStudent> => {
  let nStudent = new StudentModel(student);
  let result = await nStudent.save();
  return result;
};

// export const addStudent = async (student: IStudent) => {
//   let result = await StudentCollection.insertOne(student);

//   if (result.acknowledged) {
//     let nStudent: IStudent = { ...student, _id: result.insertedId };
//     return nStudent;
//   }
//   return null;
// };

export const updateStudent = async (student: IStudent): Promise<IStudent | null> => {
    let studentId: Id = { _id: student._id }
    let studentNData = { $set: student }
    //let updateResult = await StudentModel.updateOne(student);
    let updateResult = await StudentModel.updateOne(studentId, studentNData);
  if (updateResult.acknowledged) {
    return student;
  } else {
    return null;
  }
};
export const deleteStudent = async (id: string): Promise<boolean> => {
  if (isValidObjectId(id)) {
    let query = { _id: id };
    let result = await StudentModel.deleteOne(query);
    return result.acknowledged;
  }
  return false;
};
export const deleteStudentByFirstName = async (
  firstName: string
): Promise<boolean> => {
  if (firstName) {
    let result = await StudentModel.deleteMany({ firstName: firstName });
    return result.acknowledged;
  }
  return false;
};
export const deleteStudentByFirstNameLastName = async (
  firstName: string,
  lastName: string
): Promise<boolean> => {
  if (firstName && lastName) {
    let query = { firstName: firstName, lastName: lastName };
    let result = await StudentModel.deleteMany(query);

    return result.acknowledged;
  }
  return false;
};
export const deleteStudentAsync = async (
  firstName: string,
  lastName: string,
  age: number
): Promise<boolean> => {
  if (firstName && lastName && age) {
    let query = { firstName: firstName, lastName: lastName, age: age };
    let result = await StudentModel.deleteMany(query);
    return result.acknowledged;
  }
  return false;
};
