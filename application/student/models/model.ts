import { db } from "../../../mongoDb/mongoDb";

import { studentSchema } from "../../../mongoDb/schema/student.schema";
import { IStudent } from "../interface/student.interface";

export const StudentModel = db.model<IStudent>("Student", studentSchema);
//export const StudentModel = db.model<IStudent>("Student", studentSchema, "spesialColection");

// import { Collection } from "mongodb";
// import { db } from "../../../mongoDb/mongoDb";
// import { IStudent } from "../interface/student.interface";

// export const StudentCollection: Collection<IStudent> =
//     db.collection<IStudent>("students");
