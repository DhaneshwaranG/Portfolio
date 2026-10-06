import {motion} from 'framer-motion';
import {FaGithub, FaExternalLinkAlt} from 'react-icons/fa';

import medlabImg from '../../assets/images/Medlabpro-homepage.png';
import restaurantImg from '../../assets/images/restraurant-login.png';
import ecommerceImg from "../../assets/images/Ecommerse.png";

function Projects () {
  const projects = [
    // =========================
    // MEDLABPRO
    // =========================
    {
      title: 'MEDLABPRO',
      image: medlabImg,
      description: 'A full-stack medical laboratory management system built with Java Servlets, JDBC, MySQL, and Tomcat. It supports patient registration, profile management, lab test booking, appointment management, prescription handling, payment, admin booking management, timeslot management, and laboratory report generation.',
      tech: [
        'HTML',
        'CSS',
        'JavaScript',
        'Bootstrap',
        'Java',
        'Servlets',
        'JDBC',
        'MySQL',
        'Tomcat',
        'REST APIs',
      ],
      github: 'https://github.com/DhaneshwaranG/MedLabsPro',
    },

    // =========================
    // RESTAURANT MANAGEMENT
    // =========================
    {
      title: 'Restaurant Management System',
      image: restaurantImg,
      description: 'A full-stack Restaurant Management System developed using React, Spring Boot, and MySQL. The application allows customers to register, log in, browse menu items by category, add items to a cart, place orders, and view order history. It also includes an admin dashboard for managing categories, menu items, orders, and revenue analytics.',
      tech: [
        'React.js',
        'Spring Boot',
        'Java',
        'MySQL',
        'Spring Security',
        'JWT Authentication',
        'REST APIs',
        'Git & GitHub',
        'Vercel',
        'Render',
        'Railway',
      ],
      github: 'https://github.com/DhaneshwaranG/Restaurant-Management-System',
    },

    // =========================
    // E-COMMERCE
    // =========================
    {
      title: 'E-Commerce Product Platform',
      image: ecommerceImg,
      description: 'A full-stack e-commerce product platform built with React, Redux Toolkit, NestJS, Prisma, and PostgreSQL. The application includes user authentication, product listing, product management, Redux-based state management, theme switching, and a backend API connected to PostgreSQL.',
      tech: [
        'React',
        'TypeScript',
        'Redux Toolkit',
        'NestJS',
        'Prisma',
        'PostgreSQL',
        'REST APIs',
        'Vite',
        'Git & GitHub',
      ],
      github: 'https://github.com/DhaneshwaranG/react-nest-ecommerce.git',
      // demo: "YOUR_ECOMMERCE_DEMO_LINK",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-[#0a0a0a] text-white py-20 md:py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* =========================
            HEADING
        ========================= */}
        <motion.div
          initial={{opacity: 0, y: 40}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
          className="text-center mb-16 md:mb-20"
        >
          <p className="uppercase tracking-[6px] md:tracking-[8px] text-red-500 mb-4">
            MY WORK
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold">
            Featured Projects
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Some of the projects I've built while learning and applying
            full-stack development concepts.
          </p>
        </motion.div>

        {/* =========================
            PROJECT CARDS
        ========================= */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map ((project, index) => (
            <motion.div
              key={index}
              initial={{opacity: 0, y: 60}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="
                bg-[#111]
                border
                border-red-500/20
                rounded-3xl
                overflow-hidden
                hover:border-red-500
                hover:shadow-[0_0_35px_rgba(255,42,42,0.35)]
                transition-all
                duration-300
              "
            >
              {/* =========================
    PROJECT IMAGE / BANNER
========================= */}
              <div className="relative h-56 overflow-hidden">
                {project.image
                  ? <div className="relative w-full h-full">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-all duration-700 hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                      <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                        {project.title}
                      </h3>
                    </div>
                  : <div className="h-full bg-gradient-to-br from-red-600 via-red-700 to-black flex flex-col justify-center items-center">
                      <h3 className="text-3xl font-bold text-center px-4">
                        {project.title}
                      </h3>

                      <p className="uppercase tracking-[4px] text-red-200 text-sm mt-2">
                        Project Preview
                      </p>
                    </div>}
              </div>

              {/* =========================
                  PROJECT CONTENT
              ========================= */}
              <div className="p-6">
                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* =========================
                    TECHNOLOGIES
                ========================= */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map ((tech, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{scale: 1.1}}
                      className="
                        px-3
                        py-1
                        rounded-full
                        border
                        border-red-500/30
                        text-sm
                        text-red-400
                      "
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* =========================
                    BUTTONS
                ========================= */}
                <div className="flex flex-wrap gap-3">
                  {/* GitHub Button */}
                  {project.github &&
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        flex
                        items-center
                        gap-2
                        bg-red-500
                        px-4
                        py-2
                        rounded-full
                        hover:bg-red-600
                        transition
                      "
                    >
                      <FaGithub />
                      GitHub
                    </a>}

                  {/* Demo Button - Only appears if demo exists */}
                  {project.demo &&
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        flex
                        items-center
                        gap-2
                        border
                        border-white
                        px-4
                        py-2
                        rounded-full
                        hover:bg-white
                        hover:text-black
                        transition
                      "
                    >
                      <FaExternalLinkAlt />
                      Demo
                    </a>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
