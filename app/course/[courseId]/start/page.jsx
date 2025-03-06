'use client'
import { db } from '@/configs/db'
import { Chapters, CourseList } from '@/configs/schema'
import { and, eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import ChapterListCard from './_components/ChapterListCard'
import ChapterContent from './_components/ChapterContent'

const CourseStartPage = ({params}) => {

    const [course, setCourse] = useState();

    const [selectedChapter, setSelectedChapter] = useState();
    const [chapterContent, setChapterContent] = useState();

    useEffect(()=>{
        GetCourse();
      

        // setSelectedChapter(course?.courseOutput?.Chapters[0]);
        // GetSelectedChapterContent(0);
    },[])

    const GetCourse=async()=>{
        const result = await db.select().from(CourseList).where(
            eq(CourseList?.courseId, params?.courseId)
        )

        // console.log(result)
        setCourse(result[0]);
        GetSelectedChapterContent(0);
    }

    const GetSelectedChapterContent=async(chapterId)=>{
        const result = await db.select().from(Chapters).where(
            and(
                eq(Chapters.chapterId,chapterId),
                eq(Chapters.courseId, course.courseId)
            )
        )

        setChapterContent(result[0])

        // console.log(result);
        // console.log("chapters");
    }

  return (
    <div>
        {/* side bar */}
        <div className='fixed md:w-64 hidden md:block h-screen border-r shadow-sm'>
            <h2 className='font-medium text-lg bg-secondary p-4'>{course?.courseOutput?.CourseName}</h2>

            <div>
                {
                    course?.courseOutput?.Chapters.map((chapter,index)=>(
                        <div 
                        key={index} 
                        className={`cursor-pointer hover:bg-slate-200
                            ${selectedChapter?.ChapterName==chapter?.ChapterName && 'bg-slate-200'}`}
                        onClick={()=>{
                            setSelectedChapter(chapter);
                            GetSelectedChapterContent(index);
                        }}
                        
                        >
                            <ChapterListCard chapter={chapter} index={index}/>
                        </div>
                    ))
                }
            </div>
        </div>

        {/* content div */}
        <div className='md:ml-64'>
                <ChapterContent chapter={selectedChapter}
                content={chapterContent}
                />
        </div>
    </div>
  )
}

export default CourseStartPage