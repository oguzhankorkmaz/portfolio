import React from "react";

type EntryIconCardProp = {
  rotateDeg?: number;
  icon: React.ReactNode;
  styles: string;
};

function EntryIconCard({ icon, styles }: EntryIconCardProp) {
  return (
    <div
      className={`absolute bg-white w-18 h-18 rounded flex items-center justify-center shadow-[0_35px_40px_-10px_rgba(0,0,0,0.3)] ${styles} `}
    >
      {icon}
    </div>
  );
}

export default EntryIconCard;
