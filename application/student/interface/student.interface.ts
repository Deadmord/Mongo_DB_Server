import { ObjectId } from "mongodb";

export interface Id {
    _id?: ObjectId;
  }
export interface IStudent extends Id {
    firstName: string;
    lastName: string;
    age: number;
}