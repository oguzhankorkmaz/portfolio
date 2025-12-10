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
import { motion } from "framer-motion";
import SidebarButton from "../Sidebar/SidebarButton";
import { LinkedinOutlined } from "@ant-design/icons";

const LINKS = [
  {
    icon: <Home2 color="#1B1E31" />,
    route: "#",
  },
  {
    icon: <Briefcase color="#1B1E31" />,
    route: "#experience",
  },
  {
    icon: <Teacher color="#1B1E31" />,
    route: "#education",
  },
  {
    icon: <TickCircle color="#1B1E31" />,
    route: "#skills",
  },
  {
    icon: <PenTool color="#1B1E31" />,
    route: "#portfolio",
  },
  {
    icon: <UserTick color="#1B1E31" />,
    route: "#references",
  },
];
export default function SocialMedias() {
  return (
    <motion.div
      animate={{ x: ["calc(100% + 104px)", 0] }}
      transition={{ duration: 1, delay: 2 }}
      className="fixed right-0  w-[104px] h-[100vh] z-10"
    >
      <div className="h-[264px] flex items-center justify-center p-6  bg-social-media-bg bg-center relative top-[50%] translate-y-[-50%]">
        {/* {LINKS.map((item, index) => (
          <SidebarButton icon={item.icon} route={item.route} key={index} />
        ))} */}
        <div className="flex flex-col items-center gap-6">
            <Dribbble color="#1B1E31" size={24} />
            <Be color="#1B1E31" size={24} />
            <LinkedinOutlined style={{fontSize: 24}} />
          </div>
      </div>
    </motion.div>
  );
}
