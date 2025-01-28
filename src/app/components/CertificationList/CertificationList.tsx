import { Award } from "iconsax-react";
import React from "react";

type CertificationListProp = {
  name: string;
  info: string;
};

function CertificationList({ name, info }: CertificationListProp) {
  return (
    <div>
      <div className="flex items-center">
        <div className="flex items-center justify-center w-[72px] h-[72px] bg-black rounded-[72px]">
            <Award color="#fff" size={24}/>
        </div>
        <div className="ml-6">
            <p className="font-semibold mb-3">{name}</p>
            <p className="">{info}</p>
        </div>
      </div>
    </div>
  );
}

export default CertificationList;
