import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6 border-t border-red-500/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center gap-8"
        >
          {/* Left */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold">
              Dhaneshwaran G<span className="text-red-500">.</span>
            </h2>

            <p className="text-gray-400 mt-2">Java Full Stack Developer</p>

            <p className="text-gray-500 text-sm mt-2">
              Built with React + Tailwind CSS
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <motion.a
              whileHover={{ y: -5, scale: 1.2 }}
              href="https://github.com/DhaneshwaranG"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-500 transition"
            >
              <FaGithub size={24} />
            </motion.a>

            <motion.a
              whileHover={{ y: -5, scale: 1.2 }}
              href="https://linkedin.com/in/dhaneshwaran-g"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-500 transition"
            >
              <FaLinkedin size={24} />
            </motion.a>

            <motion.a
              whileHover={{ y: -5, scale: 1.2 }}
              href="mailto:dhaneshwarang@gmail.com"
              className="hover:text-red-500 transition"
            >
              <FaEnvelope size={24} />
            </motion.a>
          </div>
        </motion.div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Dhaneshwaran G. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
