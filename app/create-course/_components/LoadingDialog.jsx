
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import Image from "next/image"

const LoadingDialog = ({loading}) => {
  return (
    <div>
          <AlertDialog open={loading}>
              
              <AlertDialogContent>
                  <AlertDialogHeader>
                      
                      <AlertDialogDescription>
                        <div className="flex flex-col items-center justify-center">
                            <Image width={100} height={100} src={"/book.gif"}/>
                            <h2>Please wait..</h2>
                        </div>
                      </AlertDialogDescription>
                  </AlertDialogHeader>
                  
              </AlertDialogContent>
          </AlertDialog>
    </div>
  )
}

export default LoadingDialog