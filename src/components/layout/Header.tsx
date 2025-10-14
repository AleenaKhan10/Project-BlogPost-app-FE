import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AppButton from "../common/AppButton";
import { Airplay, Anvil, Aperture, Award, LogIn } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-5 rounded-md flex items-center justify-between mb-5">
      {/* Left Section - Logo */}
      <div>
        {/* <strong className="text-2xl text-blue-900">Logo</strong> */}
        <Link to={"/"}>
          <img
            src="https://eumatrix.eu/assets/frontend/img/new-logo.png"
            alt=""
          />
        </Link>
      </div>

      {/* Middle Section - Nav Links */}
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

      {/* Right Section - Buttons */}
      <div className="flex items-center gap-3">
        <AppButton
          text="Login"
          className="bg-blue-950 hover:bg-blue-700 text-white !rounded-full px-6 py-2 cursor-pointer"
          onClick={() => navigate("/login")}
          disabled={false}
          icon={<LogIn size={18} />}
        />
        <AppButton
          text="Register"
          className="bg-red-500 hover:bg-red-700 text-white !rounded-full px-6 py-2 cursor-pointer"
          onClick={() => navigate("/register")}
          disabled={false}
        />
      </div>
    </div>
  );
};

export default Header;
