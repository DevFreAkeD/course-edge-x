import getCourseBySlug from "@/sanity/lib/courses/getCourseBySlug";
import { auth } from "@clerk/nextjs/server";

interface CoursePageProps {
    params: Promise<{
        slug: string;
    }>
}

export default async function({params}: CoursePageProps) {
    const { slug } = await params;
    const course = await getCourseBySlug(slug);
    const { userId } = await auth();

    if (!course) {
        return (
          <div className="container mx-auto px-4 py-8 mt-16">
            <h1 className="text-4xl font-bold">Course not found</h1>
          </div>
        );
    }

    return (
        <div>CoursePage: {slug}</div>
    )
};