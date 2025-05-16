"use client";
import React, { useRef } from "react";
import Image from "next/image";
import books from "@/json/booksMock.json";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react"
import { ChevronLeft, ChevronRight } from "lucide-react";

const BookCarousel = ({ title, isButton, }: { title: string, isButton: boolean }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (offset: number) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
        }
    };

    return (
        <>
            <motion.section initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="space-y-1">
                        <h2 className="text-xl font-semibold sm:text-2xl">{title}</h2>
                    </div>
                    {isButton && <div className="flex items-center gap-2">
                        <button onClick={() => scroll(-300)} className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  shadow-sm hover:text-accent-foreground h-8 w-8 rounded-full bg-white hover:bg-gray-100">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-chevron-left h-4 w-4"
                            >
                                <path d="m15 18-6-6 6-6" />
                            </svg>
                        </button>
                        <button onClick={() => scroll(300)} className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  shadow-sm hover:text-accent-foreground h-8 w-8 rounded-full bg-white hover:bg-gray-100">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-chevron-right h-4 w-4"
                            >
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </button>
                    </div>}
                </div>
                <div className="relative -mx-4 sm:mx-0">
                    <div ref={scrollRef} className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 px-4 sm:px-0 pt-2 scrollbar-none scroll-smooth">
                        {books.map((book, id) => (
                            <motion.a
                                whileHover={{ scaleY: 1.05 }}
                                href={`/book/${book.id
                                    }`} key={id}
                                className="flex-none group cursor-pointer"
                                style={{ transform: "none" }}
                            >
                                <div className="w-[140px] sm:w-[200px] space-y-2 sm:space-y-3 pt-2">
                                    <div className="relative aspect-[2/3] w-full overflow-hidden rounded-lg transition-shadow duration-200 group-hover:shadow-xl">
                                        <img
                                            alt="The Secret"
                                            loading="lazy"
                                            decoding="async"
                                            data-nimg="fill"
                                            className="object-cover"
                                            sizes="100vw"
                                            src={book.image}
                                            style={{
                                                position: "absolute",
                                                height: "100%",
                                                width: "100%",
                                                inset: 0,
                                                color: "transparent"
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="font-medium text-sm sm:text-base leading-tight line-clamp-2">
                                            {book.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-muted-foreground line-clamp-1">
                                            {book.author}
                                        </p>
                                        <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground">
                                            {book.duration}
                                        </div>
                                    </div>
                                </div>
                            </motion.a>
                        ))}

                    </div>
                </div>
            </motion.section>

        </>
    );
};

export default BookCarousel;
