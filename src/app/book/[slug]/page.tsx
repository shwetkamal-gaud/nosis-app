"use client";
import React, { useEffect, useRef, useState } from 'react'
import books from '@/json/sinlgleBooksMock.json'
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react"
import Background from '../../../../public/SVG/Background';
import Footer from '@/components/Footer';
import BookCarousel from '@/components/BookCarousel';
import { AlertCircle, Book, Bookmark, ChevronDown, ChevronLast, MoreHorizontal, Star } from 'lucide-react';
import HelpingHand from '../../../../public/SVG/HelpingHand';
import Share from '../../../../public/SVG/Share';
import { useRouter } from 'next/navigation';

const BookPage = ({ params }: { params: { slug: string } }) => {
    const { slug } = params
    const book = books.find((b) => b.id === slug);
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const router = useRouter()
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    if (!book) {
        return (
            <div className="p-6">
                <h1 className="text-2xl font-semibold text-red-600">Book not found</h1>
            </div>
        );
    }
    return (
        <>
            <motion.div
                className=" flex flex-col bg-[#FDFCFC] gap-6 font-sans"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >

                <motion.div
                    className="flex flex-col  px-[32px] py-[24px] relative bg-[#F4EDE7]  gap-6  "
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <motion.div className='flex justify-between'>
                        <motion.button onClick={()=> router.back()}  className='bg-white rounded text-[14px] text-[#737373] py-[8x] px-[16px]'>
                            {"<"} Back
                        </motion.button>
                        <div className="relative inline-block text-left" ref={dropdownRef}>
                            <button
                                onClick={() => setOpen(prev => !prev)}
                                className="p-2 rounded-full hover:bg-gray-100 transition"
                            >
                                <MoreHorizontal size={20} />
                            </button>

                            <AnimatePresence>
                                {open && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-50"
                                    >
                                        <ul className="divide-y divide-gray-200">
                                            {[
                                                { icon: <AlertCircle className='text-[#2C5A5E] w-[16px] h-[16px]' />, label: "Report Errors" },
                                                { icon: <HelpingHand />, label: "Claim this page" },
                                                { icon: <Star className='text-[#2C5A5E] w-[16px] h-[16px]' />, label: "Rate this title" },
                                                { icon: <Share />, label: "Share" },
                                            ].map(({ icon, label }) => (
                                                <li
                                                    key={label}
                                                    className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-gray-50 cursor-pointer transition"
                                                >
                                                    <span className="text-gray-700">{icon}</span>
                                                    <span className="text-gray-800">{label}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                    <div className='flex flex-col md:flex-row gap-6'>
                        <Image
                            src={book.image}
                            alt={book.title}
                            width={150}
                            height={220}
                            className="rounded-lg object-cover"
                        />
                        <div className="flex-1">
                            <h1 className="text-2xl font-semibold">{book.title}</h1>
                            <p className="text-gray-600">{book.author}</p>
                            <p className="text-sm text-gray-500 mt-1">{book.duration}</p>

                            <div className="flex flex-wrap gap-2 mt-3">
                                {book.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="text-xs bg-gray-100 px-2 py-1 rounded"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="hidden sm:flex gap-3 mt-4">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-[#0a0a0a] text-[15x] flex items-center gap-[8px] text-white px-4 py-2 rounded-xl"
                                >
                                   <Book className='w-[15px] h-[15px]'/> Read
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    className="border text-[15x] border-[#01383D33] shadow bg-white flex items-center gap-[8px] text-black px-4 py-2 rounded-xl"
                                ><Bookmark className='w-[15px] h-[20px]' />
                                    Bookmark
                                </motion.button>
                            </div>
                        </div>
                        <div className='absolute right-4 -bottom-0'>
                            <Background color='#D4B39C2E' />
                        </div>
                    </div>
                </motion.div>

                <motion.div className=' p-6'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <h2 className="text-lg  font-semibold mb-2">Preface</h2>
                    <p className="text-gray-700">{book.preface}</p>

                    <button className='px-[16px] py-[8px] text-[#01383D] flex gap-[8px] items-center'>See more
                        <ChevronDown className='w-[18px] h-[18px] text-[#01383D]'/>
                    </button>
                </motion.div>

                <motion.div className=' p-6'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <h2 className="text-lg font-semibold mb-2">Contents</h2>
                    <ul className="divide-y divide-gray-300  rounded">
                        {book.chapters.map((ch, i) => (
                            <motion.li
                                key={i}
                                className="p-4 flex justify-between hover:bg-gray-50 cursor-pointer"
                                whileHover={{ scale: 1.01 }}
                            >
                                <div className='flex gap-3 items-center'>
                                    <span className="text-[#01383D] font-medium">{ch.part}</span>
                                    <p className='text-[#4B5563]'>{ch.title}</p>
                                </div>
                                <span>{">"}</span>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div className=' p-6'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <h2 className="text-lg font-semibold mb-2">About Author</h2>
                    <div className='rounded-md bg-white shadow p-[24px] flex flex-col gap-[8px]'>
                        <h3 className='font-[600] text-[16px]'>{book.author}</h3>
                        <p className="text-[#737373CC] text-[16px]">{book.aboutAuthor}</p>
                    </div>
                </motion.div>
                <div className='p-6'>
                    <BookCarousel isButton={false} title='More Like This' />
                </div>
                <Footer />
                <div className="sm:hidden flex w-full gap-[16px] p-[16px] mt-4">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="border text-[15x] border-[#01383D33] shadow bg-white flex items-center gap-[8px] text-black px-4 py-2 rounded-xl"
                    ><Bookmark className='w-[15px] h-[20px]' />
                        
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="bg-[#0a0a0a] text-[15x] flex items-center gap-[8px] text-white flex-1 items-center justify-center py-2 rounded-xl"
                    >
                        <Book className='w-[15px] h-[15px]' /> Start Reading
                    </motion.button>
                </div>
                
            </motion.div>
        </>
    )
}

export default BookPage