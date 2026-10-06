import { useState } from "react";
import { motion } from "framer-motion";
import introVideo from "../../assets/videos/Portfolio-Self-Intro.mp4";
import ReelModal from "./ReelModal";


function Hero() {
  const [showReel, setShowReel] = useState(false);

  return (
    <>
      <section id="home" className="relative h-screen w-full overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={introVideo} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 w-full">
            {/* Small Intro */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="
                text-red-500
                uppercase
                tracking-[4px]
                md:tracking-[10px]
                text-[10px]
                sm:text-xs
                md:text-sm
                mb-4
              "
            >
              FULL STACK DEVELOPER
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="
                text-white
                text-3xl
                sm:text-4xl
                md:text-6xl
                lg:text-7xl
                font-black
                leading-none
                break-words
              "
            >
              DHANESHWARAN.G
            </motion.h1>

            {/* Developer */}
            <motion.h2
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="
                text-transparent
                stroke-text
                uppercase
                font-black
                leading-none
                mt-2
                break-words
                text-[2.4rem]
                sm:text-[3.5rem]
                md:text-[5rem]
                lg:text-[8rem]
              "
            >
              DEVELOPER
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="
                text-gray-200
                text-sm
                md:text-lg
                max-w-xl
                mt-6
                leading-relaxed
              "
            >
              Java Full Stack Developer specializing in Spring Boot, React,
              MySQL, REST APIs and modern web applications.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="
                flex
                flex-col
                sm:flex-row
                gap-3
                mt-8
                w-fit
              "
            >
              <a
                href="/Resume/Dhaneshwaran_Resume.pdf"
                download
                className="
                  bg-red-500
                  px-5
                  py-3
                  text-sm
                  rounded-full
                  text-white
                  font-semibold
                  hover:bg-red-600
                  transition
                "
              >
                My Resume
              </a>

              <button
                onClick={() => setShowReel(true)}
                className="
                  border
                  border-white/30
                  px-5
                  py-3
                  text-sm
                  rounded-full
                  text-white
                  hover:bg-white
                  hover:text-black
                  transition
                "
              >
                ▶ Play Reel
              </button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="
            absolute
            bottom-6
            left-1/2
            -translate-x-1/2
            text-white
            text-xl
          "
        >
          ↓
        </motion.div>
      </section>

      {/* Reel Modal */}
      <ReelModal isOpen={showReel} onClose={() => setShowReel(false)} />
    </>
  );
}

export default Hero;
