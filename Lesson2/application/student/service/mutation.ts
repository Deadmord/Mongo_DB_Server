import { ObjectID } from "bson";
import { isValidObjectId } from "mongoose";
import { Id, IStudent } from "../interface";
import { StudentCollection } from "../models/model";


export const addStudent = async (student: IStudent) => {
  let result = await StudentCollection.insertOne(student);

  if (result.acknowledged) {
    let nStudent: IStudent = { ...student, _id: result.insertedId };
    return nStudent;
  }
  return null;
};

//--------Mongoose-----------
// export const AddStudentNew = async (student: IStudent) => {
//     let nStudent: IStudent = new StudentModel(student);
//     let result = await nStudent.save();
//     return result;
// }
//--------Mongoose-------


export const UpdateStudent = async (student: IStudent) => {
    let studentId: Id = {
        _id: student._id
    }
    let studentNData = {
        $set: student
    }

    let result = await StudentCollection.updateOne(studentId, studentNData);
  
    if (result.acknowledged) {
      let nStudent: IStudent = { ...student};
      return nStudent;
    }
    return null;
  };


export const deleteStudent = async (id: Id) => {
    if (isValidObjectId(id)) {
        //await StudentModel.deleteOne({_id: id});
        await StudentCollection.deleteOne(id);
        return true;
    }
    return false;
  }