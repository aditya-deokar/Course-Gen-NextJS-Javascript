"use client"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { db } from "@/configs/db"
import { CourseList } from "@/configs/schema"
import { eq } from "drizzle-orm"
import { Edit } from "lucide-react"
import { useEffect, useState } from "react"

const EditCourseBasicInfo = ({course ,refreshData}) => {

    const [name, setName] = useState();
    const [description, setDescription] = useState();

    useEffect(() => {
        setName(course?.courseOutput?.CourseName);
        setDescription(course?.courseOutput?.Description);
     
    }, [course])
    

    const onUpdatehandler=async()=>{
        course.courseOutput.CourseName= name;
        course.courseOutput.Description= description;
        // console.log(course);
        const result= await db.update(CourseList).set({
            courseOutput:course?.courseOutput
        }).where(
            eq(CourseList?.id,course?.id)
        ).returning({
            id:CourseList.id
        })

        // console.log(result);
        refreshData(true);
    }
  return (
    <div>

        <Dialog>
        <DialogTrigger>
            <Edit/>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>Edit Course Title and Description</DialogTitle>
            <DialogDescription>
               
                    <div className="mt-3">
                        <label className="text-secondary-foreground" htmlFor="">Course Title</label>
                        <Input
                         defaultValue={course?.courseOutput?.CourseName}
                         onChange={(e)=>(setName(e?.target.value))}
                         />
                    </div>
                    <div>
                        <label className="text-secondary-foreground" htmlFor="">Description</label>
                        <Textarea className="h-32" 
                        defaultValue={course?.courseOutput?.Description}
                        onChange={(e)=>setDescription(e?.target.value)}
                        />
                    </div>

            </DialogDescription>
            </DialogHeader>

            <DialogFooter>
                <DialogClose>
                    <Button onClick={onUpdatehandler}>Update</Button>
                </DialogClose>
            </DialogFooter>
        </DialogContent>
        </Dialog>
    </div>
  )
}

export default EditCourseBasicInfo