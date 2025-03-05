"use client"
import { db } from '@/configs/db';
import { CourseList } from '@/configs/schema';
import { useUser } from '@clerk/nextjs';
import { and, eq } from 'drizzle-orm';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import CourseBasicInfo from '../_components/CourseBasicInfo';
import { ClipboardCopy } from 'lucide-react';

const FinishScreenPage = ({params}) => {

  const {user} =useUser();
  const [course, setCourse] = useState([]);
  const [loading , setLoading]= useState(false);

  const router = useRouter();

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


  return (
    <div className='px-10 md:px-20 lg:px-44 my-7 text-primary'>
      <h2 className='text-center font-bold text-2xl my-3'>Congrats! Your Course is ready</h2>
      
      <h2 className='mt-3 '>Course URL:</h2>
      <h2 className='text-center text-gray-400 border p-2 rounded flex justify-evenly'>
        {process.env.NEXT_PUBLIC_HOST_NAME}/course/view/{course?.courseId}

        <ClipboardCopy 
         className='h-5 w-5 hover:text-gray-900'
         onClick={async()=>await navigator.clipboard.writeText(process.env.NEXT_PUBLIC_HOST_NAME+"/course/view/"+course?.courseId)}
         />
      </h2>
      <CourseBasicInfo course={course} refreshData={()=>console.log("refresh")}/>
    </div>
  )
}

export default FinishScreenPage