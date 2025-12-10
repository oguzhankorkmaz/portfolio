import React from "react";

type LineListProp = {
  time?: string;
  title: string;
  info: string;
};

function LineList({ time, title, info }: LineListProp) {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center">
        {time && <p>{time}</p>}{" "}
        <div className="border-none border-l-2 border-black md:border-solid md:ml-6 md:pl-6">
          <p className="font-bold mb-3">{title}</p>
          <p className="text-sm">{info}</p>
        </div>
      </div>
    </div>
  );
}

export default LineList;
