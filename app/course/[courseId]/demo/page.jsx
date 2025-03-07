"use client"
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb"
// import { Separator } from "@/components/ui/separator"
// import {
//   SidebarInset,
//   SidebarProvider,
//   SidebarTrigger,
// } from "@/components/ui/sidebar"


// import React, { useState, useEffect } from "react";
// import { ChaptersData } from "@/app/data/Chapters"
// import { CourseData } from "@/app/data/Course"
// import CourseSidebar2 from "../start/_components/ChapterSlideBar2"
// import ChapterSlideBar from "../start/_components/ChapterSlideBar";



// export default function Page({}) {

//   ChaptersData
//   CourseData

  
//   return (
//     <SidebarProvider >

                
                        
//     <ChapterSlideBar CourseData={CourseData} />
//     {/* <CourseSidebar2/> */}
                        
             
//       <SidebarInset>
//         <header className="flex h-16 shrink-0 items-center gap-2 border-b">
//           <div className="flex items-center gap-2 px-3">
//             <SidebarTrigger />
//             <Separator orientation="vertical" className="mr-2 h-4" />
//             <Breadcrumb>
//               <BreadcrumbList>
//                 <BreadcrumbItem className="hidden md:block">
//                   <BreadcrumbLink href="#">
//                     Building Your Application
//                   </BreadcrumbLink>
//                 </BreadcrumbItem>
//                 <BreadcrumbSeparator className="hidden md:block" />
//                 <BreadcrumbItem>
//                   <BreadcrumbPage>Data Fetching</BreadcrumbPage>
//                 </BreadcrumbItem>
//               </BreadcrumbList>
//             </Breadcrumb>
//           </div>
//         </header>
//         <div className="flex flex-1 flex-col gap-4 p-4">
//           <div className="grid auto-rows-min gap-4 md:grid-cols-3">
//             <div className="aspect-video rounded-xl bg-muted/50" />
//             <div className="aspect-video rounded-xl bg-muted/50" />
//             <div className="aspect-video rounded-xl bg-muted/50" />
//           </div>
//           <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
//         </div>
//       </SidebarInset>
//     </SidebarProvider>
//   )
// }




"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChaptersData } from "@/app/data/Chapters";
import { CourseData } from "@/app/data/Course";
import ChapterSlideBar from "../start/_components/ChapterSlideBar";

export default function Page() {
  const pathname = usePathname();
  const [breadcrumbItems, setBreadcrumbItems] = useState([]);
  const [currentContent, setCurrentContent] = useState(null);

  useEffect(() => {
    // Extract segments from pathname
    const pathSegments = pathname.split("/").filter(Boolean);
    let selectedCourse, selectedChapter;

    if (pathSegments.length > 0) {
      selectedCourse = CourseData.find(
        (c) => c.CourseName.toLowerCase().replace(/\s+/g, "-") === pathSegments[0]
      );
    }
    if (pathSegments.length > 1 && selectedCourse) {
      selectedChapter = selectedCourse.Chapters.find(
        (ch) => ch.ChapterName.toLowerCase().replace(/\s+/g, "-") === pathSegments[1]
      );
    }

    const breadcrumbs = [
      { name: "Home", url: "/" },
      selectedCourse && { name: selectedCourse.CourseName, url: `/${pathSegments[0]}` },
      selectedChapter && { name: selectedChapter.ChapterName, url: `/${pathSegments[0]}/${pathSegments[1]}` },
    ].filter(Boolean);

    setBreadcrumbItems(breadcrumbs);
    setCurrentContent(selectedChapter || selectedCourse);
  }, [pathname]);

  return (
    <SidebarProvider>
      <ChapterSlideBar CourseData={CourseData} />

      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b">
          <div className="flex items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                {breadcrumbItems.map((item, index) => (
                  <BreadcrumbItem key={index}>
                    {index < breadcrumbItems.length - 1 ? (
                      <>
                        <BreadcrumbLink asChild>
                          <Link href={item.url}>{item.name}</Link>
                        </BreadcrumbLink>
                        <BreadcrumbSeparator className="hidden md:block" />
                      </>
                    ) : (
                      <BreadcrumbPage>{item.name}</BreadcrumbPage>
                    )}
                  </BreadcrumbItem>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min p-4">
            {currentContent ? (
              <div>
                <h1 className="text-2xl font-bold">
                  {currentContent.ChapterName || currentContent.CourseName || "Course"}
                </h1>
                <p>{currentContent.About || "No description available."}</p>
              </div>
            ) : (
              <p>Select a course or chapter to view details.</p>
            )}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
