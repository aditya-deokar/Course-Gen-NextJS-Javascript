"use client"

import { db } from "@/configs/db"
import { CourseList } from "@/configs/schema"
import { useEffect, useState } from "react"
import CourseCard from "../_components/CourseCard"
import { Button } from "@/components/ui/button"


const ExplorePage = () => {

  const [courseList, setCourseList] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(()=>{
    GetAllCourse();
  },[pageIndex]);

  const GetAllCourse=async()=>{
    const result = await db.select().from(CourseList).limit(9).offset(pageIndex*9)

    // console.log(result);
    setCourseList(result)
  }
  return (
    <div className="min-h-[80vh] flex flex-col justify-between">
       <div>
        <h2>Explore More Courses</h2>
          <p>Explore more courses build with NeoLearn by other users </p>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
            {courseList?.map((course,index)=>(
              <div key={index} >
                <CourseCard course={course} displayUser={true}/>
              </div>
            ))}
          </div>
       </div>

       
       <div className="flex justify-center gap-5 ">
        {
          pageIndex != 0 && <Button onClick={()=>setPageIndex(pageIndex-1)}>Previous Page</Button>
        }
        
        <Button onClick={()=>setPageIndex(pageIndex+1)}>Next Page</Button>
       </div>

    </div>
  )
}

export default ExplorePage