import { Designtools, User } from "iconsax-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Tooltip } from "antd";
import { motion } from "framer-motion";

export default function NavbarButton() {
  return (
    <motion.div
      initial={{ width: 80 }}
      animate={{ width: 228 }}
      transition={{ duration: 1, delay: 3 }}
    >
      <div className="relative p-2 bg-gray rounded-full h-auto self-start border-[2px] border-white">
        <div className="absolute -top-1 left-0 w-20 h-20 bg-white rounded-full  border-[2px] border-black  overflow-hidden z-[100]">
          <Image
            src="/images/pf.png"
            alt="Profile"
            width={80}
            height={80}
            className="object-cover"
          />
        </div>

        <motion.div
          initial={{ marginLeft: 0, opacity: 0 }}
          animate={{ marginLeft: "96px", opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          className="w-full flex items-center"
        >
          <Tooltip title="CV">
            <Link
              href={"/"}
              className="px-4 py-4 gap-2 flex items-center bg-black rounded-full"
            >
              {" "}
              <User color="#fff" size={24} variant="Bulk" />
              {/* <div className="text-white">About</div> */}
            </Link>
          </Tooltip>
          <Tooltip title="Portfolio">
            <Link
              href={"/portfolio"}
              className="px-4 py-4 gap-2 flex items-center rounded-full"
            >
              {" "}
              <Designtools color="#000" size={24} variant="Bulk" />
              {/* Portfolio */}
            </Link>
          </Tooltip>
        </motion.div>
      </div>
    </motion.div>
  );
}
