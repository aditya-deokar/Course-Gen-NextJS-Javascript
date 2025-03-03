"use client"
import { UserInputContext } from '@/app/_context/userInputContext'
import CategoryList from '@/app/_shared/CategoryList'
import Image from 'next/image'
import React, { useContext } from 'react'

const SelectCategory = () => {

    const {userCourseInput,setUserCourseInput} =useContext(UserInputContext);

    const handleCategoryChange= (category)=>{
            setUserCourseInput(prev=>(
                {
                    ...prev,
                    category:category
                }
            ))
    }

  return (
    <div className='px-10 md:px-20'>
        <h2 className=' font-medium -my-1.5'>Select Course Category</h2>
        <div className='grid grid-cols-3 gap-10 mt-4'>
            
            {
                CategoryList.map((item, index)=>(
                    <div 
                    defaultValue={userCourseInput?.name}
                    onClick={()=>handleCategoryChange(item.name)}
                    className={`flex flex-col p-5 border items-center rounded-xl hover:border-black hover:bg-blue-100 cursor-pointer
                    ${userCourseInput?.category ==item.name && "border-black bg-blue-100"}`}>
                        <Image src={item.icon} width={50} height={50}/>
                        <h2 className='font-medium'>{item.name}</h2>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default SelectCategory