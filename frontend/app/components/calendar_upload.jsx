"use client";

import { motion } from "motion/react";
import { useRouter } from "next/navigation";

export default function CalendarUpload({
  Id,
  Title,
  Description,
  Image,
  Function,
  whenID
}) {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 0.3 + 0.1 * Id,
        duration: 1,
      }}
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full md:max-w-[55%]"
      >
        <button
          className="border-2 p-5 flex items-center space-x-5 rounded-3xl w-full hover:cursor-pointer shadow-md"
          onClick={() => Function(whenID, router)} // ✅ pass router here
        >
          <img
            src={Image}
            alt={`${Title} icon`}
            className="w-12 h-12 flex-shrink-0"
            style={{ width: "3rem", height: "3rem" }}
          />
          <div className="text-left">
            <h1 className="font-medium text-lg">{Title}</h1>
            <p className="font-light">{Description}</p>
          </div>
        </button>
      </motion.div>
    </motion.div>
  );
}
