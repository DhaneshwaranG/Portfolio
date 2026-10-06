import profile from "../../assets/images/Dhanesh-img-orange(bg).jpg";
import { motion } from "framer-motion";
import { FaReact, FaJava, FaGithub } from "react-icons/fa";
import { SiMysql, SiSpringboot } from "react-icons/si";

function About() {
  return (
    <section
      id="about"
      className="relative bg-[#D62828] min-h-screen flex items-center overflow-hidden py-20 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Lanyard */}
              <div className="absolute left-1/2 -translate-x-1/2 -top-20 md:-top-36 w-2 h-40 md:h-60 bg-black"></div>

              {/* Clip */}
              <div className="absolute left-1/2 -translate-x-1/2 -top-6 w-8 h-8 rounded-full border-4 border-black"></div>

              {/* ID Card */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                }}
                whileHover={{
                  rotate: 4,
                  scale: 1.03,
                }}
                className="bg-[#1f1f1f] rounded-[24px] md:rounded-[30px] p-4 md:p-6 shadow-2xl md:rotate-[-4deg] w-full max-w-[320px] md:max-w-[380px]"
              >
                <img
                  src={profile}
                  alt="Dhaneshwaran G"
                  className="rounded-2xl w-full h-[300px] md:h-[380px] object-cover"
                />

                <div className="mt-5 text-center">
                  <h3 className="text-white text-xl md:text-2xl font-bold">
                    DHANESHWARAN G
                  </h3>

                  <p className="text-red-500 mt-2 text-sm md:text-base">
                    Java Full Stack Developer
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="uppercase tracking-[6px] md:tracking-[8px] font-semibold text-white">
              ABOUT ME
            </p>

            <h2 className="text-black text-4xl sm:text-5xl md:text-8xl font-black mt-2">
              Hello!
            </h2>

            <p className="text-black text-base md:text-lg mt-6 md:mt-8 leading-relaxed max-w-xl">
              I'm <span className="font-black uppercase">Dhaneshwaran G</span>,
              a passionate Java Full Stack Developer with a strong foundation in
              Spring Boot, React, MySQL, and REST APIs. Passionate about
              creating scalable applications, solving complex problems, and
              continuously learning modern technologies.
            </p>

            <p className="text-black/80 text-base md:text-lg mt-6 leading-relaxed max-w-xl">
              My expertise includes Spring Boot, React, MySQL, REST APIs, and
              creating responsive user interfaces backed by powerful backend
              systems.
            </p>

            {/* Tech Icons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-10 mt-10 md:mt-14">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                whileHover={{ scale: 1.15 }}
                className="text-black"
              >
                <FaReact size={50} />
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2.5 }}
                whileHover={{ scale: 1.15 }}
                className="text-black"
              >
                <SiSpringboot size={50} />
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                whileHover={{ scale: 1.15 }}
                className="text-black"
              >
                <FaJava size={50} />
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3.5 }}
                whileHover={{ scale: 1.15 }}
                className="text-black"
              >
                <SiMysql size={50} />
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                whileHover={{ scale: 1.15 }}
                className="text-black"
              >
                <FaGithub size={50} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
