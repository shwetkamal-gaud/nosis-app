'use client';
import { useState } from 'react';
import {
    HomeIcon,
    UsersIcon,
    Search,
    Library,
    Gift,
    HelpCircle,
    UserCircle,
    TwitterIcon,
    FacebookIcon,
    InstagramIcon,
} from 'lucide-react';
import MainLogo from '../../public/SVG/MainLogo';
import { motion } from "motion/react"

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const [tab, setTab] = useState('Home')
    return (
        <>
            <motion.aside initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className={`
                    fixed left-0 md:top-0 bottom-0 z-20  w-full sm:h-screen md:w-[230px] flex-col md:bg-[#F3F0EC] bg-white md:px-4 md:py-6 px-2 py-2 shadow-[1px_0_3px_0_rgb(0,0,0,0.1)] flex  
                    `
                }
                style={{opacity:1, transform:'none'}}
                aria-label="Sidebar"
            >
                <motion.div initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }} className="h-full md:flex-col flex-row flex ">
                    
                    <div className='pb-[32px] md:inline-flex hidden self-center'>
                        <MainLogo />
                    </div>
                    <div className='md:flex-col flex-row h-full  flex-1 flex justify-between'>
                        <ul className="space-y-2 w-full md:flex-col flex-row flex justify-around  font-medium">
                            {sidebarTopItems.map((item, index) => (
                                <li onClick={() => setTab(item.label)} key={index}>
                                    <a
                                        href={item.href}
                                        className={`flex font-sans items-center px-[12px] py-[8px] text-gray-900 gap-[12px] rounded-lg dark:text-white dark:hover:bg-gray-700 group`}
                                    >
                                        <item.icon className="w-5 h-5 text-black dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                                        <span className={item.label === tab ? 'text-[#0A0A0A]' : 'text-[#737373B2]'}>{item.label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="md:flex hidden flex-col  gap-[24px] font-medium">
                            <button className='py-[11px] px-[38px]  text-[14px] bg-white border border-[#E5E5E580] shadow-md flex  gap-[8px] items-center font-meduim rounded-lg w-full'>
                                <Gift className='text-[14px]' />
                                Invite Friends
                            </button>
                            <ul className='space-y-2'>
                                {sidebarBottomItems.map((item, index) => (
                                    <li onClick={() => setTab(item.label)} key={index}>
                                        <a
                                            href={item.href}
                                            className={`flex items-center px-[12px] py-[8px] text-gray-900 gap-[12px] rounded-lg dark:text-white dark:hover:bg-gray-700 group`}
                                        >
                                            <item.icon className="w-5 h-5 text-black dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                                            <span className={item.label === tab ? 'text-[#0A0A0A]' : 'text-[#737373B2]'}>{item.label}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <div className='flex px-[12px] py-[8px] gap-[16px] '>
                                <TwitterIcon/>
                                <InstagramIcon/>
                                <FacebookIcon/>
                            </div>
                        </div>
                    </div>

                </motion.div>
            </motion.aside>
        </>
    );
}

const sidebarTopItems = [
    {
        label: 'Home',
        href: '#',
        icon: HomeIcon,
    },
    {
        label: 'Explore',
        href: '#',
        icon: Search,

    },
    {
        label: 'Library',
        href: '#',
        icon: Library,

    },
];


const sidebarBottomItems = [
    {
        label: 'Request a book',
        href: '#',
        icon: HelpCircle,
    },
    {
        label: 'About Us',
        href: '#',
        icon: UsersIcon,

    },
    {
        label: 'My Account',
        href: '#',
        icon: UserCircle,

    },
];
