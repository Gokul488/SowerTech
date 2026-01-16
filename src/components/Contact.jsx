import { motion } from "framer-motion";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("success");
    setTimeout(() => setFormStatus(null), 5000);
    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="pt-16 pb-20 md:pt-20 md:pb-28 bg-white"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Let's Start a <span className="text-[#2ecc71]">Conversation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? We're here to help turn your ideas into reality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-10 order-2 md:order-1"
          >
            {/* Contact Details */}
            <div className="space-y-8">
              {/* Email */}
              <a
                href="mailto:info@sowertech.in"
                className="flex items-start group hover:text-[#2ecc71] transition-colors"
              >
                <div className="bg-[#2ecc71]/10 p-4 rounded-full mr-5 transition-all duration-300 group-hover:bg-[#2ecc71] group-hover:scale-110">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-[#2ecc71] group-hover:text-white transition-colors duration-300 text-xl"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Email Us</h4>
                  <p className="text-gray-600 group-hover:underline">
                    info@sowertech.in
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+919876543210"
                className="flex items-start group hover:text-[#2ecc71] transition-colors"
              >
                <div className="bg-[#2ecc71]/10 p-4 rounded-full mr-5 transition-all duration-300 group-hover:bg-[#2ecc71] group-hover:scale-110">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-[#2ecc71] group-hover:text-white transition-colors duration-300 text-xl"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Call Us</h4>
                  <p className="text-gray-600 group-hover:underline">
                    +91 98765 43210
                  </p>
                </div>
              </a>

              {/* Location */}
              <a
                href="https://maps.google.com/?q=Sivagiri,+Erode+District,+Tamil+Nadu,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start group hover:text-[#2ecc71] transition-colors"
              >
                <div className="bg-[#2ecc71]/10 p-4 rounded-full mr-5 transition-all duration-300 group-hover:bg-[#2ecc71] group-hover:scale-110">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="text-[#2ecc71] group-hover:text-white transition-colors duration-300 text-xl"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Visit Us</h4>
                  <p className="text-gray-600 group-hover:underline">
                    Sivagiri, Erode
                    <br />
                    Tamil Nadu, India
                  </p>
                </div>
              </a>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <iframe
                src="https://www.google.com/maps?q=Sivagiri,+Erode+District,+Tamil+Nadu,+India&output=embed"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SowerTech Location - Sivagiri, Erode"
              />
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-gray-50 p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100 order-1 md:order-2"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2ecc71]"
              />

              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2ecc71]"
              />

              <textarea
                rows={5}
                placeholder="Tell us about your project..."
                required
                className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2ecc71]"
              />

              <button
                type="submit"
                className="w-full bg-[#2ecc71] text-white py-4 rounded-lg font-semibold hover:bg-[#27d46a] transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-98"
              >
                <FontAwesomeIcon icon={faPaperPlane} />
                Send Message
              </button>

              {formStatus === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-green-600 font-medium mt-4 bg-green-50 py-3 rounded-lg"
                >
                  Thank you! We'll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
