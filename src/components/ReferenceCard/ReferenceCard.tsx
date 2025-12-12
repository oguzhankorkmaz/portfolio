import { Button, Tooltip } from "antd";
import { ArrowRight } from "iconsax-react";
import React from "react";
import ArrowButton from "../ArrowButton/ArrowButton";

type ReferenceCardProp = {
  data: {
    name: string;
    title: string;
    img: string;
    phone?: string;
    linkedin: string;
  };
};

function ReferenceCard({ data }: ReferenceCardProp) {
  return (
    <div className="bg-gray col-span-1 flex items-center justify-between p-3 rounded-[10px]">
      <div className="flex items-center gap-3 w-[calc(100%-50px)]">
        <img
          src={data.img}
          alt="user"
          width={60}
          height={60}
          className="rounded-[10px]"
        />
        <div className="">
          <p className="font-bold text-sm">{data.name}</p>
          <p className=" text-sm mt-1 text-wrap">{data.title}</p>
          <p className=" text-sm mt-1">{data.phone}</p>
        </div>
      </div>

      <Tooltip title="Linkedin">
        <ArrowButton href={data.linkedin} target="_blank" color="black" />
      </Tooltip>
    </div>
  );
}

export default ReferenceCard;
