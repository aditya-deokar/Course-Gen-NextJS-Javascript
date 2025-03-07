import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarMenuSub, SidebarMenuSubItem, SidebarMenuSubButton } from "@/components/ui/sidebar";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"
import { ChevronRight } from "lucide-react";
import { BookOpenIcon } from "lucide-react"; // Example icon

const CourseData = [
  {
    "CourseName": "Python Programming: From Beginner to Advanced",
    "Chapters": [
      {
        "ChapterName": "Chapter 1: Python Fundamentals",
        "url": "#Chapter_1_Python_Fundamentals",
        "Topics": [
          { "title": "Introduction to Python and its Installation", "url": "#Introduction_to_Python" },
          { "title": "Data Types (Integers, Floats, Strings, Booleans)", "url": "#Data_Types" }
        ]
      },
      {
        "ChapterName": "Chapter 2: Data Structures and Functions",
        "url": "#Chapter_2_Data_Structures_and_Functions",
        "Topics": [
          { "title": "Lists: Creating, Accessing, and Manipulating", "url": "#Lists" },
          { "title": "Tuples: Immutability and Use Cases", "url": "#Tuples" }
        ]
      }
    ]
  }
];

const sidebarItems = CourseData.map((course) => ({
  title: course.CourseName,
  icon: BookOpenIcon,
  isActive: true,
  items: course.Chapters.map((chapter) => ({
    title: chapter.ChapterName,
    url: chapter.url,
    items: chapter.Topics.map((topic) => ({
      title: topic.title,
      url: topic.url
    }))
  }))
}));

export default function CourseSidebar2({}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {sidebarItems.map((item) => (
          <Collapsible key={item.title} asChild defaultOpen={item.isActive} className="group/collapsible">
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items.map((subItem) => (
                    <Collapsible key={subItem.title} asChild defaultOpen={false} className="group/collapsible">
                      <SidebarMenuSubItem>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuSubButton>
                            <a href={subItem.url}>
                              <span>{subItem.title}</span>
                            </a>
                          </SidebarMenuSubButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {subItem.items.map((topic) => (
                              <SidebarMenuSubItem key={topic.title}>
                                <SidebarMenuSubButton asChild>
                                  <a href={topic.url}>
                                    <span>{topic.title}</span>
                                  </a>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </SidebarMenuSubItem>
                    </Collapsible>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
