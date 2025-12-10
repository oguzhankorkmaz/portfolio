import { BucketSquare, Colorfilter, Data, Diamonds, Element4, Eye, LikeDislike, Maximize, Mobile, MonitorMobbile, Notepad, PenTool2, Refresh, Refresh2, Ruler, Shapes, UserOctagon } from "iconsax-react";
import React from "react";

type SkillsData = {
  item: Item[];
};

type Item = {
  name: string;
  type: string;
  count?: number
};

export default function SkillsTag({ item }: SkillsData) {
  return item.map((i) => (
    <div className={`bg-gray py-3 px-3 rounded-md flex items-center gap-2 relative`} key={i.name}>
      {i.type === "usercentered" ? (
        <UserOctagon size={24} color="#1B1E31" variant="Bulk" />
      ) : i.type === "designthink" ? (
        <Colorfilter size={24} color="#1B1E31" variant="Bulk" />
      ) : i.type === "meth" ? (
        <Ruler size={24} color="#1B1E31" variant="Bulk" />
      ) : i.type === "iterative" ? (
        <Refresh2 size={24} color="#1B1E31" variant="Bulk" />
      ) : i.type === "visual" ? (
        <Eye size={24} color="#1B1E31" variant="Bulk" />
      ) : i.type === "desginsys" ? (
        <PenTool2 size={24} color="#1B1E31" variant="Bulk" />
      ) : i.type === "component" ? (
        <Shapes size={24} color="#1B1E31" variant="Bulk" />
      ) : i.type === "responsive" ? (
        <Maximize size={24} color="#1B1E31" variant="Bulk" />
      ) : i.type === "crossplatform" ? (
        <MonitorMobbile size={24} color="#1B1E31" variant="Bulk" />
      ) : i.type === "mobile" ? (
        <Mobile size={24} color="#1B1E31" variant="Bulk" />
      ) : i.type === "wireframe" ? (
        <Element4 size={24} color="#1B1E31" variant="Bulk" />
      ) : i.type === "prototype" ? (
        <Diamonds size={24} color="#1B1E31" variant="Bulk" />
      ) : i.type === "mockup" ? (
        <BucketSquare size={24} color="#1B1E31" variant="Bulk" />
      ) : i.type === "userflow" ? (
        <Data size={24} color="#1B1E31" variant="Bulk" />
      ) : i.type === "ab" ? (
        <Notepad size={24} color="#1B1E31" variant="Bulk" />
      ) : i.type === "usability" ? (
        <LikeDislike size={24} color="#1B1E31" variant="Bulk" />
      ) : (
        <></>
      )}
       <div className="text-sm font-medium">{i.name}</div>
    </div>
  ));
}
