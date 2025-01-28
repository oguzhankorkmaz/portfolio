"use client";
import { motion } from "framer-motion";
import { BrushBig, Code } from "iconsax-react";
import EXPERIENCE from "./common";
import { CERTIFICATIONS } from "./common/certifications";
import { PORTFOLIOS } from "./common/portfolios";
import { REFERENCES } from "./common/references";
import { CODE, DESIGN } from "./common/skills";
import ArrowButton from "./components/ArrowButton/ArrowButton";
import CertificationList from "./components/CertificationList/CertificationList";
import ExperienceCard from "./components/ExperienceCard/ExperienceCard";
import LineList from "./components/LineList/LineList";
import PortfolioCard from "./components/PortfolioCard/PortfolioCard";
import ReferenceCard from "./components/ReferenceCard/ReferenceCard";
import SkillsProgress from "./components/SkillsProgress/SkillsProgress";
import {
  Bezier,
  Brush,
  Brush2,
  Gallery,
  Layer,
  Play,
  Text,
} from "iconsax-react";
import EntryIconCard from "./components/EntryIconCard/EntryIconCard";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <motion.div
        animate={{ y: 0, height: 400 }}
        transition={{ duration: 1, delay: 2 }}
        id="entry"
        className="absolute  flex items-center justify-center w-[100%] h-[100vh]  mr-6"
      >
        <div className="relative container flex items-center justify-center h-[400px] m-auto">
          {/* <div className="bg-white w-18 h-18 rounded flex items-center justify-center">
            <Brush color="#000" size={24}/>
          </div> */}
          <EntryIconCard
            styles="left-[0px] top-[200px] rotate-[20deg]"
            icon={<Brush color="#000" size={24} />}
          />
          <EntryIconCard
            styles="left-[330px] top-[30px]"
            icon={<Bezier color="#000" size={24} />}
          />
          <EntryIconCard
            styles="left-[400px] bottom-[20px] rotate-[7deg]"
            icon={<Text color="#000" size={24} />}
          />
          <EntryIconCard
            styles="left-[750px] top-[140px] rotate-[-16deg]"
            icon={<Brush2 color="#000" size={24} />}
          />
          <EntryIconCard
            styles="left-[70%] bottom-[-10px] rotate-[-12deg]"
            icon={<Gallery color="#000" size={24} />}
          />
          <EntryIconCard
            styles="right-[200px] top-[60px] rotate-[15deg]"
            icon={<Play color="#000" size={24} />}
          />
          <EntryIconCard
            styles="right-[0px] top-[200px] rotate-[-13deg]"
            icon={<Layer color="#000" size={24} />}
          />
          <div className="relative flex-col items-center">
            <p className="text-2xl text-center">Are you looking for an</p>
            <div className="flex justify-center">
              <p className="text-5xl font-bold">UI / UX Designer</p>
              <p className="text-5xl font-bold rotate-45">?</p>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        animate={{ marginTop: ["100vh", "36vh"] }}
        transition={{ duration: 1, delay: 2 }}
        className="relative bg-white  rounded-md py-18"
      >
        <div className="container mx-auto">
          <section id="about">
            <div className="grid grid-cols-3 gap-6 bg-black p-6  w-[960px] mx-auto rounded-[36px]">
              <div className="">
                <img src="/images/about.png" />
              </div>
              <div className="col-span-2 text-white">
                <p className="text-3xl font-black mb-4 ">Oğuzhan Korkmaz</p>
                <p className="leading-9">
                  For 5 years, I have been continuing to improve myself in both
                  frontend and UI design. By following design trends and
                  understanding the needs of the user, I try to create the most
                  suitable designs for them. On the coding side, I code the
                  designs I make using the latest technologies such as ReactJs,
                  NextJs. Since I have mastered the frontend side, I make
                  designs that understand the software team and do not carry
                  heavy code load. I work to make designs that companies can
                  present their products or platforms to their users in the best
                  way.
                </p>
              </div>
            </div>
          </section>
          <section id="experience" className="mt-[200px]">
            <p className="text-4xl font-black">Experience</p>
            <div className="mt-10">
              {EXPERIENCE.map((item, index) => (
                <ExperienceCard data={item} key={index} />
              ))}
            </div>
          </section>
          <section id="education" className="mt-[200px]">
            <div className="bg-gray rounded-[36px] p-6 grid grid-cols-12 gap-10">
              <div className="col-span-6 bg-white p-6 rounded-[20px]">
                <p className="text-4xl font-black mb-6">Education</p>
                <LineList
                  time="2019-2022"
                  title="Eskişehir Osmangazi University"
                  info="Mathematics-Computer Science - 2.97"
                />
              </div>
              <div className="col-span-6 bg-white p-6 rounded-[20px]">
                <p className="text-4xl font-black mb-6">Courses</p>
                <LineList
                  title=".NET"
                  info="Bilge Adam received .NET courses in educational institutions"
                />
              </div>
              <div className="col-span-6 bg-white p-6 rounded-[20px]">
                <p className="text-4xl font-black mb-6">Certifications</p>
                <div className="flex flex-col gap-10">
                  {CERTIFICATIONS.map((item, index) => (
                    <CertificationList
                      key={index}
                      name={item.name}
                      info={item.info}
                    />
                  ))}
                </div>
              </div>
              <div className="col-span-6 bg-black p-10 rounded-[20px] text-white">
                <p className="text-lg">
                  “Education, culture and knowledge are the widest windows to
                  enlightenment.”
                  <br />
                  <br />
                  “Eğitim, kültür ve bilgi aydınlığa açılan en geniş
                  penceredir.”
                </p>
                <img
                  src="/images/ataturk.png"
                  alt="Atatürk"
                  className="mt-[60px]"
                />
                <p></p>
              </div>
            </div>
          </section>
          <section id="skills" className="mt-[200px]">
            <p className="text-4xl font-black">Skills</p>
            <div className="flex items-center justify-between flex-wrap mt-10">
              <div className="flex flex-col align-center w-[120px]">
                <div className="w-[120px] h-[120px] flex items-center justify-center bg-black rounded-[120px]">
                  <BrushBig color="#fff" size={40} />
                </div>
                <p className="text-center mt-6 font-bold text-md">Design</p>
              </div>
              {DESIGN.map((item, index) => (
                <SkillsProgress data={item} key={index} />
              ))}
            </div>
            <div className="flex items-center justify-between flex-wrap mt-[100px]">
              <div className="flex flex-col align-center w-[120px]">
                <div className="w-[120px] h-[120px] flex items-center justify-center bg-black rounded-[120px]">
                  <Code color="#fff" size={40} />
                </div>
                <p className="text-center mt-6 font-bold text-md">Coding</p>
              </div>
              {CODE.map((item, index) => (
                <SkillsProgress data={item} key={index} />
              ))}
            </div>
          </section>
          <section id="portfoilo" className="mt-[200px]">
            <p className="text-4xl font-black">Portfolio</p>
            <div className="mt-10 grid grid-cols-2 gap-6">
              {PORTFOLIOS.slice(0, 3).map((item, index) => (
                <PortfolioCard data={item} type="home" key={index} />
              ))}
              <Link
                href="/portfolio"
                className="bg-gray h-[570px] p-6 rounded-[20px] overflow-hidden relative"
              >
                <div className="flex flex-col justify-between h-full">
                  <div className="flex justify-end">
                    <ArrowButton href="#" target="none" color="black" />
                  </div>
                  <p className="text-[64px] font-semibold w-[300px]">
                    See All Projects
                  </p>
                </div>
              </Link>
            </div>
          </section>
          <section id="references" className="mt-[200px]">
            <p className="text-4xl font-black">References</p>
            <div className="mt-10 grid grid-cols-2 gap-6">
              {REFERENCES.map((item, index) => (
                <ReferenceCard data={item} key={index} />
              ))}
            </div>
          </section>
        </div>
      </motion.div>
    </>
  );
}
