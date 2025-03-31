"use client"

import { db } from "@/configs/db"
import { Chapters, CourseList } from "@/configs/schema"
import { useUser } from "@clerk/nextjs"
import { and, eq } from "drizzle-orm"
import { use, useEffect, useState } from "react"
import CourseBasicInfo from "./_components/CourseBasicInfo"
import CourseDetail from "./_components/CourseDetail"
import ChapterList from "./_components/ChapterList"
import { Button } from "@/components/ui/button"
import { GenerateChapterContent_AI } from "@/configs/AIModel"
import LoadingDialog from "../_components/LoadingDialog"
// import service from "@/configs/service"
import { useRouter } from "next/navigation"



const CoursePage = async({params}) => {
    const {user} =useUser();
    const [course, setCourse] = useState([]);
    const [loading , setLoading]= useState(false);

    const resolvedParams = use(params);

    const router = useRouter();


    useEffect(() => {
      resolvedParams && GetCourse();
    }, [resolvedParams,user])
    

    const GetCourse=async()=>{
        const result= await db.select().from(CourseList)
        .where(
            and(
                eq(CourseList?.courseId,resolvedParams?.courseId),
                eq(CourseList?.createdBy,user.primaryEmailAddress.emailAddress)
            )
        )
        setCourse(result[0]);
        console.log(result);
    }


  const GenerateChapterContent=()=>{
    setLoading(true);
    const chapters= course?.courseOutput?.Chapters;
    chapters.forEach( async(chapter, index)=>{
      const PROMTP=`Explain the concept in detail on Topic: ${course?.name}, specific in Chapter:${chapter?.ChapterName} cover all the chapter points like ${chapter?.About} and add more , in JSON Format with list of array with field as title, description in detail, code example (Code field in <precode> format) if applicable and ensure the reading material must in ${chapter?.Duration}`;

      console.log(PROMTP);

<<<<<<< HEAD
              // video content
              // service.getVideo(course?.name+':'+chapter?.ChapterName).then(resp=>{
              //   console.log(resp);
              //   videoId=resp[0]?.id?.videoId
              // })



            // text content
            const result = await GenerateChapterContent_AI.sendMessage(PROMTP);
            console.log(result?.response?.text());
            const content= JSON.parse(result?.response?.text());

          


            // db save
            await db.insert(Chapters).values({
              chapterId:index,
              courseId:course?.courseId,
              content:content,
              videoId:"videoId"
=======
     
        try {
          let videoId='';

            // video content
            service.getVideo(course?.name+':'+chapter?.ChapterName).then(resp=>{
              console.log(resp);
              videoId=resp[0]?.id?.videoId
>>>>>>> 5085d27c9b57d64ec591d7c4ea611d41cdbb5b88
            })



          // text content
          const result = await GenerateChapterContent_AI.sendMessage(PROMTP);
          console.log(result?.response?.text());
          const content= JSON.parse(result?.response?.text());

        


          // db save
          await db.insert(Chapters).values({
            chapterId:index,
            courseId:course?.courseId,
            content:content,
            videoId:videoId
          })

          setLoading(false);
          
        } catch (error) {
          setLoading(false)
          console.log(error)
        }


       
       // publish course
       await db.update(CourseList).set({
        publish:true
      })

      router.replace('/create-course/'+course?.courseId+'/finish')

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