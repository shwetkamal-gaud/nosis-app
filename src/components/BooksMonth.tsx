"use client"
import React from 'react'
import books from "@/json/booksMock.json";
import { Bookmark, BookOpen } from 'lucide-react';
import Image from 'next/image';
import Background from '../../public/SVG/Background';
import { motion } from "motion/react"
const BooksMonth = () => {
    const baseButton = "flex items-center justify-center gap-1 rounded-md transition-all sm:text-[15px] text-[10px]  md:px-[40px] md:py-[12px] px-[8px] py-[10px]  ";
    return (
        <motion.section initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} className="flex flex-col gap-[8px] w-full">
            <h2 className="text-xl font-bold  font-sans">Books Month</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2  gap-[24px]">
                {books.slice(0, 2).map((book, idx) => (
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        key={book.id}
                        className={`flex flex-row gap-[12px] relative  overflow-hidden p-4 rounded-lg ${idx % 2 === 0 ? "bg-[#DAE4FF]" : "bg-[#F7E5A4]"
                            }`}
                    >
                        <Image
                            src={book.image}
                            alt={book.title}
                            width={133}
                            height={200}
                            className="rounded z-10"
                        />

                        <div className=" flex flex-col z-10 sm:gap-3 gap-2 justify-between">
                            <div className='flex flex-col gap-3'>
                                <h3 className="text-[18px] text-wrap whitespace font-semibold ">{book.title.split(":")[0]}</h3>
                                <p className="text-sm text-gray-700">{book.author}</p>
                                <p className="text-sm text-gray-500">{book.duration}</p>
                            <div className="flex gap-1  md:gap-3">
                                    <button className={`${baseButton} text-white bg-[#003049]`}>
                                    <BookOpen size={16} />
                                    Read
                                </button>
                                    <button className={`${baseButton} text-black border`}>
                                    <Bookmark size={16} />
                                    Bookmark
                                </button>
                            </div>
                            </div>
                            <p className="text-sm sm:block hidden text-gray-700 mt-3 line-clamp-3">
                                This summary offers a concise overview of *The Blue
                                Zones Solution* by Dan Buettner, capturing its k...
                            </p>
                        </div>
                        <div className={`absolute  -right-1 z-5 -bottom-8 lg:hidden inline-block`}>
                            <Background color={idx % 2 === 0 ? "#91AFFF4D" : "#ECD78C"} />
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    )
}

export default BooksMonth