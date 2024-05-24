'use client'
import Logo from '@/public/interface.png'
import Image from 'next/image';
import { useSidebar } from '../Providers/SidebarContext';
import { cn } from '@/lib/utils';
import { Barbell, Basket, BookOpen, ChartPieSlice, ChatsTeardrop, ClockCounterClockwise, Fingerprint, Folder, Network, ShareNetwork, SignOut, Sun, Table, Trash, UserCircle, XCircle } from '@phosphor-icons/react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useMediaQuery } from 'usehooks-ts';

const routeElements = [
    {
        name: 'Dashboard',
        icon: ChartPieSlice,
    },
    {
        name: 'Chat',
        icon: ChatsTeardrop,
    },
    {
        name: 'Integrations',
        icon: Folder,
    },
    {
        name: 'Forecasts',
        icon: BookOpen,
    },
    {
        name: 'Purchase Order',
        icon: Table,
    },
    {
        name: 'Logs',
        icon: ClockCounterClockwise,
    },
    {
        name: 'Configure Workflows',
        icon: Network,
    },
    {
        name: 'Vendors',
        icon: Basket,
    },
    {
        name: 'Pending Approval',
        icon: Fingerprint,
    },
    {
        name: 'Train Agents',
        icon: Barbell,
    },
]

const settingsElement = [
    {
        name: 'My Account',
        icon: UserCircle,
    },
    {
        name: 'Clear conversations',
        icon: Trash,
    },
    {
        name: 'Light Mode',
        icon: Sun,
    },
    {
        name: 'Updates & FAQ',
        icon: ShareNetwork,
    },
    {
        name: 'Log out',
        icon: SignOut,
    },
]

const Sidebar = () => {
    const [selected, setSelected] = useState(0)
    const isOpen = useSidebar((state) => state.isOpen)
    const toggleOpen = useSidebar((state) => state.toggleOpen)
    const isMobile = useMediaQuery("(max-width: 768px)");
    return (
        <AnimatePresence>
            {isOpen &&
                <motion.aside
                    id='sidebar'
                    initial={{ opacity: 0, x: -300 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -300 }}
                    transition={{ ease: 'easeInOut', duration: 0.25 }}
                    className={cn('h-screen top-0 left-0 absolute bg-white z-[99999] md:static sm:min-w-fit border-r-2 border-black/10 px-5 py-10 overflow-y-auto')}>
                    <div className='flex flex-col justify-between h-full gap-10'>
                        <div>
                            <div className='pl-5 flex justify-between items-center'>
                                <Image src={Logo} alt="Interface" />
                                <XCircle role='button' className='h-6 w-6 block md:hidden' onClick={toggleOpen} />
                            </div>
                            <div className='mt-10 flex flex-col gap-1'>
                                {routeElements.map((element, index) => {
                                    return (
                                        <div role='button'
                                            key={index}
                                            className={cn("flex items-center gap-5 w-full py-2 px-5 rounded-lg", index === selected && "bg-brandpurple text-white")}
                                            onClick={() => {
                                                setSelected(index)
                                                if (isMobile) {
                                                    toggleOpen()
                                                }
                                            }}
                                        >
                                            <element.icon weight='duotone' className="h-6 w-6" />
                                            <span className='md:text-lg font-semibold'>{element.name}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className='flex flex-col gap-1'>
                            {settingsElement.map((element, index) => {
                                return (
                                    <div role='button'
                                        key={index}
                                        className={cn("flex items-center gap-5 w-full py-2 px-5 rounded-lg")}
                                    >
                                        <element.icon weight='duotone' className="h-6 w-6" />
                                        <span className='text-lg font-semibold'>{element.name}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </motion.aside>}
        </AnimatePresence>
    );
}

export default Sidebar;