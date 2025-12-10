import { Award } from "iconsax-react";
import React from "react";

type CertificationListProp = {
  name: string;
  info: string;
};

function CertificationList({ name, info }: CertificationListProp) {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="flex items-center justify-center w-[60px] h-[60px] md:w-[72px] md:h-[72px] bg-black rounded-[72px]">
            <Award color="#fff" size={24}/>
        </div>
        <div className="md:ml-6 w-[calc(100%-72px)] md:w-[calc(100%-84px)] mt-2 md:mt-0">
            <p className="font-semibold mb-3">{name}</p>
            <p className="mt-2">{info}</p>
        </div>
      </div>
    </div>
  );
}

export default CertificationList;
