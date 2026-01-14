import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faMobileScreenButton, faBrain, faCloud } from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    title: "Web Development",
    description:
      "High-performance, SEO-optimized, and conversion-focused websites that look great on every device.",
    features: [
      "React / JavaScript",
      "Fast loading ≤ 1.5s",
      "Core Web Vitals optimized",
      "Headless CMS integration",
    ],
    icon: faGlobe,
  },
  {
    title: "Mobile Applications",
    description:
      "Native & cross-platform apps loved by users and performing great on both iOS and Android.",
    features: [
      "Flutter",
      "iOS + Android from single codebase",
      "Offline support",
      "Push notifications",
    ],
    icon: faMobileScreenButton,
  },
  {
    title: "AI & Automation",
    description:
      "Smart solutions that automate repetitive tasks, analyze data and create real business value.",
    features: [
      "Custom AI agents",
      "LLM integration (GPT, Claude, Llama…)",
      "Process automation",
      "Predictive analytics",
    ],
    icon: faBrain,
  },
  {
    title: "Cloud & SaaS Architecture",
    description:
      "Scalable, secure and cost-efficient cloud infrastructure & modern SaaS products built to last.",
    features: [
      "AWS / GCP / Azure",
      "Serverless & Microservices",
      "CI/CD & GitOps",
      "Multi-tenant SaaS boilerplate",
    ],
    icon: faCloud,
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="pt-16 pb-24 md:pt-20 md:pb-32 bg-linear-to-b from-white to-gray-50/50"
    >
      <div className="container mx-auto px-5 md:px-8 max-w-7xl">
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-emerald-600 font-semibold tracking-wider uppercase mb-4"
          >
            What We Do Best
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent"
          >
            Our Core <span className="text-emerald-500">Services</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We build digital products that help ambitious companies grow faster,
            work smarter and outperform their competition.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white rounded-2xl p-7 md:p-8 shadow-md hover:shadow-2xl border border-gray-100/80 transition-all duration-400 overflow-hidden"
            >
              {/* Accent line */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-linear-to-r from-emerald-400 to-emerald-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400" />

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center mb-6 group-hover:bg-emerald-100 transition-colors">
                <FontAwesomeIcon
                  icon={service.icon}
                  className="text-emerald-600 text-2xl"
                />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2.5 text-sm text-gray-600">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5">
                    <span className="text-emerald-500 text-lg">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
