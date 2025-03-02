"use client"

import { Progress } from '@/components/ui/progress'
import { BookOpen, Home, LogOut, ShieldCheck } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const SideBar = () => {

    const Menu=[
        {
            id:1,
            name:"Home",
            icon:<Home/>,
            path:"/dashboard"
        },
        {
            id:1,
            name:"Explore",
            icon:<BookOpen/>,
            path:"/dashboard/explore"
        },
        {
            id:1,
            name:"Upgrade",
            icon:<ShieldCheck/>,
            path:"/dashboard/upgrade"
        },
        {
            id:1,
            name:"Logout",
            icon:<LogOut/>,
            path:"/dashboard/logout"
        },
    ]

    const path= usePathname();
  return (
    <div className='fixed h-full md:w-64 p-5 shadow-lg'>
        <Image src={"/next.svg"} width={100} height={100}/>
        <hr className='my-5' />

        <ul>
            {
                Menu.map((item,index)=>(
                    <Link href={item.path} key={index}>
                        <div className={`flex items-center gap-2 p-3 text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-gray-950 rounded-lg mb-2 
                            ${item.path == path && "bg-gray-200 text-gray-950"} `}>
                            <div className='text-2xl'>{item.icon}</div>
                            <h2>{item.name}</h2>
                        </div>
                    
                    </Link>
                ))
            }
        </ul>

        <div className='absolute bottom-10 w-[80%]'>
            <Progress value={33}/>
            <h2 className='text-sm my-2'>3 out of 5 Course created</h2>
            <h2 className='text-xs text-gray-500'>upgrade your plan for unlimited course generation</h2>
        </div>

    </div>
  )
}

export default SideBar