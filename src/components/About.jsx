import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faBullseye,
  faBolt,
  faHandshake,
  faCode,
  faChartLine,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

const coreValues = [
  {
    icon: faRocket,
    title: "Relentless Innovation",
    description:
      "We don't follow trends — we help create them by continuously exploring emerging technologies and new approaches.",
  },
  {
    icon: faBullseye,
    title: "Business-first Mindset",
    description:
      "Every technical decision is made with one goal in mind: delivering measurable business impact and ROI.",
  },
  {
    icon: faBolt,
    title: "Velocity Without Compromise",
    description:
      "We deliver fast — but never at the expense of quality, security, performance or maintainability.",
  },
  {
    icon: faHandshake,
    title: "True Partnership",
    description:
      "We succeed only when you succeed. Long-term relationships and shared growth are at the core of how we work.",
  },
];

const strengths = [
  { text: "Modern Stack", icon: faCode },
  { text: "Performance Obsessed", icon: faBolt },
  { text: "Security First", icon: faShieldHalved },
  { text: "Data-Driven Growth", icon: faChartLine },
];

export default function About() {
  return (
    <section
      id="about"
      className="pt-16 pb-24 md:pt-20 md:pb-32 bg-linear-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Subtle background accent */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-7xl relative">
        {/* Hero Text Block */}
        <div className="text-center max-w-4xl mx-auto mb-20 md:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-emerald-600 font-semibold tracking-wider uppercase mb-5"
          >
            Who We Are
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight"
          >
            We Build The Future <br className="hidden sm:block" />
            <span className="text-emerald-500">Your Business Deserves</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            className="mt-8 text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
          >
            Sower Tech Solutions crafts <strong>high-performance</strong>,{" "}
            <strong>future-ready</strong> digital products that help ambitious
            companies scale efficiently, delight users, and stay ahead in
            competitive markets.
          </motion.p>
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-24">
          {coreValues.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-emerald-200/60 transition-all duration-400"
            >
              <div className="bg-emerald-50/70 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-100 transition-colors">
                <FontAwesomeIcon
                  icon={value.icon}
                  className="text-emerald-600 text-2xl"
                />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
                {value.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quick Strengths Bar */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-20 md:mb-28">
          {strengths.map((item, i) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 + 0.3 }}
              className="flex items-center gap-2.5 bg-white/70 backdrop-blur-sm px-5 py-3 rounded-full border border-gray-200 shadow-sm"
            >
              <FontAwesomeIcon
                icon={item.icon}
                className="text-emerald-600 text-sm"
              />
              <span className="font-medium text-gray-800">{item.text}</span>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-5xl mx-auto bg-linear-to-br from-white to-gray-50/80 rounded-3xl p-10 md:p-16 lg:p-20 shadow-2xl border border-gray-100/80 relative overflow-hidden"
        >
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />

          <div className="relative text-center">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10">
              Our <span className="text-emerald-600">North Star</span>
            </h3>

            <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-800 leading-relaxed max-w-4xl mx-auto italic">
              “We plant the right technological seeds today
              <br className="hidden sm:block" />
              so tomorrow your business grows stronger, faster, and more
              profitably — sustainably.”
            </blockquote>

            <p className="mt-10 text-lg text-gray-600 font-medium">
              — The Sower Tech Philosophy
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
