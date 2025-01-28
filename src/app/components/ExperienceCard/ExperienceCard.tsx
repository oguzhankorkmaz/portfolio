import React from "react";

type ExperienceCardProp = {
  data: {
    time?: string;
    logo?: string;
    company_info?: string;
    company_name?: string;
    positions?: {
      title?: string;
      time?: string;
      description?: {
        title?: string;
        desc?: string;
      }[];
    }[];
  };
};
function ExperienceCard({ data }: ExperienceCardProp) {
  return (
    <div className="bg-gray p-6 rounded-[20px] mb-10">
      <div className="grid grid-cols-12 gap-6 w-full">
        <div className="col-span-4">
          <div className="flex flex-col justify-between h-full">
            <div className="py-3 px-6 bg-black rounded-[10px] text-white w-max">
              {data.time}
            </div>
            <div className="mt-6">
              <img className="mb-3" src={data.logo} alt={data.company_name} />
              <p className="text-sm">{data.company_info}</p>
            </div>
          </div>
        </div>
        <div className="col-span-8 flex flex-col gap-6">
          {data.positions?.map((item, index) => (
            <div className="bg-white p-6 rounded-[10px]" key={index}>
              <div className="flex items-center justify-between mb-6">
                <p className="font-bold">{item.title}</p>
                <p className="text-sm">{item.time}</p>
              </div>
              <div className="flex flex-col gap-6">
                {item.description?.map((desc, t) => (
                  <div key={t}>
                    <p>
                      {desc.title && (
                        <span className="font-semibold">{desc.title}: </span>
                      )}
                      {desc.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
