import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
const layout = ({children}) => {
  return (


    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>


       


        <div>
            <SidebarTrigger className="-ml-1" />
            {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
    

)


    
  
}

export default layout