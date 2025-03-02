import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

const TopicDesc = () => {
  return (
    <div className='mx-20 lg:mx-44'>
        {/* Topic */}
        <div>
            <label htmlFor="">Write a topic to Generate a course (e.g. , Python Course, Yoga, etc)</label>
            <Input placeholder={"Topic"}></Input>
        </div>

        <div className='mt-5'> 
            <label htmlFor="">Tell us more about your course, what you want to include</label>
            <Textarea placeholder="Course Description"/>
        </div>

        {/* Textarea */}
    </div>
  )
}

export default TopicDesc