import { BookOpen } from "lucide-react"
import Image from "next/image"


const CourseCard = ({course}) => {
  return (
    <div className="shadow-md p-2 mt-4 rounded-lg hover:-translate-y-2 cursor-pointer transition-all duration-300">
        <Image src={course?.courseBanner} width={300} height={200} alt="banner" className="h-[200px] w-full object-contain rounded-xl"/>

        <div className="p-2">
            <h2 className="font-medium text-lg">{course?.courseOutput?.CourseName}</h2>
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
  )
}

export default CourseCard