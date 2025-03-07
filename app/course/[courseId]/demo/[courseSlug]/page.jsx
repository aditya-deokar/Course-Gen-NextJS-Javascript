"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CourseData } from "@/app/data/Course";
import ChapterSlideBar from "../start/_components/ChapterSlideBar";

export default function CoursePage({ params }) {
  const { courseSlug } = params;
  const [course, setCourse] = useState<any>(null);

  useEffect(() => {
    // Find course from CourseData
    const selectedCourse = CourseData.find(
      (c) => c.CourseName.toLowerCase().replace(/\s+/g, "-") === courseSlug
    );
    setCourse(selectedCourse);
  }, [courseSlug]);

  if (!course) return <p className="p-4">Course not found.</p>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{course.CourseName}</h1>
      <p className="text-gray-600">{course.About}</p>

      <h2 className="mt-4 text-2xl font-semibold">Chapters:</h2>
      <ul className="list-disc pl-6">
        {course.Chapters.map((chapter, index) => (
          <li key={index}>
            <a
              href={`/${courseSlug}/${chapter.ChapterName.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-blue-600 hover:underline"
            >
              {chapter.ChapterName}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
