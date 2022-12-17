import mongoose, { Mongoose } from "mongoose";
//import { Db, MongoClient } from "mongodb";
const connectionString = process.env.DB_CONNECTIONSTRING as string;

export let db: Mongoose;
export const connect = async () => {
  db = await mongoose.connect(connectionString);
};

// const client = new MongoClient(connectionString);
// export let db: Db;

// export const connect = async () => {
//   await client.connect();
//   db = client.db("masa_lesson1");

//   let collections = await db.collections();
//   let collectionStudents = collections.find(
//     (c) => c.collectionName === "students"
//   );
//   let collectionCourses = collections.find(
//     (c) => c.collectionName === "courses"
//   );

//   if (!collectionStudents) {
//     db.createCollection("students");
//   }

//   if (!collectionCourses) {
//     db.createCollection("courses");
//   }
// };