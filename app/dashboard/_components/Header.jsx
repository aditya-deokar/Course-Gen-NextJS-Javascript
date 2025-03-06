import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs"
import Image from "next/image"


const Header = () => {
  return (
    <div className="w-full flex justify-between p-5 shadow-sm ">
        <Image src={"/next.svg"} width={100} height={100} alt='logo'></Image>

        <UserButton/>
    </div>
  )
}

export default Header