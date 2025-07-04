"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Image from 'next/image';

const Tensorbuilds = () => {
  const [videoActive, setVideoActive] = useState(false);
  const videoId = "RMUHAWTKOOE";
  const [imgSrc, setImgSrc] = useState(
    `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  );

  return (
    <section className="lg:py-20 px-4 space-y-16 bg-[#121212]" id="tensorbuilds">
      {/* Startup Intro Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center pt-12"
      >
        <div className="mb-8 flex justify-center">
          <div className="bg-gradient-to-r from-violet-600 to-pink-700 p-1 rounded-full">
            <div className="bg-[#0a0a15] rounded-full px-6 py-2">
              <p className="text-violet-300 font-semibold tracking-wider">Start-Up</p>
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-pink-600 mb-6 font-sans tracking-tight">
          Building Tomorrow with TensorBuilds
        </h1>
        
        <p className="text-[#c5cbd3] text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
          We are an AI-first startup pioneering computer vision solutions for real-world mobile applications. 
          Our flagship product, <span className="font-bold text-violet-300">BulkBites</span>, leverages cutting-edge AI to deliver 
          unparalleled nutritional tracking accuracy.
        </p>
        
        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="https://www.tensorbuilds.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-[#1a1a2e] hover:bg-[#252547] px-6 py-3 rounded-lg font-semibold text-violet-300 gap-2 transition-all"
          >
            Visit Website
          </a>
          <a
            href="https://instagram.com/tensorbuilds"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-[#1a1a2e] hover:bg-[#252547] px-6 py-3 rounded-lg font-semibold text-pink-300 gap-2 transition-all"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/company/tensorbuilds/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-[#1a1a2e] hover:bg-[#252547] px-6 py-3 rounded-lg font-semibold text-violet-400 gap-2 transition-all"
          >
            LinkedIn
          </a>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column - YouTube */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="col-span-7 bg-gradient-to-br from-[#1a1a2e] to-[#0f0f23] rounded-2xl p-8 shadow-2xl border border-[#2d2d42]"
        >
          <div className="flex items-center mb-8">
            <div className="bg-gradient-to-r from-pink-600 to-violet-700 w-14 h-14 rounded-xl flex items-center justify-center mr-4">
              <svg className="w-7 h-7 text-white" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-white text-3xl font-bold font-sans tracking-tight">
                TensorBuilds Channel
              </h2>
              <p className="text-violet-300 mt-1">Explore our AI development journey</p>
            </div>
          </div>

          {/* YouTube Video Player */}
          <div className="aspect-video mb-6 rounded-xl overflow-hidden relative bg-black border-2 border-[#333355]">
            {!videoActive ? (
              <div className="w-full h-full relative">
                <img
                  src={imgSrc}
                  alt="YouTube Video Thumbnail"
                  className="w-full h-full object-cover"

                  onError={(e) => {
                    e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                  }}
                />
                {/* Play Button Overlay */}
                <button
                  className="absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-30 hover:bg-opacity-10 transition-all duration-300"
                  onClick={() => setVideoActive(true)}
                  aria-label="Play video"
                >
                  <div className="w-24 h-24 bg-gradient-to-r from-pink-600 to-violet-800 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <svg
                      className="w-14 h-14 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            ) : (
              // Inline YouTube Player
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
                title="BulkBites Dev Journey"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            )}
          </div>

          <motion.a
            href="https://youtube.com/@tensorbuilds"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-3 bg-gradient-to-r from-pink-700 to-violet-900 text-white px-8 py-4 rounded-xl font-bold text-center w-full text-lg"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
              />
            </svg>
            Subscribe on YouTube
          </motion.a>
        </motion.div>

        {/* Right Column - BulkBites */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="col-span-5 bg-gradient-to-br from-[#0d0d0d] to-[#1a1a2e] p-8 rounded-2xl shadow-2xl border border-[#2d2d42]"
        >
          <div className="flex items-center mb-8">
            <div className="bg-gradient-to-r from-violet-600 to-pink-700 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
              <span className="text-2xl">🍽️</span>
            </div>
            <div>
              <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-600 text-3xl font-bold font-sans tracking-tight">
                BulkBites
              </h2>
              <p className="text-violet-300 mt-1">AI-Powered Nutrition Tracking</p>
            </div>
          </div>

          <div className="bg-[#15152b] p-5 rounded-xl mb-8 h-32">
            <p className="text-[#c5cbd3] text-lg">
              <TypeAnimation
                sequence={[
                  "BulkBites is the world's most advanced calorie tracker.",
                  2000,
                  "Identify 260+ foods with 96% accuracy using AI vision.",
                  2000,
                  "Get precise nutritional values per 100 grams instantly.",
                  2000,
                  "Professional meal planning and workout integration coming soon.",
                  2000,
                ]}
                speed={50}
                deletionSpeed={70}
                repeat={Infinity}
                wrapper="span"
              />
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-violet-400 font-bold mb-3 flex items-center gap-2 text-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Core Features
              </h3>
              <ul className="text-[#c5cbd3] space-y-3">
                <li className="flex items-start">
                  <span className="bg-violet-900 w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">✓</span>
                  <span className="font-medium">AI-powered food recognition with 96% accuracy</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-violet-900 w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">✓</span>
                  <span className="font-medium">Detailed calorie & nutrient analysis per 100g</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-violet-900 w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">✓</span>
                  <span className="font-medium">Professional-grade UI/UX for health tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-violet-900 w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">✓</span>
                  <span className="font-medium">Offline functionality with cloud sync</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-pink-400 font-bold mb-3 flex items-center gap-2 text-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Technology Stack
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#1f1f3a] p-3 rounded-lg flex items-center">
                  <div className="bg-violet-900 w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-lg">⚛️</span>
                  </div>
                  <span className="font-medium">React Native</span>
                </div>
                <div className="bg-[#1f1f3a] p-3 rounded-lg flex items-center">
                  <div className="bg-violet-900 w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-lg">🐍</span>
                  </div>
                  <span className="font-medium">Python</span>
                </div>
                <div className="bg-[#1f1f3a] p-3 rounded-lg flex items-center">
                  <div className="bg-violet-900 w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-lg">🔶</span>
                  </div>
                  <span className="font-medium">Oracle DB</span>
                </div>
                <div className="bg-[#1f1f3a] p-3 rounded-lg flex items-center">
                  <div className="bg-violet-900 w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-lg">👁️</span>
                  </div>
                  <span className="font-medium">YOLO Vision</span>
                </div>
              </div>
            </div>
          </div>

          <motion.a
            href="https://play.google.com/store/apps/details?id=com.tensorbuilds.bulkbites"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="mt-10 flex items-center justify-center gap-3 bg-gradient-to-r from-violet-700 to-pink-700 text-center py-4 rounded-xl font-bold cursor-pointer text-white text-lg"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.25-.84-.76-.84-1.35m13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27m3.35-4.31c.34.27.59.69.59 1.19s-.22.9-.57 1.18l-2.29 1.32-2.5-2.5 2.5-2.5 2.27 1.31M6.05 2.66l10.76 6.22-8.49 8.5-2.27-2.27 8.49-8.49-8.49 8.48-2.27-2.27 8.49-8.49L6.05 2.66Z"
              />
            </svg>
            Download on Play Store
          </motion.a>
        </motion.div>
      </div>
      
      {/* Stats Section - Centered */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6 py-12"
      >
        <div className="bg-gradient-to-br from-[#1a1a2e] to-[#0f0f23] p-6 rounded-2xl text-center border border-[#2d2d42] w-full max-w-xs">
          <div className="text-4xl font-bold text-violet-400 mb-2">260+</div>
          <div className="text-[#c5cbd3] font-medium">Foods Recognized</div>
        </div>
        <div className="bg-gradient-to-br from-[#1a1a2e] to-[#0f0f23] p-6 rounded-2xl text-center border border-[#2d2d42] w-full max-w-xs">
          <div className="text-4xl font-bold text-pink-400 mb-2">96%</div>
          <div className="text-[#c5cbd3] font-medium">Recognition Accuracy</div>
        </div>
      </motion.div>
    </section>
  );
};

export default Tensorbuilds;