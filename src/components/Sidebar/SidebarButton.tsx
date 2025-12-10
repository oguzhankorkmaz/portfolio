import Link from "next/link";
import React from "react";

type SidebarButtonProp = {
  icon: React.ReactNode;
  route: string;
};
export default function SidebarButton({ icon, route }: SidebarButtonProp) {
  return (
    <Link className="rounded-[40px] w-[56px] h-[56px] bg-white flex items-center justify-center my-2" href={route}>
      <div className="w-[24px] h-[24px]">{icon}</div>
    </Link>
  );
}
