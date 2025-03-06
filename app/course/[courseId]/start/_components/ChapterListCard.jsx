import { Clock } from 'lucide-react'
import React from 'react'

const ChapterListCard = ({chapter, index}) => {
  return (
    <div className='grid grid-cols-5 p-4 items-center border-b'>
        <div>
            <h2 className='p-1 bg-primary text-white w-8 h-8 rounded-full text-center'>{index+1}</h2>
        </div>
        <div className='col-span-4'>
            <h2 className='font-medium'>{chapter?.ChapterName}</h2>
            <h2 className='flex items-center gap-2 text-sm text-primary'><Clock/>{chapter?.Duration}</h2>

        </div>
    </div>
  )
}

export default ChapterListCard