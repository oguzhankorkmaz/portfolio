"use client";
import React from "react";
import ArrowButton from "../ArrowButton/ArrowButton";
import { motion } from "framer-motion";
import Tag from "../Tag/Tag";
import Link from "next/link";

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
    url: string;
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
    <div
      className={`bg-[${data.color_primary}] h-[570px] p-6 rounded-[20px] overflow-hidden relative`}
      style={{ backgroundColor: data.color_primary }}
    >
      <div className="flex items-center justify-between">
        <p className="text-xl font-semibold text-white">{data.name}</p>
        <ArrowButton href="#" target="none" color="white" />
      </div>
      <img
        src={data.view_img}
        alt="portfolio"
        className="absolute top-[180px]"
      />
    </div>
  ) : (
    <Link href={`/portfolio/detail/${data.name_t}`} className="h-[570px] p-6 rounded-[20px] bg-gray grid grid-cols-2 gap-6 hover:shadow-sm cursor-pointer">
      <div className="col-span-1 h-full flex flex-col justify-center items-start gap-10">
        <img src={data.logo} alt="logo" className="h-[60px]" />
        <div className="flex gap-6">
          <div
            className={`w-[60px] h-[60px] rounded-[60px] bg-[${data.color_primary}]`}
            style={{ backgroundColor: data.color_primary }}
          ></div>
          <div
            className={`w-[60px] h-[60px] rounded-[60px] bg-[${data.color_secondary}]`}
            style={{ backgroundColor: data.color_secondary }}
          ></div>
        </div>
        <div className="flex gap-6">
          {data.logo_design && <Tag color="white" text="Logo Design" />}
          {data.mobile_design && <Tag color="white" text="Mobile Design" />}
          {data.web_design && <Tag color="white" text="Web Design" />}
          {data.coding && <Tag color="white" text="Coding" />}
        </div>
        <div className="flex gap-6">
          {data.ai && (
            <img src="/images/skills/ai.svg" alt="portfolio-skills" width={30} height={30} />
          )}
          {data.figma && (
            <img src="/images/skills/figma.svg" alt="portfolio-skills" width={30} height={30} />
          )}
          {data.react && (
            <img src="/images/skills/react.svg" alt="portfolio-skills" width={30} height={30} />
          )}
          {data.next && (
            <img src="/images/skills/nextJs.svg" alt="portfolio-skills" width={30} height={30} />
          )}
        </div>
      </div>
      <div className="col-span-1 h-full flex flex-col justify-center items-start gap-6">
        <div
          className={`bg-[${data.color_primary}] p-6 rounded-[20px] w-full h-full overflow-hidden relative`}
          style={{ backgroundColor: data.color_primary }}
        >
          <img
            src={data.view_img}
            alt="portfolio"
            className="absolute top-[100px]"
          />
        </div>
      </div>
    </Link>
  );
}

export default PortfolioCard;
