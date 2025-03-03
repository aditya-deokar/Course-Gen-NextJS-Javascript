import { Button } from '@/components/ui/button'
import { ChartNoAxesGantt, Clock3Icon, LucideWavesLadder } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const CourseBasicInfo = ({course}) => {
  return (
    <div className='p-10 border rounded-xl shadow-sm mt-5'>
        <div className='grid grid-cols md:grid-cols-2 gap-5'>
            <div>
                <h2 className='font-bold text-2xl '>{course?.courseOutput?.CourseName}</h2>
                <p className='text-sm text-gray-400 mt-3 '>{course?.courseOutput?.Description}</p>

                <div className='flex justify-between w-full'>
                    <h2 className='flex gap-1 font-medium'>
                        <ChartNoAxesGantt/>
                        {course?.category}
                    </h2>

                    <h2 className='px-3  text-secondary-foreground border-[2px] rounded-xl'>
                        {course?.level}
                    </h2>
                </div>
               

                <Button className="w-full mt-5">Start</Button>
            </div>
            <div>
                <Image src={"/file.svg"} width={300} height={300} className='w-full rounded-2xl h-[240px] object-contain'/>
            </div>
        </div>

        
    </div>
  )
}

export default CourseBasicInfo