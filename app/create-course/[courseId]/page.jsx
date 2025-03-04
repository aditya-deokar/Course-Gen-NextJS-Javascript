"use client"

import { db } from "@/configs/db"
import { CourseList } from "@/configs/schema"
import { useUser } from "@clerk/nextjs"
import { and, eq } from "drizzle-orm"
import { useEffect, useState } from "react"
import CourseBasicInfo from "./_components/CourseBasicInfo"
import CourseDetail from "./_components/CourseDetail"
import ChapterList from "./_components/ChapterList"
import { Button } from "@/components/ui/button"
import { GenerateChapterContent_AI } from "@/configs/AIModel"
import LoadingDialog from "../_components/LoadingDialog"

const CoursePage = ({params}) => {
    const {user} =useUser();
    const [course, setCourse] = useState([]);
    const [loading , setLoading]= useState(false);


    useEffect(() => {
      params && GetCourse();
    }, [params,user])
    

    const GetCourse=async()=>{
        const result= await db.select().from(CourseList)
        .where(
            and(
                eq(CourseList.courseId,params?.courseId),
                eq(CourseList?.createdBy,user.primaryEmailAddress.emailAddress)
            )
        )
        setCourse(result[0]);
        console.log(result);
    }

    const GenerateChapterContent=()=>{
      setLoading(true);
      const chapters= course?.courseOutput?.Chapters;
      chapters.forEach(async(chapter, index)=>{
        const PROMTP=`Explain the concept in detail on Topic: ${course?.name}, specific in Chapter:${chapter?.ChapterName} cover all the chapter points like ${chapter?.About} and add more , in JSON Format with list of array with field as title, description in detail, code example (Code field in <precode> format) if applicable and ensure the reading material must in ${chapter?.Duration}`;

        console.log(PROMTP);

        if(index==0){
          try {
            // text content
            const result = await GenerateChapterContent_AI.sendMessage(PROMTP);
            console.log(result?.response?.text());

            // video content


            // db save
            setLoading(false);
            
          } catch (error) {
            setLoading(false)
            console.log(error)
          }
        }
      })
    }


  return (
    <div className="mt-10 px-7 md:px-20 lg:px-44">
        <h2 className="font-bold text-center text-2xl">Course Layout</h2>

        <LoadingDialog loading={loading}/>

        {/* basic info */}
        <CourseBasicInfo course={course} refreshData={()=>GetCourse()}/>

        {/* course detail */}
        <CourseDetail course={course}/>

        {/* List of lesson */}
        <ChapterList course={course} refreshData={()=>GetCourse()}/>

        <Button onClick={GenerateChapterContent} className="my-10 ">Generate Course Content</Button>
    </div>
  )
}

export default CoursePage