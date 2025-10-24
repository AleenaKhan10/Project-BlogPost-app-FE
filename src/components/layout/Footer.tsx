import { Mail, MapPin, Phone, ArrowRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import Socials from "../common/Socials";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 rounded-3xl mt-12 overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 p-8 sm:p-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to={"/"} className="inline-block">
              <img
                src="https://eumatrix.eu/assets/frontend/img/new-logo.png"
                alt="EU Matrix Logo"
                className="h-10 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Your trusted source for insights, news, and perspectives on policy
              making, parliament, and governance across Europe.
            </p>
            <Socials />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-bold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["About Us", "Our Team", "Careers", "Press Kit"].map((item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                    />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-heading text-lg font-bold text-white mb-4">
              Categories
            </h4>
            <ul className="space-y-3">
              {[
                "Policy Making",
                "Parliament",
                "Commission",
                "Governments",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                    />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-bold text-white mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin size={18} className="text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Brussels, Belgium</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Mail size={18} className="text-blue-400 flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:contact@eumatrix.eu"
                  className="hover:text-white transition-colors duration-200"
                >
                  contact@eumatrix.eu
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Phone size={18} className="text-blue-400 flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+32123456789"
                  className="hover:text-white transition-colors duration-200"
                >
                  +32 1 234 5678
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700/50 mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p className="flex items-center gap-1.5">
            © {currentYear} EU Matrix. Made with{" "}
            <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" />{" "}
            in Europe
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <Link
              to="#"
              className="hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              to="#"
              className="hover:text-white transition-colors duration-200"
            >
              Terms of Service
            </Link>
            <Link
              to="#"
              className="hover:text-white transition-colors duration-200"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
