"use client";
import { Tooltip } from "antd";
import { Code, ColorSwatch, Mobile, Monitor } from "iconsax-react";
import React from "react";

type TagProp = {
  text: string;
  color: "gray" | "black" | "white";
  type?: "logo" | "web" | "mobile" | "code";
  size?: "short" | "long";
};

export default function Tag({ text, color, type, size="short" }: TagProp) {
  return (
    <Tooltip title={text}>
      <div className={`bg-${color} py-3 px-3 rounded-md flex items-center gap-2 `}>
        {type === "logo" ? (
          <ColorSwatch size={24} color="#1B1E31" variant="Bulk" />
        ) : type === "web" ? (
          <Monitor size={24} color="#1B1E31" variant="Bulk" />
        ) : type === "mobile" ? (
          <Mobile size={24} color="#1B1E31" variant="Bulk" />
        ) : (
          <Code size="24" color="#1B1E31" variant="Bulk" />
        )}
        {size === "long" && <div className="text-sm font-medium">{text}</div>}
      </div>
    </Tooltip>
  );
}
