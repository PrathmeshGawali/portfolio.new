"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>C++</li>
        <li>Python</li>
        <li>Java</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>SQL</li>
      </ul>
    ),
  },
  {
    title: "Libraries",
    id: "libraries",
    content: (
      <ul className="list-disc pl-2">
        <li>Next.js</li>
        <li>React.js</li>
        <li>Pandas</li>
        <li>Numpy</li>
        <li>Sklearn</li>
        <li>Matplotlib</li>
        <li>Seaborn</li>
        <li>Pytorch</li>
        <li>OpenCV</li>
        <li>TensorFlow</li>
        <li>Langchain</li>
      </ul>
    ),
  },

  {
    title: " Accompaniment",
    id: " accompaniment",
    content: (
      <ul className="list-disc pl-2">
        <li>Canva</li>
        <li>Figma</li>
        <li>Adobe Express</li>
        <li>Video Editing (Cap-Cut, Filmora, In-Short)</li>
      </ul>
    ),
  },

  {
    title: "Certificates",
    id: " certificates",
    content: (
      <ul className="list-disc pl-2">
        <li>NPTEL : Introduction To Machine Learning - IITKGP</li>
        <li>NPTEL : Deep Learning - IITKGP</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" alt="Descriptive text about the image"   width={500}  // Set actual dimensions
  height={500}
  className="rounded-full border-4 border-white shadow-xl"/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I&apos;m a tech enthusiast and computer engineering student, currently co-founding a college startup developing AI-powered solutions in fitness and health. 
          I combine a strong software development background with a deep interest in research, often diving into advanced topics in computer science. 
          I&apos;m also the creator of the YouTube channel Think Outside the Box, where we share insightful technical content. 
          Outside of tech, I enjoy exploring the works of Dostoevsky and pushing the boundaries of what&apos;s possible with AI.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("libraries")}
              active={tab === "libraries"}
            >
              {" "}
              Libraries{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange(" certificates")}
              active={tab === " certificates"}
            >
              {" "}
              Certificates{" "}
            </TabButton>
            
            <TabButton
              selectTab={() => handleTabChange(" accompaniment")}
              active={tab === " accompaniment"}
            >
              {" "}
              Accompaniments{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
