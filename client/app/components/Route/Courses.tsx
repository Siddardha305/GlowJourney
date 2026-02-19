import { useGetUsersAllCoursesQuery } from "@/redux/features/courses/coursesApi";
import React, { useEffect, useState } from "react";
import CourseCard from "../Course/CourseCard";
import Link from "next/link";

type Props = {};

const Courses = (props: Props) => {
  const { data, isLoading } = useGetUsersAllCoursesQuery({});
  const [courses, setCourses] = useState<any[]>([]);

  useEffect(() => {
    setCourses(data?.courses);
  }, [data]);

  return (
    <div className="w-full py-20 bg-theme-bg-dark relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-theme-accent/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#E57FA1]/10 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2" />

      <div className="w-[95%] sm:w-[90%] md:w-[88%] lg:w-[85%] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif text-theme-text tracking-[0.15em] uppercase mb-4">
            EXPAND YOUR SKILLS
          </h2>
          <p className="text-theme-text/70 text-lg max-w-2xl mx-auto">
            Learn professional makeup techniques from industry experts.
          </p>
        </div>

        {/* Courses Grid */}
        {isLoading ? (
          <div className="flex items-center justify-center min-h-[300px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-theme-accent"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-12">
            {courses &&
              courses.slice(0, 4).map((item: any, index: number) => ( // Showing top 4 items
                <CourseCard item={item} key={index} />
              ))}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && (!courses || courses.length === 0) && (
          <div className="text-center py-12">
            <p className="text-theme-text/50 text-xl font-serif italic">Coming Soon...</p>
          </div>
        )}

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/courses">
            <button className="text-theme-text hover:text-theme-accent transition-colors font-medium tracking-widest text-sm border-b border-theme-text/30 hover:border-theme-accent pb-1">
              VIEW ALL COURSES
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Courses;
