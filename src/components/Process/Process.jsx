import { motion } from "framer-motion";

function Process() {
  const steps = [
    {
      number: "01",
      title: "Planning",
      description:
        "Understanding requirements, designing architecture and preparing the project roadmap.",
    },
    {
      number: "02",
      title: "Development",
      description:
        "Building scalable frontend and backend applications using React and Spring Boot.",
    },
    {
      number: "03",
      title: "Testing",
      description:
        "Testing APIs, responsiveness and ensuring application quality and performance.",
    },
    {
      number: "04",
      title: "Deployment",
      description:
        "Deploying applications and maintaining production-ready solutions.",
    },
  ];

  return (
    <section
      id="process"
      className="bg-[#0a0a0a] text-white py-20 md:py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="uppercase tracking-[6px] md:tracking-[8px] text-red-500 mb-4">
            HOW I WORK
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold">
            Development Process
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            My approach to building scalable and production-ready software
            solutions.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="
                bg-[#111]
                border
                border-red-500/20
                rounded-3xl
                p-8
                hover:border-red-500
                hover:shadow-[0_0_35px_rgba(255,42,42,0.35)]
                transition-all
                duration-300
              "
            >
              {/* Number */}
              <h3 className="text-6xl md:text-7xl font-black text-red-500/20">
                {step.number}
              </h3>

              {/* Title */}
              <h4 className="text-2xl font-bold mt-4 text-white">
                {step.title}
              </h4>

              {/* Description */}
              <p className="text-gray-400 mt-4 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
