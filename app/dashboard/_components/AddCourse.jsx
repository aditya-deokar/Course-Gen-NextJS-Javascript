"use client"
import { UserCourseListContext } from "@/app/_context/UserCourseListContext";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs"
import { Plus } from "lucide-react";
import Link from "next/link";
import { useContext } from "react";


const AddCourse = () => {

    const { user } = useUser();
    const {userCourseList, setUserCourseList}= useContext(UserCourseListContext);


  return (
    <div className="flex items-center justify-between">
        <div>
            <h2 className="text-2xl">Hello, 
                <span className="font-bold">{user?.fullName}</span>
            </h2>

            <p className="text-sm text-gray-500">Create new course with AI, Share with Friends</p>
        </div>

        <Link href={ userCourseList >= 5 ? "dashboard/upgrade":"/create-course"}>
            <Button>
                <Plus/>
                Create AI Course
            </Button>
        </Link>
    </div>
  )
}

export default AddCourse