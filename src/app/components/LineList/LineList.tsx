import React from "react";

type LineListProp = {
  time?: string;
  title: string;
  info: string;
};

function LineList({ time, title, info }: LineListProp) {
  return (
    <div>
      <div className="flex items-center">
        {time && <p>{time}</p>}{" "}
        <div className="border-l-2 border-black border-solid ml-6 pl-6">
          <p className="font-bold mb-3">{title}</p>
          <p className="text-sm">{info}</p>
        </div>
      </div>
    </div>
  );
}

export default LineList;
