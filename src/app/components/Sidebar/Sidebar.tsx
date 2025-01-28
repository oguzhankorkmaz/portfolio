import {
  Be,
  Briefcase,
  Dribbble,
  Home2,
  PenTool,
  Teacher,
  TickCircle,
  UserTick,
} from "iconsax-react";
import React from "react";
import SidebarButton from "./SidebarButton";
import { motion } from "framer-motion";

const LINKS = [
  {
    icon: <Home2 color="#000" />,
    route: "#",
  },
  {
    icon: <Briefcase color="#000" />,
    route: "#experience",
  },
  {
    icon: <Teacher color="#000" />,
    route: "#education",
  },
  {
    icon: <TickCircle color="#000" />,
    route: "#skills",
  },
  {
    icon: <PenTool color="#000" />,
    route: "#portfolio",
  },
  {
    icon: <UserTick color="#000" />,
    route: "#references",
  },
];
export default function Sidebar() {
  return (
    <motion.div
      animate={{ x: [-104, 0] }}
      transition={{ duration: 1, delay: 2 }}
      className="fixed  w-[104px] h-[100vh] z-10"
    >
      <div className="h-[536px] flex flex-col justify-center p-6  bg-menu-bg bg-center relative top-[50%] translate-y-[-50%] ">
        {LINKS.map((item, index) => (
          <SidebarButton icon={item.icon} route={item.route} key={index} />
        ))}
        {/* <div className="flex flex-col items-center gap-4">
            <Dribbble color="#000" size={24} />
            <Be color="#000" size={24} />
            <Be color="#000" size={24} />
          </div> */}
      </div>
    </motion.div>
  );
}
