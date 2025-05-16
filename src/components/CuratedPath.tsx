"use client"
import Image from 'next/image'
import React from 'react'
import {  motion } from "motion/react"
const CuratedPath = () => {
    const curatedData = [
        {
            id:1,
            title: "Healthy Living",
            books: ["/books/running.jpg", "/books/culture-code.jpg", "/books/zones-solution.jpg"]
        },
        {
            id:2,
            title: "Readers' Choice",
            books: ["/books/meaning.jpg", "/books/running.jpg", "/books/culture-code.jpg"]
        },
        {
            id:3,
            title: "Featured Books",
            books: ["/books/zones-solution.jpg", "/books/meaning.jpg", ]
        }
      ]
  return (
      <>
          <motion.div initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }} className="flex gap-6 sm:gap-8 overflow-x-auto pb-8 px-4 sm:px-0 pt-4 scrollbar-none">
            {curatedData.map((item, idx) =>(
                <motion.div key={item.id} whileHover={{ scale: 1.05 }} 
                    className="flex-none w-[300px] sm:w-[400px] cursor-pointer group"
                    style={{ opacity: 1, transform: "none" }}
                >
                    <div
                        className="relative h-[220px] sm:h-[260px] rounded-[1.5rem] p-8 overflow-hidden"
                        style={{
                            background:
                                "linear-gradient(135deg, rgb(139, 143, 255) 0%, rgb(107, 204, 222) 100%)"
                        }}
                    >
                        <div className="h-full flex flex-col relative z-10">
                            <div className="space-y-1">
                                <h3 className="text-white text-3xl sm:text-4xl font-medium tracking-wide">
                                   {item.title}
                                </h3>
                                <p className="text-white/80 text-sm sm:text-base max-w-[80%] pb-2">
                                    {item.title}
                                </p>
                            </div>
                            <div className="relative h-[140px] sm:h-[160px] mt-auto -mb-24">
                                <div className="absolute -right-20 bottom-0 flex items-end justify-end w-full">
                                    {item.books.reverse().map((book, bid)=>(
                                        <motion.div whileHover={{ scale: 1.05 }} 
                                            className="absolute origin-bottom"
                                            style={{
                                                right: bid *100,
                                                bottom: 0,
                                                zIndex: 3-bid,
                                                transform: "rotate(0deg)"
                                            }}
                                        >
                                            <div
                                                className="relative w-[120px] h-[180px] sm:w-[140px] sm:h-[210px] transition-all duration-300"
                                                style={{
                                                    boxShadow: "rgba(0, 0, 0, 0.15) 0px 4px 20px",
                                                    opacity: 1,
                                                    transform: "none"
                                                }}
                                            >
                                                <motion.img whileHover={{ scale: 1.05 }} 
                                                    alt="Nutrition in Crisis: Flawed Studies, Misleading Advice, and the Real Science of Human Metabolism"
                                                    decoding="async"
                                                    data-nimg="fill"
                                                    className="object-cover rounded-xl"
                                                    sizes="100vw"
                                                   
                                                    src={book}
                                                    style={{
                                                        position: "absolute",
                                                        height: "100%",
                                                        width: "100%",
                                                        inset: 0,
                                                        color: "transparent"
                                                    }}
                                                />
                                                <div className="absolute inset-0 rounded-xl ring-1 ring-black/[0.08] group-hover:ring-black/[0.12] transition-all duration-300" />
                                            </div>
                                        </motion.div>
                                    ))}
                                
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay" />
                        <div className="absolute inset-0 rounded-[1.5rem] ring-1 ring-white/[0.15]" />
                    </div>
                </motion.div>
            ))}
          </motion.div>
      </>
  
  )
}

export default CuratedPath