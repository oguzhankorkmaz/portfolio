import { Arrow, ArrowRight, ArrowUp } from "iconsax-react";
import Link from "next/link";
import React from "react";

type ArrowButtonProp = {
  href: string;
  target: "_blank" | "none";
  color: "black" | "white"
};

function ArrowButton({ href, target = "none", color }: ArrowButtonProp) {
  return (
    <Link
      href={href}
      className={`flex items-center justify-center w-[50px] h-[50px] bg-${color} rounded-[60px]`}
      target={target}
    >
      <ArrowUp color={`${color === "black" ? "#fff" : "#000"}`} size={24} className="rotate-45" />
    </Link>
  );
}

export default ArrowButton;