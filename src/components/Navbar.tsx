'use client'
import React, { useEffect, useRef, useState } from 'react'
import Favicon from '../../public/SVG/Favicon'
import SearchIcon from '../../public/SVG/SearchIcon'
import { ChevronDown, User } from 'lucide-react'
import LanguageIcon from '../../public/SVG/LanguageIcon'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { signIn, signOut } from '@/store/slices/authSlice'
import { motion } from "motion/react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  return (
    <motion.header initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }} className='fixed left-0 md:left-[230px] right-0 top-0 z-30  bg-[#F3F0EC] shadow-[0_1px_3px_0_rgb(0,0,0,0.05)]' style={{ opacity: 1, transform: 'none' }}>
      <motion.div className='flex justify-between items-center ' initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <button
          type="button"
          aria-label="Toggle sidebar"
          className="inline-flex  items-center p-2 text-sm text-green-300 text-[20px] font-[700] gap-[8px] rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <Favicon />
          Home
        </button>
        <div className='flex items-center p-[12px] md:py-[14px] md:px-[24px] sm:w-full  justify-end gap-[8px] md:gap-[24px]'>
          <div>
            <label htmlFor="search" className="mb-2 font-sans text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <SearchIcon />
              </div>
              <input type="search" id="search" className="block  p-2 ps-10 text-sm text-gray-900  rounded-lg bg-white lg:w-[400px] w-[90px]  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for books" required />
            </div>
          </div>
          <div className='flex gap-[12px] items-center '>
            <div className="relative md:inline-block hidden  text-left" ref={dropdownRef}>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-lg py-[8px] px-[12] font-sans shadow focus:ring-[#2C5A5E] bg-white flex justify-between items-center gap-2"
                type="button"
              >
                <LanguageIcon />
                English
                <ChevronDown className="w-4 h-4 ml-2" />
              </button>

            </div>
            {isLoggedIn ? <button onClick={() => dispatch(signOut())} className='flex items-center justify-center  md:p-[12px] p-[8px] text-white  bg-[#01383D] rounded-full '>
              <User />
            </button> :

              <button onClick={() => dispatch(signIn())} className='bg-[#01383D] font-sans py-[12px] md:px-[24px] px-[10px] md:text-[14px] text-[12px] rounded-lg shadow-md text-white'>
                Sign in
              </button>
            }
          </div>
        </div>
      </motion.div>

    </motion.header>
  )
}

export default Navbar