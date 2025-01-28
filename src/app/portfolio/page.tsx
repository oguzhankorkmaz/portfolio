"use client";
import { ArrowLeft } from "iconsax-react";
import Link from "next/link";
import { useEffect } from "react";
import { PORTFOLIOS } from "../common/portfolios";
import PortfolioCard from "../components/PortfolioCard/PortfolioCard";

function Portfolio() {
  return (
    <div className="relative bg-white  rounded-md py-6 mt-6">
      <div className="container mx-auto">
        <section className="bg-black rounded-md p-6">
          <div className="flex items-center justify-between h-full">
            <Link className="flex items-center color" href={"/"}>
              <ArrowLeft size={24} color="#fff" />{" "}
              <p className="text-white ml-4">Back</p>
            </Link>
            <p className="text-white text-4xl font-black">Portfolio</p>
            <div className="flex gap-6 items-center">
              <div className="text-white font-bold">All</div>
              <div className="text-gray">Web</div>
              <div className="text-gray">Mobile</div>
            </div>
          </div>
        </section>
        <section>
          <div className="flex flex-col gap-10 mt-10">
            {PORTFOLIOS.map((item, index) => (
              <PortfolioCard data={item} key={index} type="portfolio" />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Portfolio;
