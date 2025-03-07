"use client";

import { useEffect, useState } from "react";
import { CourseData } from "@/app/data/Course";

export default function ChapterPage({ params }) {
  const { courseSlug, chapterSlug } = params;
  const [chapter, setChapter] = useState<any>(null);
  const [course, setCourse] = useState<any>(null);

  useEffect(() => {
    const selectedCourse = CourseData.find(
      (c) => c.CourseName.toLowerCase().replace(/\s+/g, "-") === courseSlug
    );
    setCourse(selectedCourse);

    if (selectedCourse) {
      const selectedChapter = selectedCourse.Chapters.find(
        (ch) => ch.ChapterName.toLowerCase().replace(/\s+/g, "-") === chapterSlug
      );
      setChapter(selectedChapter);
    }
  }, [courseSlug, chapterSlug]);

  if (!course || !chapter) return <p className="p-4">Chapter not found.</p>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{chapter.ChapterName}</h1>
      <p className="text-gray-600">{chapter.Content || "No content available."}</p>
    </div>
  );
}
