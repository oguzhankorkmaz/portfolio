"use client";
import { motion } from "framer-motion";
import {
  Be,
  BrushBig,
  CallCalling,
  Code1,
  ColorSwatch,
  Dribbble,
  Messages1,
  Sms,
  Whatsapp,
} from "iconsax-react";
import EXPERIENCE from "./common";
import { CERTIFICATIONS } from "./common/certifications";
import { PORTFOLIOS } from "./common/portfolios";
import { REFERENCES } from "./common/references";
import { CODE, DESIGNTOOLS, UIUX } from "./common/skills";
import ArrowButton from "../components/ArrowButton/ArrowButton";
import CertificationList from "../components/CertificationList/CertificationList";
import ExperienceCard from "../components/ExperienceCard/ExperienceCard";
import LineList from "../components/LineList/LineList";
import PortfolioCard from "../components/PortfolioCard/PortfolioCard";
import ReferenceCard from "../components/ReferenceCard/ReferenceCard";
import SkillsProgress from "../components/SkillsProgress/SkillsProgress";
import {
  Bezier,
  Brush,
  Brush2,
  Gallery,
  Layer,
  Play,
  Text,
} from "iconsax-react";
import EntryIconCard from "../components/EntryIconCard/EntryIconCard";
import Link from "next/link";
import Image from "next/image";
import Tag from "@/components/Tag/Tag";
import SkillsTag from "@/components/SkillsTag/SkillsTag";
import Code from "@/components/Icons/Code";
import { Divider } from "antd";
import { LinkedinFilled, LinkedinOutlined } from "@ant-design/icons";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <div className="relative  flex items-center justify-center w-[100%] h-[100vh] overflow-x-hidden">
        <div className="relative container flex items-center justify-center m-auto">
          {/* <div className="bg-white w-18 h-18 rounded flex items-center justify-center">
            <Brush color="#1B1E31" size={24}/>
          </div> */}
          <EntryIconCard
            styles="left-[0px] rotate-[20deg]"
            topStart={-50}
            topEnd={-270}
            icon={<Brush color="#1B1E31" size={24} />}
          />
          <EntryIconCard
            styles="lg:left-[260px] md:left-[180px] left-[100] rotate-[7deg]"
            topStart={-200}
            topEnd={-400}
            icon={<Bezier color="#1B1E31" size={24} />}
          />
          <EntryIconCard
            styles="xl:left-[400px] lg:left-[360px] md:left-[240] left-[140] rotate-[7deg]"
            topStart={200}
            topEnd={-140}
            icon={<Text color="#1B1E31" size={24} />}
          />
          <EntryIconCard
            styles="xl:left-[680px] lg:left-[540px] md:left-[440px] left-[320px] rotate-[-16deg]"
            topStart={-200}
            topEnd={-290}
            icon={<Brush2 color="#1B1E31" size={24} />}
          />
          <EntryIconCard
            styles="xl:left-[880px] lg:left-[680px] md:left-[550px] left-[320px] md:flex rotate-[-12deg]"
            topStart={200}
            topEnd={-120}
            icon={<Gallery color="#1B1E31" size={24} />}
          />
          <EntryIconCard
            styles="xl:left-[970px] lg:left-[800px] md:left-[650px] left-[460px] md:flex rotate-[15deg]"
            topStart={-250}
            topEnd={-370}
            icon={<Play color="#1B1E31" size={24} />}
          />
          <EntryIconCard
            styles="xl:left-[1200px] lg:left-[980px] md:left-[750px] left-[540px] md:flex rotate-[-13deg]"
            topStart={0}
            topEnd={-220}
            icon={<Layer color="#1B1E31" size={24} />}
          />
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: "-175px" }}
            transition={{ duration: 1, delay: 2 }}
            id="entry"
          >
            <div className="relative flex-col items-center">
              <p className="text-lg md:text-2xl text-center">
                Are you looking for an
              </p>
              <div className="flex flex-col md:flex-row justify-center mt-10 md:mt-0">
                <p className="text-3xl md:text-5xl lg:text-6xl font-bold text-center">
                  UI / UX Designer
                </p>
                <p className="text-3xl md:text-5xl lg:text-6xl font-bold rotate-45 text-center">
                  ?
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        animate={{ marginTop: ["0", "-55vh"] }}
        transition={{ duration: 1, delay: 2 }}
        className="relative bg-white  rounded-md p-4 pt-10 md:pt-18"
      >
        <div className="relative container mx-auto pb-6">
          <section id="about">
            <div className="md:grid grid-cols-3 gap-20  p-6  mx-auto rounded-[36px] bg-gray md:h-[620px] overflow-hidden">
              <div className="relative hidden col-span-1  md:flex justify-center">
                <img
                  src="/images/about1.png"
                  alt="about"
                  className="w-full lg:w-auto h-auto"
                />
              </div>
              <div className="col-span-12 md:col-span-2 pb-10">
                <p className="text-[8vw] md:text-5xl lg:text-6xl font-extrabold mb-4 inline-block">
                  Oğuzhan <span className="md:text-end md:hidden">Korkmaz</span>
                </p>
                <p className="text-2xl md:text-5xl lg:text-6xl ml-4 font-extrabold mb-4 hidden md:block md:text-end">
                  Korkmaz
                </p>
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
            <div className="bg-gray rounded-[36px] p-3 md:p-6 grid grid-cols-1 md:grid-cols-12 gap-10">
              <div className="col-span-1 md:col-span-6 bg-white p-3 md:p-6 rounded-md">
                <p className="text-2xl md:text-3xl lg:text-4xl font-black mb-6">
                  Education
                </p>
                <LineList
                  time="2019-2022"
                  title="Eskişehir Osmangazi University"
                  info="Mathematics-Computer Science - 2.97"
                />
              </div>
              <div className="col-span-1 md:col-span-6 bg-white p-3 md:p-6 rounded-md">
                <p className="text-2xl md:text-3xl lg:text-4xl font-black mb-6">
                  Courses
                </p>
                <LineList
                  title=".NET"
                  info="Bilge Adam received .NET courses in educational institutions"
                />
              </div>
              <div className="col-span-1 md:col-span-6 bg-white p-3 md:p-6 rounded-md">
                <p className="text-2xl md:text-3xl lg:text-4xl font-black mb-6">
                  Certifications
                </p>
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
              <div className="col-span-1 md:col-span-6 bg-black p-4 md:p-10 rounded-md ">
                <p className="text-md md:text-lg text-white">
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
                  width={218}
                  height={78}
                />
                <p></p>
              </div>
            </div>
          </section>
          <section id="skills" className="mt-[200px]">
            <p className="text-3xl md:text-4xl font-black">Skills</p>,
            {/* <div className="w-full flex items-center justify-center mt-10 gap-20">

  <div className="flex flex-col items-end gap-2 w-[40%]">
    <SkillsTag item={UIUX.slice(0, 8)} />
  </div>

  <div className="flex flex-col items-center">
    <div className="w-[120px] h-[120px] rounded-full bg-black flex items-center justify-center">
      <BrushBig color="#fff" size={40} />
    </div>
    <p className="mt-3 font-bold text-md">UI/UX</p>
  </div>

  <div className="flex flex-col items-start gap-2 w-[40%]">
    <SkillsTag item={UIUX.slice(8)} />
  </div>

</div> */}
            <div className="flex flex-col md:flex-row items-center justify-between mt-10 gap:6 md:gap-20">
              <div className="hidden md:flex flex-wrap md:flex-row-reverse gap-3 flex-1 order-2 md:order-1">
                <SkillsTag item={UIUX.slice(0, 8)} />
              </div>
              <div className="flex flex-col align-center w-[120px] order-1 md:order-2">
                <div className="w-[120px] h-[120px] flex items-center justify-center bg-black rounded-[120px]">
                  <BrushBig color="#fff" size={40} variant="Bulk" />
                </div>
                <p className="text-center mt-6 font-bold text-md">UI/UX</p>
              </div>
              <div className="hidden md:flex flex-wrap flex-row gap-3 flex-1 order-3">
                <SkillsTag item={UIUX.slice(8, 16)} />
              </div>
            </div>
            <div className="flex md:hidden flex-wrap gap-2 justify-center mt-6">
              <SkillsTag item={UIUX} />
            </div>
            <div className="p-8 bg-gray rounded-md w-full flex-1 mt-20">
              <div className="flex flex-col items-center justify-center gap-4">
                <ColorSwatch color="#1B1E31" size={40} variant="Bulk" />
                <p className="text-center font-bold text-md">Design Tools</p>
              </div>
              <div className="flex items-center justify-center lg:justify-between flex-wrap gap-8 mt-10">
                {DESIGNTOOLS.map((item, index) => (
                  <SkillsProgress data={item} key={index} type="light" />
                ))}
              </div>
            </div>
            <div className="p-8 bg-black rounded-md w-full flex-1 mt-20">
              <div className="flex flex-col items-center justify-center gap-4">
                {/* <Code1 color="#fff" size={40} variant="Bulk" /> */}
                <Code />
                <p className="text-center font-bold text-md text-gray">
                  Coding
                </p>
              </div>
              <div className="flex items-center justify-center lg:justify-between flex-wrap gap-8 mt-10">
                {CODE.map((item, index) => (
                  <SkillsProgress data={item} key={index} type="dark" />
                ))}
              </div>
            </div>
          </section>
          <section id="portfoilo" className="mt-50">
            <p className="text-3xl md:text-4xl font-black">Portfolio</p>
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
              {PORTFOLIOS.slice(0, 3).map((item, index) => (
                <PortfolioCard data={item} type="home" key={index} />
              ))}
              <Link
                href="/portfolio"
                className="bg-gray p-6 rounded-[20px] overflow-hidden relative"
                id="portfolio-link"
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
          <section id="references" className="mt-50">
            <p className="text-3xl md:text-4xl font-black">References</p>
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
              {REFERENCES.map((item, index) => (
                <ReferenceCard data={item} key={index} />
              ))}
            </div>
          </section>
          <Footer />
        </div>
      </motion.div>
    </>
  );
}
