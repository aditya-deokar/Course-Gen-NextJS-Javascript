import CategoryList from '@/app/_shared/CategoryList'
import Image from 'next/image'
import React from 'react'

const SelectCategory = () => {
  return (
    <div className='px-10 md:px-20'>
        <h2 className=' font-medium -my-1.5'>Select Course Category</h2>
        <div className='grid grid-cols-3 gap-10 mt-4'>
            
            {
                CategoryList.map((item, index)=>(
                    <div className='flex flex-col p-5 border items-center rounded-xl hover:border-black hover:bg-gray-100 cursor-pointer'>
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