import { BookOpen, EllipsisVertical } from "lucide-react"
import Image from "next/image"
import DropDownOption from "./DropDownOption"
import { db } from "@/configs/db"
import { Chapters, CourseList } from "@/configs/schema"
import { eq } from "drizzle-orm"
import Link from "next/link"



const CourseCard = ({course ,refreshData}) => {

    const handleOnDelete=async()=>{
        const resp = await db.delete(CourseList)
        .where(eq(CourseList.id, course?.id))
        .returning({ id: CourseList.id });

        const resp2 = await db.delete(Chapters)
        .where(eq(Chapters.courseId, course?.courseId))
        .returning({ id: Chapters.chapterId });

        if(resp){
            refreshData()
        }
    }


  return (
   <Link href={'/course/'+course?.courseId} className="">
         <div className="shadow-md p-2 mt-4 rounded-lg hover:-translate-y-2 cursor-pointer transition-all duration-300">
        <Image src={course?.courseBanner} width={300} height={200} alt="banner" className="h-[200px] w-full object-contain rounded-xl"/>

        <div className="p-2">
            <h2 className="font-medium text-lg flex justify-between items-center">
                {course?.courseOutput?.CourseName}
                
                <DropDownOption handleOnDelete={handleOnDelete}>
                    <EllipsisVertical/>
                </DropDownOption>
            </h2>
            <p className="text-primary/50 text-sm my-1">{course?.category}</p>

            <div className="flex items-center justify-between">
                <h2 className="flex gap-2 items-center p-1 bg-purple-200 rounded text-primary text-sm">
                    <BookOpen/>
                    {course?.courseOutput?.NoOfChapters} Chapters
                </h2>
                <h2 className="p-1 bg-purple-200 rounded text-primary text-sm">{course?.courseOutput?.Level}</h2>
            </div>
        </div>
    </div>
   </Link>
  )
}

export default CourseCard