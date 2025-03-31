"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"


import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar"
import Image from "next/image"

// This is sample data.
const data = {

 
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Profile",
          url: "/Dash/profile",
        },
        {
          title: "Industry Insights",
          url: "/Dash/Industry",
        },
        {
          title: "My Courses",
          url: "/Dash/courses",
        },
      ],
    },
    {
      title: "Explore Courses",
      url: "/Dash/explore",
      icon: Bot,
      items: [
        {
          title: "cate1",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Interview Preparation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Resourses",
          url: "#",
        },
        {
          title: "Interview",
          url: "#",
        },
     
      
      ],
    },
    
  ],
  Growth: [
    {
      name: "Create Course",
      url: "#",
      icon: Frame,
    },
    {
      name: "Quiz",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Build Resume",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({
  ...props
}) {
  return (
    (<Sidebar  collapsible="icon" {...props}>
      <SidebarHeader>
          <Image src={'/next.svg'} alt="logo" width={100} height={100}/>
      </SidebarHeader>
      <SidebarContent className='bg-white'>
        <NavMain items={data.navMain} />

       

        <NavProjects Growth={data.Growth} />
       
      </SidebarContent>
      <SidebarFooter>
        footer
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>)
  );
}
