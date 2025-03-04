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

const EditChapters = ({course, index, refreshData}) => {

    const chapters= course?.courseOutput?.Chapters;

    const [name, setName] = useState();
    const [about, setAbout]= useState();

    useEffect(() => {
      setName(chapters[index]?.ChapterName);
      setAbout(chapters[index]?.About);
    }, [course])
    

    const onUpdatehandler=async()=>{
        course.courseOutput.Chapters[index].ChapterName=name;
        course.courseOutput.Chapters[index].About=about;

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
            <Edit />
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>Edit Chapter</DialogTitle>
            <DialogDescription>
               
                    <div className="mt-3">
                        <label className="text-secondary-foreground" htmlFor="">Chapter Title</label>
                        <Input
                         defaultValue={chapters[index]?.ChapterName}
                         onChange={(e)=>(setName(e?.target.value))}
                         />
                    </div>
                    <div>
                        <label className="text-secondary-foreground" htmlFor="">About</label>
                        <Textarea className="h-32" 
                        defaultValue={chapters[index]?.About}
                        onChange={(e)=>setAbout(e?.target.value)}
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

export default EditChapters