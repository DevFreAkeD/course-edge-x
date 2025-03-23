"use server";

import { incompleteLessonById } from "@/sanity/lib/lesson/incompletedLesson";

export async function incompleteLessonAction(
    lessonId: string,
    clerkId: string
) {
    try {
        await incompleteLessonById({
            lessonId,
            clerkId,
        });

        return { success: true };
    } catch (error) {
            console.error("Error uncompleting lesson:", error);
        throw error;
    }
}