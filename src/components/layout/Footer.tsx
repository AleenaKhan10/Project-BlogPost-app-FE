import { Airplay, Anvil, Aperture, Award } from "lucide-react";
import { Link } from "react-router-dom";
import Socials from "../common/Socials";

const Footer = () => {
  return (
    <div className="bg-white p-4 sm:p-5 rounded-md mt-5">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0">
        <div className="brand order-1 lg:order-1">
          <Link to={"/"}>
            <img
              src="https://eumatrix.eu/assets/frontend/img/new-logo.png"
              alt="EU Matrix Logo"
              className="h-8 sm:h-10 w-auto"
            />
          </Link>
        </div>
        
        <div className="links order-3 lg:order-2">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
            <Link
              to="#"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-700 transition-colors"
            >
              <Airplay size={16} />
              <span className="text-xs sm:text-sm font-medium">Policy Making</span>
            </Link>
            <Link
              to="#"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-700 transition-colors"
            >
              <Aperture size={16} />
              <span className="text-xs sm:text-sm font-medium">Parliament</span>
            </Link>
            <Link
              to="#"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-700 transition-colors"
            >
              <Anvil size={16} />
              <span className="text-xs sm:text-sm font-medium">Commission</span>
            </Link>
            <Link
              to="#"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-700 transition-colors"
            >
              <Award size={16} />
              <span className="text-xs sm:text-sm font-medium">Governments</span>
            </Link>
          </div>
        </div>
        
        <div className="socials order-2 lg:order-3">
          <Socials />
        </div>
      </div>
      <p className="text-center text-xs sm:text-sm mt-5 text-gray-600">
        Copyright © 2025 EU Matrix
      </p>
    </div>
  );
};

export default Footer;
