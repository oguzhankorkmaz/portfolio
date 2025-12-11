"use client";
import { ArrowLeft } from "iconsax-react";
import Link from "next/link";
import { useEffect } from "react";
import { PORTFOLIOS } from "../common/portfolios";
import PortfolioCard from "../../components/PortfolioCard/PortfolioCard";
import Footer from "@/components/Footer/Footer";

function Portfolio() {
  return (
    <div className="relative bg-white  rounded-md p-4 py-6 mt-6 ">
      <div className="container mx-auto">
        <p className="text-4xl font-black  mt-20">Portfolio</p>
        <section>
          <div className="grid  md:grid-cols-2 grid-cols-1 gap-10 mt-10">
            {PORTFOLIOS.map((item, index) => (
              <PortfolioCard data={item} key={index} type="portfolio" />
            ))}
          </div>
        </section>
        <Footer/>
      </div>
    </div>
  );
}

export default Portfolio;
