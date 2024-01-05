"use client";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { motion } from "framer-motion";
import { MoviePropType } from "@/types";

const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
}

const MovieCard = ({
    poster_path,
    title,
    average_rating,
}: MoviePropType) => {
    return (
        <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{
                delay: 1,
                ease: 'easeInOut',
                duration: 0.5
            }}
            viewport={{ amount: 0 }}
            className="w-[150px]">
            <div className="h-[200px] w-[150px] rounded-md relative overflow-hidden">
                <Image
                    src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                    alt={title}
                    fill={true}
                    sizes="200px 150px"
                    className="object-cover"
                />
            </div>
            <div className=" my-2">
                <span className="text-sm font-thin line-clamp-1">{title}</span>
                <div className="flex items-center gap-1 text-sm">
                    <span>{average_rating?.toFixed(1)} </span>
                    <CiStar className="text-yellow-300" />
                </div>
            </div>
        </motion.div>
    );
};

export default MovieCard;
