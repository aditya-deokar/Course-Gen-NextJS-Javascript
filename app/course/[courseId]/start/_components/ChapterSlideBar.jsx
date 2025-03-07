import React from "react";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"; // Ensure this matches your UI library
import { GalleryVerticalEnd } from "lucide-react"; // Adjust icons if needed

const ChapterSlideBar = ({ CourseData }) => {
  const course = CourseData[0]; // Assuming single course for now

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">{course.CourseName}</span>
                  <span className="">v1.0.0</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {/* Dynamically Render Chapters */}
            {course.Chapters?.map((chapter) => (
              <SidebarMenuItem key={chapter.ChapterName}>
                <SidebarMenuButton asChild>
                  <a href={chapter.url} className="font-medium">
                    {chapter.ChapterName}
                  </a>
                </SidebarMenuButton>
                {chapter.Topics?.length ? (
                  <SidebarMenuSub>
                    {chapter.Topics.map((topic) => (
                      <SidebarMenuSubItem className="py-2" key={topic.title}>
                        <a href={topic.url}>{topic.title}</a>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
};

export default ChapterSlideBar;
