import React from "react";
import { motion } from "framer-motion";

type EntryIconCardProp = {
  rotateDeg?: number;
  icon: React.ReactNode;
  styles: string;
  topStart?: number;
  topEnd?: number;
};

function EntryIconCard({ icon, styles, topStart, topEnd }: EntryIconCardProp) {
  return (
    <motion.div
    initial={{y: topStart}}
      animate={{ y: topEnd }}
      transition={{ duration: 1, delay: 2 }}
    >
      <div
        className={`absolute bg-white w-18 h-18 rounded flex items-center justify-center shadow-[0_35px_40px_-10px_rgba(0,0,0,0.3)] ${styles}`}
      >
        {icon}
      </div>
    </motion.div>
  );
}

export default EntryIconCard;
