import { Progress } from "antd";
import { BrushBig, Code } from "iconsax-react";
import React from "react";

type SkillsProgressProp = {
  data: {
    name?: string;
    count?: number;
    img?: string;
  };
};

function SkillsProgress({ data }: SkillsProgressProp) {
  return (
    <>
      <div className="flex flex-col align-center w-[120px]">
        <div className="relative">
          <Progress
            type="circle"
            percent={data.count}
            showInfo={false}
            size={120}
            strokeColor={"black"}
            strokeWidth={3}
          />
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <img src={data.img} alt="img" />
          </div>
        </div>
        <p className="text-center mt-6 font-bold text-md">{data.count}%</p>
      </div>
    </>
  );
}

export default SkillsProgress;
