import { Button } from '@/components/ui/button'
import { ChartNoAxesGantt, Clock3Icon, LucideWavesLadder } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import EditCourseBasicInfo from './EditCourseBasicInfo'
import { ref } from 'firebase/storage'
import { storage } from '@/configs/firebaseConfig'
import Link from 'next/link'

const CourseBasicInfo = ({ course, refreshData, edit = true }) => {
    const [selectedFile, setSelectedFile] = useState();

    const onFileSelected = (e) => {
        const file = e.target.files[0];

        setSelectedFile(URL.createObjectURL(file));

        const fileName = Date.now() + '.jpg'
        const storageRef = ref(storage, fileName)
    }



    return (
        <>
            {
                course ? <div className='p-10 border rounded-xl shadow-sm mt-5'>
                    <div className='grid grid-cols md:grid-cols-2 gap-5'>
                        <div>
                            <h2 className='font-bold text-2xl '>
                                {course?.courseOutput?.CourseName}
                                {
                                    edit && <EditCourseBasicInfo course={course} refreshData={() => refreshData(true)} />
                                }
                            </h2>
                            <p className='text-sm text-gray-400 mt-3 '>{course?.courseOutput?.Description}</p>

                            <div className='flex justify-between w-full'>
                                <h2 className='flex gap-1 font-medium'>
                                    <ChartNoAxesGantt />
                                    {course?.category}
                                </h2>

                                <h2 className='px-3  text-secondary-foreground border-[2px] rounded-xl'>
                                    {course?.level}
                                </h2>
                            </div>

                               {
                                !edit &&  <Link href={'/course/'+course?.courseId+'/start'}>
                                    <Button className="w-full mt-5">Start</Button>
                                </Link>
                               }
                            
                        </div>
                        <div>
                            <label htmlFor="upload-image">
                                <Image
                                    src={selectedFile ? selectedFile : "/file.svg"} width={300} height={300} alt='banner'
                                    className='w-full rounded-2xl h-[240px] object-contain cursor-pointer' />
                                {
                                    edit && <input type="file" id='upload-image' className='opacity-0'
                                        onChange={onFileSelected} />
                                }
                            </label>
                        </div>
                    </div>

                </div> : <div className='w-full bg-slate-200 animate-pulse rounded-lg h-[300px]'></div>
            }
        </>
    )
}

export default CourseBasicInfo