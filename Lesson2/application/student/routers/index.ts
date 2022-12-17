import { getStudentRoute } from "./get.student";
import { getStudentByNameRoute } from "./get.studentByName";
import { getStudentByIdRoute } from "./get.studentById";
import { postStudentRoute } from "./post.student";
import { updateStudentRoute } from "./put.student";
import { deletStudentRoute } from "./delete.student";

export const studentRouter = [getStudentRoute, getStudentByNameRoute, getStudentByIdRoute, postStudentRoute, updateStudentRoute, deletStudentRoute];
