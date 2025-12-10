import { BehanceSquareOutlined } from "@ant-design/icons";
import { Designtools, Dribbble, User } from "iconsax-react";
import Link from "next/link";
import React from "react";

export default function NavbarSocialMedia() {
  return (
    <div className="p-2 bg-white rounded-sm h-auto self-start">
      <div className="w-full flex items-center">
        <Link
          href={"/"}
          className="px-4 py-2 gap-2 flex items-center rounded-full"
        >
          <Dribbble color="#1B1E31" size={24} variant="Bulk" />
        </Link>
        <Link
          href={"/"}
          className="px-2 py-2 gap-2 flex items-center  rounded-full"
        >
          {" "}
          <BehanceSquareOutlined className="text-2xl"/>
        </Link>
      </div>
    </div>
  );
}
