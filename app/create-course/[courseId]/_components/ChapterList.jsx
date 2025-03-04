import { CheckCircle, Clock } from 'lucide-react'
import React from 'react'
import EditChapters from './EditChapters'

const ChapterList = ({course ,refreshData}) => {
  return (
    <div className='mt-3 '>
        <h2 className='text-2xl font-bold'>Chapters</h2>
        <div className='mt-2'>
            {course?.courseOutput?.Chapters.map((chapter,index)=>(
               <div className='border p-5 rounded-lg flex items-center justify-between'>
                     <div className='flex gap-5 items-center'>
                    <h2 className='bg-primary h-10 w-10 p-2 text-primary-foreground rounded-full text-center flex-none'>{index + 1}</h2>
                    <div>
                        <h2 className='font-medium text-lg'>
                          {chapter?.ChapterName} 
                          <EditChapters refreshData={()=>refreshData()} course={course} index={index}/>
                        </h2>
                        <p className='text-sm w-[94%] text-secondary-foreground'>{chapter?.About}</p>
                        <p className='flex gap-2 text-secondary-foreground mt-2 items-center'> <Clock/> {chapter?.Duration}</p>
                    </div>
                </div>

                <CheckCircle className='text-4xl text-secondary-foreground/60 flex-none'/>
               </div>
            ))}
        </div>
    </div>
  )
}

export default ChapterList