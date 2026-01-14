import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-[#0a192f] text-gray-300">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand & Description */}
          <div>
            <h3 className="text-3xl font-extrabold text-white mb-5">
              Sower<span className="text-[#2ecc71]">Tech</span>
            </h3>

            <p className="text-gray-400 mb-8 max-w-sm leading-relaxed">
              Planting the right technology seeds for sustainable digital growth.
            </p>

            <div className="flex space-x-6">
              {/* WhatsApp */}
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#25D366] transition-colors transform hover:scale-110"
              >
                <FontAwesomeIcon icon={faWhatsapp} size="lg" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#2ecc71] transition-colors transform hover:scale-110"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#2ecc71] transition-colors transform hover:scale-110"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-300">
              {["/", "/services", "/portfolio", "/about", "/contact"].map(
                (path, i) => (
                  <li key={i}>
                    <Link
                      to={path}
                      className="hover:text-[#2ecc71] transition-colors hover:translate-x-1 inline-block"
                    >
                      {["Home", "Services", "Portfolio", "About", "Contact"][i]}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="mr-4 mt-1 text-[#2ecc71]"
                />
                <div>
                  <p className="text-gray-200">info@sowertech.in</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Response within 24 hours
                  </p>
                </div>
              </li>

              <li className="flex items-center">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="mr-4 text-[#2ecc71]"
                />
                <p className="text-gray-200">+91 98765 43210</p>
              </li>

              <li className="flex items-start">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="mr-4 mt-1 text-[#2ecc71]"
                />
                <p className="text-gray-200">
                  Sivagiri, Tamil Nadu <br />
                  India
                </p>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">
              Stay Updated
            </h4>

            <p className="text-gray-400 mb-5 text-sm">
              Subscribe to our newsletter for the latest tech insights & updates
            </p>

            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                className="px-5 py-3 rounded-lg bg-gray-900 border border-gray-700 
                           focus:outline-none focus:border-[#2ecc71] focus:ring-2 
                           focus:ring-[#2ecc71]/30 text-white placeholder-gray-500"
              />

              <button
                type="submit"
                className="bg-[#2ecc71] text-white px-8 py-3 rounded-lg font-semibold 
                           hover:bg-[#27d46a] transition-all transform hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800/60 mt-16 pt-10 text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Sower Tech Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
