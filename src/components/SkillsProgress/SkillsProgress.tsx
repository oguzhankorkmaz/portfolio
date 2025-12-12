import { Progress } from "antd";

type SkillsProgressProp = {
  data: Item;
  type?: "light" | "dark";
};

type Item = {
  name?: string;
  count?: number;
  img?: string;
};

function SkillsProgress({ data, type }: SkillsProgressProp) {
  return (
    <>
      <div className="flex flex-col align-center">
        <div className="relative">
          <Progress
            type="circle"
            percent={data.count}
            showInfo={false}
            size={120}
            strokeColor={type === "light" ? "black" : "white"}
            strokeWidth={3}
          />
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <img src={data.img} alt="img" width={40} height={40} />
          </div>
        </div>
        <p className={`text-center mt-4 font-bold text-md ${type === "light" ? "text-black" : "text-white"}`}>{data.count}%</p>
      </div>
    </>
  );
}

export default SkillsProgress;
