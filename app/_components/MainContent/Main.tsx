import { useEffect, useRef, useState } from "react";
import Overview from "./Overview";
import { useSidebar } from "@/app/Providers/SidebarContext";
import { cn } from "@/lib/utils";

const Main = () => {
    const isOpen = useSidebar((state) => state.isOpen)
    const [isResetting, setIsResetting] = useState(false)
    useEffect(() => {
        setIsResetting(true)
        const mainDiv = document.getElementById('mainDiv')
        const sidebar = document.getElementById('sidebar')
        mainDiv?.style.setProperty('width', `calc(100% - ${sidebar?.style.width}px)`)
        setTimeout(() => setIsResetting(false), 300)
    }, [isOpen])
    return (
        <div className={cn("h-fit w-full flex flex-col items-center justify-center overflow-y-auto p-3 transition-all ease-in-out", isResetting && "transition-all ease-in-out duration-300")}>
            <Overview />
        </div>
    );
}
 
export default Main;