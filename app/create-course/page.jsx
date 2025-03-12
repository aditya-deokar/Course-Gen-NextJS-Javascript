"use client"

import { Button } from '@/components/ui/button'
import { Lightbulb, SquareMenu, SquareStack } from 'lucide-react'
import  { useContext, useEffect, useState } from 'react'
import SelectCategory from './_components/SelectCategory'
import TopicDesc from './_components/TopicDesc'
import SelectOptions from './_components/SelectOptions'
import { UserInputContext } from '../_context/userInputContext'
import { GenerateCourseLayout_AI } from '@/configs/AIModel'
import LoadingDialog from './_components/LoadingDialog'
import { db } from '@/configs/db'
import { CourseList } from '@/configs/schema'
import uuid4 from 'uuid4'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

const CreateCoursePage = () => {

    const StepperOptions=[
        {
            id:1,
            name:"Category",
            icon:<SquareStack/>,
        },
        {
            id:2,
            name:"Topic & Desc",
            icon:<Lightbulb/>,
        },
        {
            id:3,
            name:"Options",
            icon:<SquareMenu/>,
        },
    ]

    const [activeIndex, setActiveIndex] = useState(0);
    const [loading, setLoading] = useState(false);
    const {user}= useUser();

    const {userCourseInput,setUserCourseInput} =useContext(UserInputContext);

    const router= useRouter();

    // useEffect(() => {
    //   console.log(userCourseInput)
    // }, [userCourseInput])
    

    const checkStatus=()=>{
        if(userCourseInput?.length==0){
            return true;
        } 
        if(activeIndex==0 && (userCourseInput?.category?.length==0 || userCourseInput?.category==undefined)){
            return true;
        }

        if(activeIndex==1 && (userCourseInput?.topic?.length==0 || userCourseInput?.topic==undefined))
        {
            return true;
        }
        else if(activeIndex==2 &&  (userCourseInput?.level?.length==undefined || userCourseInput?.duration==undefined || userCourseInput?.video==undefined || userCourseInput?.noOfChapter==undefined) ){

            return true;
        }
        return false;
    }

    const GenerateCourseLayout=async()=>{
        setLoading(true)
        const BASIC_PROMPT="Generate A Course Tutorial on following details with field as CourseName, Description, Along with ChapterName, About, duration";

        const USER_INPUT_PROMPT=`category:${userCourseInput?.category} ,Topic: ${userCourseInput?.topic}, level: ${userCourseInput?.level}, Duration: ${userCourseInput?.duration} , NoOfChapters: ${userCourseInput?.noOfChapter}, in JSON format`;

        const FINAL_PROMPT=BASIC_PROMPT + USER_INPUT_PROMPT;
        // console.log(FINAL_PROMPT);

        const result= await GenerateCourseLayout_AI.sendMessage(FINAL_PROMPT);
        console.log(result.response?.text());
        console.log(JSON.parse(result.response?.text()));
        setLoading(false)
        SaveCourseLayoutInDB( JSON.parse(result.response?.text()) );
    }


    const SaveCourseLayoutInDB=async(courseLayout)=>{
        var id= uuid4()
        setLoading(true);
        const result = await db.insert(CourseList).values({
            courseId:id,
            name:userCourseInput?.topic,
            level:userCourseInput?.level,
            category:userCourseInput?.category,
            courseOutput:courseLayout,
            createdBy:user?.primaryEmailAddress.emailAddress,
            userName:user?.fullName,
            userProfileImage:user?.imageUrl
        })
        console.log("done")
        
        setLoading(false);
        router.replace("/create-course/"+id)
    }

  return (
    <div>
        {/* steps */}

        <div className='flex flex-col justify-center items-center mt-10'>
            <h2 className='text-4xl text-primary font-medium'>Create Course</h2>

            <div className='flex mt-10'>
                {
                    StepperOptions.map((item, index)=>(
                        <div key={index} className='flex items-center'>
                            <div className='flex flex-col items-center w-[50px] md:w-[100px]'>
                                <div className={`p-3 bg-gray-100 rounded-full ${activeIndex >= index && "bg-gray-300"}`}>
                                {item.icon}
                                </div>
                                <h2 className='hidden md:block text-sm font-medium'>{item.name}</h2>
                            </div>

                            {
                                index != StepperOptions.length-1 && <div className={`h-1 w-[50px] md:w-[100px] rounded-full lg:w-[170px] bg-gray-200 
                                ${activeIndex-1 >= index && "bg-gray-300"}`}>
                                 
                                </div>
                            }
                        </div>
                    ))
                }
            </div>
        </div>

        <div className='px-10 md:px-20 lg:px-44 mt-10'>
              {/* components */}

              {
                activeIndex==0 ? <SelectCategory/> :null
              }
              {
                activeIndex==1 ? <TopicDesc /> :null
              }
              {
                activeIndex==2 ? <SelectOptions /> :null
              }

              {/* next - prev button */}

              <div className='flex justify-between mt-10'>

                  <Button variant={"outline"} disabled={activeIndex == 0} onClick={() => setActiveIndex(activeIndex - 1)}>Previous</Button>
                {
                    activeIndex <2 &&  <Button disabled={checkStatus()} onClick={() => setActiveIndex(activeIndex + 1)}>Next</Button>
                }
                  {
                    activeIndex==2 &&  <Button disabled={checkStatus()}  onClick={() => GenerateCourseLayout() }>Generate Course Layout</Button>
                  }
              </div>

        </div>

        <LoadingDialog loading={loading}/>

    </div>
  )
}

export default CreateCoursePage