import { Button, Tooltip } from "antd";
import { ArrowRight } from "iconsax-react";
import React from "react";
import ArrowButton from "../ArrowButton/ArrowButton";

type ReferenceCardProp = {
  data: {
    name: string;
    title: string;
    img: string;
    phone: string;
    linkedin: string;
  };
};

function ReferenceCard({ data }: ReferenceCardProp) {
  return (
    <div className="bg-gray col-span-1 flex items-center justify-between p-3 rounded-[10px]">
      <div className="flex items-center">
        <img
          src={data.img}
          alt="user"
          width={60}
          height={60}
          className="rounded-[10px]"
        />
        <div className="ml-3">
          <p className="font-bold text-sm">{data.name}</p>
          <p className=" text-sm mt-2">
            {data.title} {data.phone}
          </p>
        </div>
      </div>

      <Tooltip title="Linkedin">
        <ArrowButton href={data.linkedin} target="_blank" color="black" />
      </Tooltip>
    </div>
  );
}

export default ReferenceCard;
