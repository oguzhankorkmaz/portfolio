import React from "react";

type TagProp = {
  text: string;
  color: "gray" | "black" | "white";
};

export default function Tag({ text, color }: TagProp) {
  return <div className={`bg-${color} py-3 px-6 rounded-md`}>{text}</div>;
}
