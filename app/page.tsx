"use client";

import Image from "next/image";
import pp from "../public/myphoto.jpg.png";
import ThemeToggle from "@/components/ui/theme-toggle";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import image0 from "../public/project 0.png";
import image1 from "../public/project 1.png";
import image2 from "../public/project 2.png";
import image3 from "../public/project 3.png";
export default function Home() {
  return (
    <div
      className="min-h-screen bg-[#FFFFF0] dark:bg-black text-black dark:text-white
    transition-colors duration-300"
    >
      {/* NEW HERO SECTION - REPLACES OLD HEADER */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-3xl px-4 py-20 relative"
      >
        {/* Theme Toggle - Positioned absolutely in top right */}
        <div className="absolute top-6 right-6 z-20">
          <ThemeToggle />
        </div>

        {/* Main content container */}
        <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
          {/* Profile Image Container */}
          <motion.div
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              duration: 1.4,
              delay: 0.3,
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            className="relative mb-8 mx-auto w-fit"
          >
            {/* Orange dot above image */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-3 h-5 bg-gray-800 rounded-full shadow-lg"
            ></motion.div>

            {/* Profile Image */}
            <div className="relative w-48 h-56 mx-auto">
              <div className="w-full h-full rounded-3xl overflow-hidden bg-white dark:bg-gray-800 shadow-2xl border-4 border-white dark:border-gray-700 transform hover:scale-105 transition-transform duration-300">
                <Image
                  src={pp}
                  alt="Rahil - Profile Picture"
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                  priority
                />
              </div>

              {/* Decorative border glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 opacity-20 blur-xl -z-10 animate-pulse"></div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-1"
          >
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl text-gray-800 dark:text-gray-100 leading-tight font-serif">
              <span className="text-gray-700 dark:text-gray-300 font-normal italic">
                Hello,{" "}
              </span>
              <span className="text-coffee-900 font-normal">I am Rahil.</span>
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium"
            >
              <span className="text-skyblue-300">Ðeveloper</span>
              <span className="text-gray-500 dark:text-gray-500 mx-2">,</span>
              <span
                className="bg-gradient-to-r from-rose-600
                via-indigo-500 to-sky-500 bg-clip-text text-transparent"
              >
                Ďesigner
              </span>
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="pt-4"
            >
              <Button
                className="rounded-full bg-gradient-to-r from-rose-600
             to-indigo-600 text-white transition-transform hover:scale-105"
              >
                <span className="relative z-10">
                  <a href="#contact">Hire me</a>
                </span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* EXISTING CONTENT - UPDATED CONTAINER */}

      <div className="mx-auto max-w-3xl px-4 py-[10px]">
        {/* SOF main Name and Address section */}

        <main className="space-y-10">
          <section className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-1"
            >
              <h1
                className="text-4xl font-bold bg-gradient-to-r from-rose-600
          via-indigo-500 to-sky-500 bg-clip-text text-transparent
          inline-block"
              >
                Ŗahil
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Aspiring Full-Stack Web Developer
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Bangalore, North
              </p>
            </motion.div>

            {/* EOF main Name and Address section */}

            {/* SOF Objective section */}

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-3"
            >
              <h2 className="text-lg font-semibold">
                Building scalable solutions for Tomorrow
              </h2>
              <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
                Enthusiastic and detail-oriented Web Developer with 1 year of
                hands-on coding experience and a{" "}
                <span className="text-black dark:text-white">
                  Bachelor degree in Computer Science.
                </span>
                and Collaborative team player with excellent communication
                skills and proven ability to work with others to{" "}
                <span className="text-black dark:text-white">
                  develop and launch responsive web and mobile solutions.
                </span>
                .
              </p>
              <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
                Beyond web development, I am passionate about AI tools and
                emerging technologies, with a strong interest in Web3 design and
                creating innovative digital experiences that blend usability,
                scalability, and future-ready solutions.
              </p>
            </motion.div>

            {/* EOF Objective section */}

            {/* SOF Icons section */}

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3"
            >
              <Button
                className="rounded-full bg-gradient-to-r from-rose-600
             to-indigo-600 text-white transition-transform hover:scale-105"
              >
                <a
                  href="https://github.com/rahild1/rahil-resume/blob/main/resume.png"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </Button>

              <Link
                href="https://github.com/rahild1"
                target="_blank"
                className="text-gray-600 dark:text-gray-400
            hover:text-black dark:hover:text-white transition-colors"
              >
                <FaGithub className="w-6 h-6" />
              </Link>

              <Link
                href="https://www.linkedin.com/in/rahil-desai-001cs/"
                target="_blank"
                className="text-gray-600 dark:text-gray-400
            hover:text-black dark:hover:text-white transition-colors"
              >
                <FaLinkedin className="w-6 h-6" />
              </Link>

              <Link
                href="#"
                className="text-gray-600 dark:text-gray-400
            hover:text-black dark:hover:text-white transition-colors"
              >
                <FaTwitter className="w-6 h-6" />
              </Link>
            </motion.div>
          </section>

          {/* EOF Icons section */}

          {/* SOF SKILLS section */}

          <motion.section
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h2
              className="text-3xl font-semibold bg-gradient-to-r from-rose-600
            via-indigo-500 to-sky-500 bg-clip-text text-transparent
            inline-block"
            >
              Skills
            </h2>

            <div className="flex flex-wrap gap-3">
              {[
                {
                  name: "HTML",
                  color:
                    "hover:bg-orange-500 dark:hover:bg-orange-500 hover:shadow-orange-500/30 dark:hover:shadow-orange-500/50",
                },
                {
                  name: "CSS",
                  color:
                    "hover:bg-blue-600 dark:hover:bg-blue-600 hover:shadow-blue-600/30 dark:hover:shadow-blue-600/50",
                },
                {
                  name: "JavaScript",
                  color:
                    "hover:bg-yellow-500 dark:hover:bg-yellow-500 hover:shadow-yellow-500/30 dark:hover:shadow-yellow-500/50",
                },
                {
                  name: "React",
                  color:
                    "hover:bg-blue-500 dark:hover:bg-blue-500 hover:shadow-blue-500/30 dark:hover:shadow-blue-500/50",
                },
                {
                  name: "Java",
                  color:
                    "hover:bg-[#700910] dark:hover:bg-[#700910] hover:shadow-[#700910]/30 dark:hover:shadow-[#700910]/50",
                },
                {
                  name: "Python",
                  color:
                    "hover:bg-yellow-500 dark:hover:bg-yellow-500 hover:shadow-yellow-500/30 dark:hover:shadow-yellow-500/50",
                },
                {
                  name: "SQL",
                  color:
                    "hover:bg-green-500 dark:hover:bg-green-500 hover:shadow-green-500/30 dark:hover:shadow-green-500/50",
                },
                {
                  name: "AI",
                  color:
                    "hover:bg-indigo-600 dark:hover:bg-indigo-600 hover:shadow-indigo-600/30 dark:hover:shadow-indigo-600/50",
                },
                {
                  name: "Git/GitHub",
                  color:
                    "hover:bg-gray-700 dark:hover:bg-gray-600 hover:shadow-gray-700/30 dark:hover:shadow-gray-600/50",
                },
              ].map((skill) => (
                <span
                  key={skill.name}
                  className={`px-3 py-1 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 
                  rounded-full text-sm cursor-pointer transition-all duration-300 ease-in-out
                  hover:text-white dark:hover:text-white hover:scale-110 hover:-translate-y-1 
                  hover:shadow-lg transform active:scale-95 ${skill.color}`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.section>

          {/* EOF SKILLS section */}

          {/* SOF Education section */}

          <motion.section
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2
              className="text-3xl font-semibold bg-gradient-to-r from-rose-600
            via-indigo-500 to-sky-500 bg-clip-text text-transparent
            inline-block"
            >
              Education
            </h2>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Jan, 2021 - June, 2024
                  </p>
                  <p className="font-medium">
                    Bachelor degree in computer science.
                  </p>
                  <p className="text-blue-600 dark:text-blue-400">
                    Jain college of Engineering And Research Belagavi (VTU
                    University)
                  </p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Graduated with honors, specializing in Computer Science
                Engineering.
              </p>
            </div>
          </motion.section>

          {/* EOF Education section */}

          {/* SOF Internship section */}

          <motion.section
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2
              className="text-3xl font-semibold bg-gradient-to-r from-rose-600
            via-indigo-500 to-sky-500 bg-clip-text text-transparent
            inline-block"
            >
              Experience
            </h2>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    August, 2025 Present
                  </p>
                  <p className="font-medium">
                    Full-stack web development internship
                  </p>
                  <p className="text-blue-600 dark:text-blue-400">
                    KodNest Technologies, Bangalore{" "}
                  </p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Currently undergoing intensive training in Full-Stack Web
                Development (Java, Spring Boot, React, JavaScript, HTML, CSS,
                MySQL, Python). Gaining hands-on experience with frontend,
                backend, and database integration through real-world projects.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    August, 2023 - Nov, 2023
                  </p>
                  <p className="font-medium">
                    Technology Intern | Emerging Tech Exploration{" "}
                  </p>
                  <p className="text-blue-600 dark:text-blue-400">
                    Pranaksh Technologies LLP, Belagavi, Karnataka{" "}
                  </p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Explored various technology areas during internship training.
                Built beginner-level awareness of Artificial Intelligence (AI),
                Machine Learning (ML). Gained insights into how emerging
                technologies are applied in industry.
              </p>
            </div>
          </motion.section>

          {/* EOF Internship section */}

          {/* SOF Projects 1 section */}

          <motion.section
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2
              className="text-3xl font-semibold bg-gradient-to-r from-rose-600
            via-indigo-500 to-sky-500 bg-clip-text text-transparent
            inline-block"
            >
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <Link
                href="https://ai-image-generator-one-inky.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card
                  className="bg-white-50 dark:bg-zinc-900 border-gray-200
          dark:border-zinc-800 transition-transform duration 300 hover:scale-105
          cursor-pointer"
                >
                  <CardContent className="p-1">
                    <Image
                      src={image0}
                      alt="project 0"
                      className="rounded-lg mb-4"
                    />

                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">AI Image Generator</h3>
                        <p className="text-smtext-gray-600 dark: text-gray-400">
                          HTML, CSS, JavaScript
                        </p>
                      </div>

                      <Button variant="ghost" size="icon">
                        →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              {/* EOF Projects 1 section */}

              {/* SOF Projects 2 section */}
              <Link
                href="https://git-hub-userfinder.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card
                  className="bg-white-50 dark:bg-zinc-900 border-gray-200
          dark:border-zinc-800 transition-transform duration 300 hover:scale-105
          cursor-pointer"
                >
                  <CardContent className="p-4">
                    <Image
                      src={image1}
                      alt="project 1"
                      className="rounded-lg mb-4"
                    />

                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">GitHub User Finder</h3>
                        <p className="text-smtext-gray-600 dark: text-gray-400">
                          HTML, CSS, JavaScript
                        </p>
                      </div>

                      <Button variant="ghost" size="icon">
                        →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              {/* EOF Projects 2 section */}

              {/* SOF Projects 3 section */}

              <Link
                href="https://expense-tracker-web-app-six.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card
                  className="bg-white-50 dark:bg-zinc-900 border-gray-200
          dark:border-zinc-800 transition-transform duration 300 hover:scale-105
          cursor-pointer"
                >
                  <CardContent className="p-4">
                    <Image
                      src={image2}
                      alt="project 2"
                      className="rounded-lg mb-4"
                    />

                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Expense Tracker</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          HTML, CSS, JavaScript
                        </p>
                      </div>

                      <Button variant="ghost" size="icon">
                        →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              {/* EOF Projects 3 section */}

              {/* SOF Projects 4 section */}

              <Link
                href="https://greatrecipes.base44.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card
                  className="bg-white-50 dark:bg-zinc-900 border-gray-200
          dark:border-zinc-800 transition-transform duration 300 hover:scale-105
          cursor-pointer"
                >
                  <CardContent className="p-4">
                    <Image
                      src={image3}
                      alt="project 3"
                      className="rounded-lg mb-4"
                    />

                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">
                          AI Recipe Finder Web App
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          REST API, Backend and web technology
                        </p>
                      </div>

                      <Button variant="ghost" size="icon">
                        →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              {/* EOF Projects 4 section */}

              {/* SOF Footer section */}
            </div>
            <p className="text-center text-sm text-gray-500 dark:text-gray-400">
              &copy; 2025 Rahil ❤️.
            </p>
          </motion.section>
          {/* EOF Footer section */}
        </main>
      </div>
    </div>
  );
}
