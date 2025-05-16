"use client"
import React from 'react'
import StartUp from '../../public/SVG/StartUp';
import Philosophy from '../../public/SVG/Philosophy';
import Personal from '../../public/SVG/Personal';
import Science from '../../public/SVG/Science';
import Leadership from '../../public/SVG/Leadership';
import Productivity from '../../public/SVG/Productivity';
import Spirituality from '../../public/SVG/Spirituality';
import Business from '../../public/SVG/Business';
import LifeStyle from '../../public/SVG/LifeStyle';
import Entertainment from '../../public/SVG/Entertainment';
import Biographies from '../../public/SVG/Biographies';
import Health from '../../public/SVG/Health';
import SelfHelp from '../../public/SVG/SelfHelp';
import Psychology from '../../public/SVG/Psychology';
import Finance from '../../public/SVG/Finance';
import Image from 'next/image';
import { motion } from "motion/react"
const Categories = () => {
    const categories = [{ title: "Start-up & Entrepreneurship", icon: <StartUp /> }, { title: "Philosophy", icon: <Philosophy /> }, { title: "Personal Development", icon: <Personal /> }, { title: "Science & Technology", icon: <Science /> }, { title: "Leadership", icon: <Leadership /> },]
    const categories1 = [
        { title: "Productivity", icon: <Productivity /> }, { title: "Spirituality", icon: <Spirituality /> }, { title: "Business", icon: <Business /> }, { title: "Global Politics", src: '/global-politics.png' }, { title: "Lifestyle", icon: <LifeStyle /> },
        { title: "Romance", src: '/romance.png' }, { title: "Entertainment", icon: <Entertainment /> },
    ];
    const categories2 = [
        { title: "Biographies", icon: <Biographies /> }, { title: "Health & Nutrition", icon: <Health /> }, { title: "Self-Help", icon: <SelfHelp /> },
        { title: "Psychology", icon: <Psychology /> }, { title: "testCat", icon: <Productivity /> }, { title: "Finance & Investments", icon: <Finance /> }
    ]
    return (
        <motion.section initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} className="">
            <h2 className="text-xl font-bold mb-4 font-sans">Categories</h2>
            <div className="flex flex-col gap-3 ">
                <div className='flex gap-3 overflow-x-auto scrollbar-none'>
                    {categories.map((cat, idx) => (
                        <motion.button  whileHover = {{ scale: 1.05 }} 
                            key={idx}
                            className="px-[25px] py-[8px] flex gap-1 items-center text-[#01383D] rounded-md bg-white text-sm font-medium shadow-md  hover:bg-gray-50 transition"
                        >
                            {cat.icon}
                            {cat.title}
                        </motion.button>
                    ))}
                </div>
                <div className='flex gap-3 overflow-x-auto scrollbar-none'>
                    {categories1.map((cat, idx) => (
                        <motion.button whileHover={{ scale: 1.05 }} 
                            key={idx}
                            className="px-[25px] py-[8px] flex gap-1 items-center text-[#01383D] rounded-md bg-white text-sm font-medium shadow-md  hover:bg-gray-50 transition"
                        >
                            {cat.icon ? cat.icon : <Image src={cat.src} alt={cat.title} width={20} height={20} />}
                            {cat.title}
                        </motion.button>
                    ))}
                </div>
                <div className='flex gap-3 overflow-x-auto scrollbar-none'>
                    {categories2.map((cat, idx) => (
                        <motion.button whileHover={{ scale: 1.05 }} 
                            key={idx}
                            className="px-[25px] py-[8px] flex gap-1 items-center text-[#01383D] rounded-md bg-white text-sm font-medium shadow-md  hover:bg-gray-50 transition"
                        >
                            {cat.icon}
                            {cat.title}
                        </motion.button>
                    ))}
                </div>
            </div>
        </motion.section>
    )
}

export default Categories