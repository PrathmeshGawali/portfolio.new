"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Bulkbites - AI Fitness App",
    description: "AI-driven app for food recognition, nutrient tracking, recipe suggestions, and pose correction.",
    image: "/images/projects/1.png",
    tag: ["All", "AI/ML"],
    techstack: ["Python", "TensorFlow", "OpenCV", "React Native"],
    gitUrl: "https://bulkbites.tensorbuilds.tech/",
  },
  {
    id: 2,
    title: "SynapseIQ - Multimodal RAG Learning Assistant",
    description: "Web-based learning assistant using Streamlit and RAG to generate summaries, flashcards, quizzes, and mind maps.",
    image: "/images/projects/2.png",
    tag: ["All", "Web", "AI/ML"],
    techstack: ["Python", "Streamlit", "LangChain", "LLMs"],
    gitUrl: "https://github.com/PrathmeshGawali/synapse_final",
  },
  {
    id: 3,
    title: "Chatmate - AI Browser Assistant",
    description: "Browser extension that helps understand webpages and gain more insights using AI.",
    image: "/images/projects/3.png",
    tag: ["All", "Web", "AI/ML"],
    techstack: ["JavaScript", "Chrome Extension API", "NLP"],
    gitUrl: "https://github.com/PrathmeshGawali/Chatmate",
  },
{
  "id": 4,
  "title": "Image Colorization Autoencoder",
  "description": "Deep learning model that converts grayscale images to color using a convolutional autoencoder architecture.",
  "image": "/images/projects/4.png",
  "tag": ["All", "Deep Learning"],
  "techstack": ["TensorFlow", "Keras", "OpenCV", "Python"],
  "gitUrl": "https://github.com/PrathmeshGawali/BlackAndWhitetoColor"
},
  {
    id: 5,
    title: "Movie Recommendation System",
    description: "ML-based project that recommends movies based on user preferences.",
    image: "/images/projects/5.png",
    tag: ["All", "AI/ML"],
    techstack: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    gitUrl: "https://colab.research.google.com/drive/1tTpZk0kkrzg5K0OhnI2KPgPj3Uw-hsO6?usp=sharing",
  },
  {
    id: 6,
    title: "Stock Price Prediction",
    description: "Analyzes historical prices and compares future stock price accuracy using various ML models.",
    image: "/images/projects/6.png",
    tag: ["All", "AI/ML"],
    techstack: ["Python", "TensorFlow", "Pandas", "Matplotlib"],
    gitUrl: "https://colab.research.google.com/drive/1HkJVGg8e22N5CS4OliAmdhvaLpmexVxs?usp=sharing",
  },

  {
    id: 7,
    title: "Drowsiness Detection System",
    description: "Eye detection based drowsiness detection using OpenCV, Dlib, and Pygame.",
    image: "/images/projects/7.png",
    tag: ["All", "AI/ML"],
    techstack: ["Python", "OpenCV", "Dlib", "Pygame"],
    gitUrl: "https://github.com/PrathmeshGawali/Simple-Drowsiness-Detection-System",
  },
  {
    id: 8,
    title: "Meme Generator",
    description: "React.js based project used to generate random memes and download them.",
    image: "/images/projects/8.jpeg",
    tag: ["All", "Web"],
    techstack: ["React.js", "JavaScript", "CSS"],
    gitUrl: "https://github.com/PrathmeshGawali/Meme-react",
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="AI/ML"
          isSelected={tag === "AI/ML"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              techstack={project.techstack}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
