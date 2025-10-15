import { Airplay, Anvil, Aperture, Award } from "lucide-react";
import { Link } from "react-router-dom";
import Socials from "../common/Socials";

const Footer = () => {
  return (
    <div className="bg-white p-5 rounded-md">
      <div className="flex items-center justify-between ">
        <div className="brand">
          <Link to={"/"}>
            <img
              src="https://eumatrix.eu/assets/frontend/img/new-logo.png"
              alt=""
            />
          </Link>
        </div>
        <div className="links">
          <div className="flex items-center gap-6">
            <Link
              to="#"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-700"
            >
              <Airplay size={18} />
              <span className="text-sm font-medium">Policy Making</span>
            </Link>
            <Link
              to="#"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-700"
            >
              <Aperture size={18} />
              <span className="text-sm font-medium">Parliament</span>
            </Link>
            <Link
              to="#"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-700"
            >
              <Anvil size={18} />
              <span className="text-sm font-medium">Commission</span>
            </Link>
            <Link
              to="#"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-700"
            >
              <Award size={18} />
              <span className="text-sm font-medium">Governments</span>
            </Link>
          </div>
        </div>
        <div className="socials">
          <Socials />
        </div>
      </div>
      <p className="text-center !text-sm mt-5">Copyright © 2025 EU Matrix</p>
    </div>
  );
};

export default Footer;
