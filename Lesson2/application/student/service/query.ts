import { Id, IStudent, IStudentName } from "../interface/student.interface";
import { StudentCollection } from "../models/model";

export const getStudents = async (): Promise<IStudent[]> => {
  let res = StudentCollection.find();
  let result = (await res.toArray()) as IStudent[];
  return result;
};

export const getStudentByName = async (studentName: IStudentName): Promise<IStudent[]> => {
  let res = StudentCollection.find(studentName);
  let result = (await res.toArray()) as IStudent[];
  return result;
};

export const getStudentById = async (studentId: Id): Promise<IStudent> => {
    let res = StudentCollection.findOne(studentId);
    let result = (await res) as IStudent;
    return result;
  };