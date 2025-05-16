"use client"
import { RootState } from "@/store/store";
import { Book, BookOpen, Clock, FireExtinguisher, Lightbulb } from "lucide-react";
import {  motion } from "motion/react"
import { useSelector } from "react-redux";

const stats = [
    {
        icon: '📚',
        title: "Weekly Reading Goal",
        value: "5 Books",
        subtitle: "+2 from last week",
    },
    {
        icon: <Clock className="text-2xl text-gray-700" />,
        title: "Time Saved",
        value: "3.5 hours",
        subtitle: "This week",
    },
    {
        icon: '💡',
        title: "Knowledge Gained",
        value: "15 Key Insights",
        subtitle: "From recent reads",
    },
    {
        icon: '🔥',
        title: "Reading Streak",
        value: "7 Days",
        subtitle: "Keep it up!",
    },
];

const ReadingJourney = () => {
    const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
    if(!isLoggedIn) return
    return (
        <motion.section initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} className="">
            <h2 className="text-2xl font-bold mb-6">Your Reading Journey</h2>

            <div className="grid  grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((item, idx) => (
                    <motion.div whileHover={{ scale: 1.05 }} 
                        key={idx}
                        className="bg-white rounded-xl shadow-sm p-4 flex flex-col gap-1"
                    >
                        {item.icon}
                        <p className="text-sm text-gray-500">{item.title}</p>
                        <p className="text-lg font-semibold">{item.value}</p>
                        <p className="text-xs text-gray-500">{item.subtitle}</p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default ReadingJourney;
