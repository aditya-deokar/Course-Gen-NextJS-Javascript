import { BarChart3, BookOpen, Clock10, Clock3, VideoIcon } from 'lucide-react'
import React from 'react'

const CourseDetail = ({ course }) => {
    return (
        <>
            {
                course ? <div className='border p-6 rounded-xl shadow-sm mt-3'>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
                        <div className='flex gap-2 items-center'>
                            <BarChart3 className='text-4xl text-primary' />
                            <div className="">
                                <h2 className='text-xs text-secondary-foreground'>Skill Level</h2>
                                <h2 className='font-medium text-lg'>{course?.level}</h2>
                            </div>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <Clock3 className='text-4xl text-primary' />
                            <div className="">
                                <h2 className='text-xs text-secondary-foreground'>Duration</h2>
                                <h2 className='font-medium text-lg'>{course?.courseOutput?.Duration}</h2>
                            </div>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <BookOpen className='text-4xl text-primary' />
                            <div className="">
                                <h2 className='text-xs text-secondary-foreground'>Chapters</h2>
                                <h2 className='font-medium text-lg'>{course?.courseOutput?.NoOfChapters}</h2>
                            </div>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <VideoIcon className='text-4xl text-primary' />
                            <div className="">
                                <h2 className='text-xs text-secondary-foreground'>Video Included</h2>
                                <h2 className='font-medium text-lg'>{course?.includeVideo}</h2>
                            </div>
                        </div>

                    </div>
                </div> : <div className='w-full bg-slate-200 animate-pulse rounded-lg h-[70px] mt-5'></div>
            }
        </>
    )
}

export default CourseDetail