"use client";
import { PORTFOLIOS } from "@/app/common/portfolios";
import Tag from "@/components/Tag/Tag";
import { ArrowLeft } from "iconsax-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function PortfolioDetail() {
  const { name } = useParams();
  const item = PORTFOLIOS.find((item) => item.name_t === name);
  return (
    <div className="relative bg-white  rounded-md py-6 mt-6">
      <div className="container mx-auto">
        <Link href="/portfolio" className="inline-flex items-center gap-4 mt-20">
          <div className="flex items-center justify-center rounded-full border bg-gray w-15 h-15">
            <ArrowLeft size={24} variant="TwoTone" color="#1B1E31"/>
          </div>
          Back
        </Link>
        <div className="flex items-center justify-between mt-10">
          <div className="text-xl font-black">{item?.name}</div>
          {item?.url && <Link href={item?.url} target="_blank" className="bg-black text-white rounded-full py-3 px-6 flex items-center gap-10">Go to Website</Link>}
        </div>
        <div className="flex gap-6 mt-10">
          {item?.logo_design && (
            <Tag color="gray" text="Logo Design" type="logo" size="long" />
          )}
          {item?.mobile_design && (
            <Tag color="gray" text="Mobile Design" type="mobile" size="long" />
          )}
          {item?.web_design && (
            <Tag color="gray" text="Web Design" type="web" size="long" />
          )}
          {item?.coding && (
            <Tag color="gray" text="Coding" type="code" size="long" />
          )}
        </div>
        <div className="mt-10">
            <img src={item?.view_img} className="rounded-md"/>
        </div>
      </div>
    </div>
  );
}
