import { useSidebar } from "../Providers/SidebarContext";
import { MagnifyingGlass, Sidebar } from "@phosphor-icons/react";
import { motion } from 'framer-motion'

const Navigation = () => {
    const toggleOpen = useSidebar((state) => state.toggleOpen)
    const isOpen = useSidebar((state) => state.isOpen)
    return (
        <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.25 }}
            className="md:px-10 px-5 py-5 flex flex-grow justify-between w-full items-center h-fit border-b-2 border-black/10 bg-white sticky top-0 gap-5 z-[999] transition-all ease-in-out"
        >
            <button
                onClick={() => {
                    toggleOpen()
                }}
            >
                <Sidebar weight="duotone" height={32} width={32} />
            </button>
            <p className="text-brandpurple font-bold text-xl">
                Dashboard
            </p>
            <div className="bg-black/5 h-fit flex items-center rounded-lg px-1 gap-2 md:w-fit">
                <MagnifyingGlass height={16} width={16} className="text-black/20" />
                <input placeholder="Search" className="bg-transparent outline-none py-1 placeholder:text-black/20 w-full" />
                <p className="text-black/20">
                    ⌘/
                </p>
            </div>
        </motion.nav>
    );
}

export default Navigation;