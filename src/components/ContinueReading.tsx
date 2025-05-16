"use client"
import { RootState } from "@/store/store";
import { Clock } from "lucide-react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { motion } from "motion/react"

const books = [
    {
        title: "The Power of Your Subconscious Mind",
        author: "Joseph Murphy",
        progress: 67,
        time: "15 mins",
        image: "/books/subconscious-mind.png",
    },
    {
        title: "The Power of Your Subconscious Mind",
        author: "Joseph Murphy",
        progress: 67,
        time: "15 mins",
        image: "/books/subconscious-mind.png",
    }
];

const ContinueReading = () => {
    const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
    if (!isLoggedIn) return
    return (
        <motion.section initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} className="h-full w-full">
            <h2 className="text-2xl font-bold mb-6">Continue Reading</h2>
            <motion.div initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }} className="flex gap-6 overflow-x-auto w-full scrollbar-none scroll-snap-x">
                {books.map((book, idx) => (
                    <motion.div whileHover={{ scale: 1.05 }}
                        key={idx}
                        className="flex-shrink-0 bg-white rounded-xl shadow-sm p-4 flex w-[90%] sm:w-[400px] items-start gap-4 scroll-snap-start"
                    >
                        <Image
                            src={book.image}
                            alt={book.title}
                            width={90}
                            height={120}
                            className="rounded-md object-cover  h-full"
                        />
                        <div className="flex justify-between h-full flex-col">
                            <div>
                                <h3 className="text-md font-semibold">{book.title}</h3>
                                <p className="text-sm text-gray-500">{book.author}</p>
                            </div>
                            <div>
                                <div className="mt-2 w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-teal-900"
                                        style={{ width: `${book.progress}%` }}
                                    />
                                </div>

                                <div className="flex items-center justify-between text-sm text-gray-500 mt-1">
                                    <span>{book.progress}% Complete</span>
                                    <span className="flex items-center gap-1">
                                        <Clock /> {book.time}
                                    </span>
                                </div>
                            </div>

                            <button className="mt-3 md:inline-flex w-[140px] hidden p-[10px] border border-teal-900 rounded-full text-sm font-medium text-teal-900 hover:bg-teal-50 transition">
                                Continue Reading
                            </button>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
};

export default ContinueReading;
