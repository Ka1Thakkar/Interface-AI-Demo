'use client'
import { PanelLeft } from "lucide-react";
import Image from "next/image";
import { useSidebar } from "./Providers/SidebarContext";
import Navigation from "./_components/Navigation";
import Main from "./_components/MainContent/Main";
import { useEffect } from "react";

export default function Home() {
  const toggleOpen = useSidebar((state) => state.toggleOpen)
    const isOpen = useSidebar((state) => state.isOpen)
    useEffect(() => {
        document.getElementById("mainDiv")?.addEventListener("click", () => {
            if (isOpen === true) {
                toggleOpen();
            }
        });
    }, []);
  return (
    <main id="mainDiv" className="w-full overflow-y-auto">
      <Navigation />
      <Main />
    </main>
  );
}
