"use client";
import React from "react";
import ArrowButton from "../ArrowButton/ArrowButton";
import { motion } from "framer-motion";
import Tag from "../Tag/Tag";
import Link from "next/link";
import Image from "next/image";

type PortfolioCardProp = {
  type: "home" | "portfolio";
  data: {
    name: string;
    name_t: string;
    logo: string;
    view_img: string;
    color_primary: string;
    color_secondary: string;
    color_three: string;
    url?: string | any;
    logo_design: boolean;
    web_design: boolean;
    mobile_design: boolean;
    coding: boolean;
    ai: boolean;
    figma: boolean;
    react: boolean;
    next: boolean;
  };
};

function PortfolioCard({ type, data }: PortfolioCardProp) {
  return type === "home" ? (
    <div className={`relative rounded-[20px] overflow-hidden`}>
      <img src={data.view_img} className="w-full h-auto " />
      <motion.div
        initial={{ top: 0, bottom: "auto" }}
        whileHover={{ top: "auto", bottom: 0 }}
        className="absolute p-6 top-0 w-full flex items-end justify-between h-[120%] bg-gradient-to-t from-black70 from-2% to-black0 to-20%"
      >
        <p className="text-xl font-semibold text-white">{data.name}</p>
        <ArrowButton href="#" target="none" color="white" />
      </motion.div>
    </div>
  ) : (
    <Link
      href={`/portfolio/detail/${data.name_t}`}
      className="rounded-[20px] gap-6  cursor-pointer"
    >
      <img src={data.view_img} alt="portfolio" className="w-full rounded-sm" />
      <div className="mt-3 flex items-center justify-between">
        <div className="text font-bold">{data.name}</div>
        <div className="flex gap-2">
          {data.logo_design && (
            <Tag color="gray" text="Logo Design" type="logo" />
          )}
          {data.mobile_design && (
            <Tag color="gray" text="Mobile Design" type="mobile" />
          )}
          {data.web_design && <Tag color="gray" text="Web Design" type="web" />}
          {data.coding && <Tag color="gray" text="Coding" type="code" />}
        </div>
      </div>
    </Link>
  );
}

export default PortfolioCard;
