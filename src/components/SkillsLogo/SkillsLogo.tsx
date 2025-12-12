import { Progress } from "antd";

type SkillsLogoProp = {
  data: Item;
  type?: "light" | "dark";
};

type Item = {
  name?: string;
  count?: number;
  img?: string;
};

function SkillsLogo({ data, type }: SkillsLogoProp) {
  return (
    <>
      <div className="flex flex-col items-center">
        <img src={data.img} alt="img" width={50} height={50} />
        <p
          className={`text-center mt-4 font-bold text ${
            type === "light" ? "text-black" : "text-white"
          }`}
        >
          {data.name}
        </p>
      </div>
    </>
  );
}

export default SkillsLogo;
