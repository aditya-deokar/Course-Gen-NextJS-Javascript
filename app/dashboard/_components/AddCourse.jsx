"use client"
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs"
import { Plus } from "lucide-react";


const AddCourse = () => {

    const { user } = useUser();
  return (
    <div className="flex items-center justify-between">
        <div>
            <h2 className="text-2xl">Hello, 
                <span className="font-bold">{user?.fullName}</span>
            </h2>

            <p className="text-sm text-gray-500">Create new course with AI, Share with Friends</p>
        </div>

        <Button >
            <Plus/>
            Create AI Course
        </Button>
    </div>
  )
}

export default AddCourse