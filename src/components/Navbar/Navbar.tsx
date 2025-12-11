"use client";
import React from "react";
import { motion } from "framer-motion";
import NavbarButton from "./NavbarButton";
import NavbarSocialMedia from "./NavbarSocialMedia";
import Image from "next/image";
import { Tooltip } from "antd";
import Link from "next/link";
import { Designtools, User } from "iconsax-react";
import { useParams, usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const firstPath = pathname.split("/")[1];
  return (
    <motion.div
      animate={{ y: [-120, 0] }}
      transition={{ duration: 1, delay: 2 }}
      className="fixed z-10  w-full flex justify-center"
    >
      <div className=" relative z-[1] mt-8 p-1 flex items-center justify-between gap-4 rounded-full bg-black h-16 outline outline-2 outline-gray25">
        <div
          className={`absolute w-14 h-14 bg-white z-[2] rounded-full transition-all ease-in-out delay-150 ${
            firstPath === "portfolio" ? "left-[172px]" : "left-1"
          }`}
        ></div>
        {/* <NavbarButton /> */}
        <Tooltip title="CV">
          <Link
            href={"/"}
            className="px-4 py-4 gap-2 flex items-center relative z-[4]"
          >
            {" "}
            <User
              color={`${firstPath === "portfolio" ? "#fff" : "#000"}`}
              size={24}
              variant="Bulk"
            />
            {/* <div className="text-white">About</div> */}
          </Link>
        </Tooltip>
        <div className="">
          <Image
            src="/images/pf.png"
            alt="Profile"
            width={80}
            height={80}
            className="object-cover rounded-full border-2 border-black relative z-[100]"
          />
        </div>
        <Tooltip title="Portfolio">
          <Link
            href={"/portfolio"}
            className="px-4 py-4 gap-2 flex items-center rounded-full  relative z-[4]"
          >
            {" "}
            <Designtools
              color={`${firstPath === "portfolio" ? "#000" : "#fff"}`}
              size={24}
              variant="Bulk"
            />
            {/* Portfolio */}
          </Link>
        </Tooltip>
      </div>
    </motion.div>
  );
}
