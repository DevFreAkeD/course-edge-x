import { type SchemaTypeDefinition } from "sanity";
import { studentType } from "./studentType";
import { courseType } from "./courseType";
import { instructorType } from "./instructorType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    studentType,
    courseType,
    instructorType,
  ],
}

export * from "./studentType";
export * from "./courseType";
export * from "./instructorType";