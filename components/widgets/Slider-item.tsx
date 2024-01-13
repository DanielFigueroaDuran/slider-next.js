
import { cn } from "@/lib/utils"
import Image from "next/image"

const SliderItem = () => {
  return (
    <li className={cn(
      'absolute inset-0 overflow-hidden after:absolute after:w-full after:h-full after:left-0 after:bottom-0'
    )}>
      <div className="relative w-full h-full">
            <Image src="/imgs/audi2.jpg" alt="Image" fill className="object-cover"/>
      </div>
    </li>
  )
}

export default SliderItem