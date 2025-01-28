"use client";
import { PORTFOLIOS } from "@/app/common/portfolios";
import Tag from "@/app/components/Tag/Tag";
import { Button } from "antd";
import { ArrowLeft } from "iconsax-react";
import React, { useState } from "react";

export default function CasaAlegreAlacati() {
  const [data, setdata] = useState(PORTFOLIOS);
  console.log(data);
  return (
    <div>
      <div className="w-full px-10">
        <div className="grid grid-cols-5 min-h-[100vh]">
          <div className="col-span-4 bg-black  p-10 h-full">
            <img src={data[0].logo} alt="logo" className="h-[60px]" />
          </div>
          <div className="col-span-1  py-10 ">
            <div className="bg-white w-full h-full rounded-[20px] p-5 flex flex-col justify-between items-start gap-10">
              <Button type="text" icon={<ArrowLeft color="#000" size={24} />} iconPosition={"start"} size="large">
                Back
              </Button>
              <img src={data[0].logo} alt="logo" className="h-[60px]" />
              <div className="flex gap-6">
                <div
                  className={`w-[90px] h-[90px] rounded-[10px] bg-[${data[0].color_primary}]`}
                  style={{ backgroundColor: data[0].color_primary }}
                ></div>
                <div
                  className={`w-[90px] h-[90px] rounded-[10px] bg-[${data[0].color_secondary}]`}
                  style={{ backgroundColor: data[0].color_secondary }}
                ></div>
              </div>
              <div className="flex gap-6">
                {data[0].logo_design && <Tag color="gray" text="Logo Design" />}
                {data[0].mobile_design && (
                  <Tag color="gray" text="Mobile Design" />
                )}
                {data[0].web_design && <Tag color="gray" text="Web Design" />}
                {data[0].coding && <Tag color="gray" text="Coding" />}
              </div>
              <div className="flex gap-6">
                {data[0].ai && (
                  <img
                    src="/images/skills/ai.svg"
                    alt="portfolio-skills"
                    width={30}
                    height={30}
                  />
                )}
                {data[0].figma && (
                  <img
                    src="/images/skills/figma.svg"
                    alt="portfolio-skills"
                    width={30}
                    height={30}
                  />
                )}
                {data[0].react && (
                  <img
                    src="/images/skills/react.svg"
                    alt="portfolio-skills"
                    width={30}
                    height={30}
                  />
                )}
                {data[0].next && (
                  <img
                    src="/images/skills/nextJs.svg"
                    alt="portfolio-skills"
                    width={30}
                    height={30}
                  />
                )}
              </div>
              <div className="">
                <Button>Go to website</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
