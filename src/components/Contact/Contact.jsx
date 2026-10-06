import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(
        "service_cuiuopz",
        "template_ag1kiwq",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "FwptX93chcC4eKfFO",
      )
      .then(() => {
        alert("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          message: "",
        });

        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send message.");

        setLoading(false);
      });
  };

  return (
    <section id="contact" className="bg-[#FF2A2A] py-20 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[6px] md:tracking-[8px] text-black mb-4">
            GET IN TOUCH
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-black">
            Contact Me
          </h2>

          <p className="text-black/80 mt-6 max-w-2xl mx-auto">
            Interested in working together or discussing opportunities? Feel
            free to reach out.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-8">
              Let's Connect 🚀
            </h3>

            <div className="space-y-6">
              {[
                {
                  icon: <FaEnvelope />,
                  title: "Email",
                  value: "dhaneshwarang@gmail.com",
                },
                {
                  icon: <FaLinkedin />,
                  title: "LinkedIn",
                  value: "linkedin.com/in/dhaneshwaran-g",
                },
                {
                  icon: <FaGithub />,
                  title: "GitHub",
                  value: "github.com/DhaneshwaranG",
                },
                {
                  icon: <FaMapMarkerAlt />,
                  title: "Location",
                  value: "Pondicherry, India",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4"
                >
                  <div className="text-3xl text-black">{item.icon}</div>

                  <div>
                    <p className="font-semibold text-black">{item.title}</p>

                    <p className="text-black/80 break-all">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-black p-6 md:p-8 rounded-3xl shadow-2xl"
          >
            <form onSubmit={sendEmail} className="space-y-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full p-4 rounded-xl bg-[#111111] border border-gray-700 text-white outline-none focus:border-red-500"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full p-4 rounded-xl bg-[#111111] border border-gray-700 text-white outline-none focus:border-red-500"
              />

              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                className="w-full p-4 rounded-xl bg-[#111111] border border-gray-700 text-white outline-none focus:border-red-500"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="
                  w-full
                  bg-red-500
                  text-white
                  py-4
                  rounded-xl
                  font-semibold
                  hover:bg-red-600
                  hover:scale-[1.02]
                  transition-all
                  duration-300
                  disabled:opacity-70
                "
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
