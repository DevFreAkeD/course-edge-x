import { type SchemaTypeDefinition } from "sanity";
import { studentType } from "./studentType";
import { courseType } from "./courseType";
import { instructorType } from "./instructorType";
import { categoryType } from "./categoryType";
import { enrollmentType } from "./enrollmentType";
import { lessonType } from "./lessonType";
import { lessonCompletionType } from "./lessonCompletionType";
import { moduleType } from "./moduleType";
import { blockContent } from "./blockContent";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    studentType,
    courseType,
    instructorType,
    categoryType,
    enrollmentType,
    lessonType,
    lessonCompletionType,
    moduleType,
    blockContent,
  ],
}

export * from "./studentType";
export * from "./courseType";
export * from "./instructorType";
export * from "./categoryType";
export * from "./enrollmentType";
export * from "./lessonCompletionType";
export * from "./lessonType";
export * from "./moduleType";
export * from "./blockContent";