import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const projects = [
  {
    title: "AgriTech Dashboard",
    description:
      "Real-time farm monitoring & predictive analytics platform for modern agriculture",
    tags: ["React", "Node.js", "IoT", "Data Visualization"],
    image: "/portfolio/agritech-dashboard.jpg",
    link: "/projects/agritech-dashboard",
  },
  {
    title: "Smart Supply Chain",
    description:
      "Blockchain-based traceability solution for agricultural products",
    tags: ["Next.js", "Solidity", "Tailwind", "Web3"],
    image: "/portfolio/supply-chain.jpg",
    link: "/projects/smart-supply-chain",
  },
  {
    title: "CropCare Mobile App",
    description:
      "AI-powered crop disease detection & farmer advisory app",
    tags: ["Flutter", "TensorFlow Lite", "Firebase"],
    image: "/portfolio/cropcare-app.jpg",
    link: "/projects/cropcare-app",
  },
  {
    title: "E-commerce for Farmers",
    description:
      "Direct-to-consumer marketplace connecting farmers with buyers",
    tags: ["MERN Stack", "Stripe", "AWS"],
    image: "/portfolio/farmers-market.jpg",
    link: "/projects/farmers-market",
  },
];

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="pt-16 pb-20 md:pt-20 md:pb-28 bg-gray-50"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Our <span className="text-[#2ecc71]">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming agriculture through innovative technology solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-[#2ecc71] transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Link */}
                <Link
                  to={project.link}
                  className="inline-flex items-center gap-2 text-[#2ecc71] font-medium hover:text-[#27d46a] transition-colors group/link"
                >
                  View Project
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="group-hover/link:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-[#2ecc71] text-white px-10 py-5 rounded-xl font-semibold text-lg shadow-xl shadow-[#2ecc71]/25 hover:shadow-[#2ecc71]/40 hover:bg-[#27d46a] transition-all duration-300"
          >
            Start Your Project
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
