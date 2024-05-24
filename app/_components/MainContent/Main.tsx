import { useEffect, useRef } from "react";
import Overview from "./Overview";
import { useSidebar } from "@/app/Providers/SidebarContext";

const Main = () => {
    return (
        <div className="h-fit w-full flex flex-col items-center justify-center overflow-y-auto p-3 transition-all ease-in-out">
            <Overview />
        </div>
    );
}
 
export default Main;