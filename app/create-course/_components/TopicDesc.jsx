"use client"
import { UserInputContext } from '@/app/_context/userInputContext';
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react';
import  { useContext } from 'react'

const TopicDesc = () => {

  const {userCourseInput,setUserCourseInput} =useContext(UserInputContext);

  const handleInputChange=(filedName,value)=>{
      setUserCourseInput(prev=>(
        {
          ...prev,
          [filedName]:value
        }
      ))
  }
  return (
    <div className='mx-20 lg:mx-44'>
        {/* Topic */}
        <div>
            <label htmlFor="">Write a topic to Generate a course (e.g. , Python Course, Yoga, etc)</label>
            <Input
            defaultValue={userCourseInput?.topic}
            onChange={(e)=>handleInputChange("topic", e.target.value)}
            placeholder={"Topic"}></Input>
        </div>

        <div className='mt-5'> 
            <label htmlFor="">Tell us more about your course, what you want to include</label>
            <Textarea 
            defaultValue={userCourseInput?.description}
            onChange={(e)=>handleInputChange("description", e.target.value)}
            placeholder="Course Description"/>
        </div>

        {/* Textarea */}
    </div>
  )
}

export default TopicDesc