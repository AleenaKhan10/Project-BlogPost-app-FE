import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppButton from "../common/AppButton";
import SearchModal from "../common/SearchModal";
import {
  Airplay,
  Anvil,
  Aperture,
  Award,
  LogIn,
  Search,
  Menu,
  X,
} from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const openSearchModal = () => {
    setIsSearchModalOpen(true);
  };

  const closeSearchModal = () => {
    setIsSearchModalOpen(false);
  };

  return (
    <div className="bg-white p-3 md:p-5 rounded-md mb-5">
      <div className="flex items-center justify-between">
        {/* Left Section - Logo */}
        <div className="flex-shrink-0">
          <Link to={"/"}>
            <img
              src="https://eumatrix.eu/assets/frontend/img/new-logo.png"
              alt="Logo"
              className="h-8 md:h-10 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation - Hidden on mobile */}
        {/* <div className="hidden lg:flex items-center gap-6">
          <Link
            to="#"
            className="flex items-center gap-2 text-gray-700 hover:text-blue-700 transition-colors"
          >
            <Airplay size={18} />
            <span className="text-sm font-medium">Policy Making</span>
          </Link>
          <Link
            to="#"
            className="flex items-center gap-2 text-gray-700 hover:text-blue-700 transition-colors"
          >
            <Aperture size={18} />
            <span className="text-sm font-medium">Parliament</span>
          </Link>
          <Link
            to="#"
            className="flex items-center gap-2 text-gray-700 hover:text-blue-700 transition-colors"
          >
            <Anvil size={18} />
            <span className="text-sm font-medium">Commission</span>
          </Link>
          <Link
            to="#"
            className="flex items-center gap-2 text-gray-700 hover:text-blue-700 transition-colors"
          >
            <Award size={18} />
            <span className="text-sm font-medium">Governments</span>
          </Link>
        </div> */}

        {/* Desktop Right Section - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-3">
          <Search
            className="cursor-pointer text-gray-600 hover:text-blue-700 transition-colors"
            size={20}
            onClick={openSearchModal}
          />
          <AppButton
            text="Login"
            className="bg-blue-950 hover:bg-blue-700 text-white !rounded-full px-4 lg:px-6 py-2 cursor-pointer text-sm transition-colors"
            onClick={() => navigate("/login")}
            disabled={false}
            icon={<LogIn size={16} />}
          />
          <AppButton
            text="Register"
            className="bg-red-500 hover:bg-red-700 text-white !rounded-full px-4 lg:px-6 py-2 cursor-pointer text-sm transition-colors"
            onClick={() => navigate("/register")}
            disabled={false}
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <Search
            className="cursor-pointer text-gray-600 hover:text-blue-700 transition-colors"
            size={20}
            onClick={openSearchModal}
          />
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-gray-600 hover:text-blue-700 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Collapsible */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
          {/* Mobile Navigation Links */}
          {/* <div className="flex flex-col space-y-3 mb-4">
            <Link
              to="#"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-700 py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Airplay size={18} />
              <span className="text-sm font-medium">Policy Making</span>
            </Link>
            <Link
              to="#"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-700 py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Aperture size={18} />
              <span className="text-sm font-medium">Parliament</span>
            </Link>
            <Link
              to="#"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-700 py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Anvil size={18} />
              <span className="text-sm font-medium">Commission</span>
            </Link>
            <Link
              to="#"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-700 py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Award size={18} />
              <span className="text-sm font-medium">Governments</span>
            </Link>
          </div> */}

          {/* Mobile Action Buttons */}
          <div className="flex flex-col space-y-2">
            <AppButton
              text="Login"
              className="bg-blue-950 hover:bg-blue-700 text-white !rounded-full px-6 py-2 cursor-pointer text-sm w-full transition-colors"
              onClick={() => {
                navigate("/login");
                setIsMobileMenuOpen(false);
              }}
              disabled={false}
              icon={<LogIn size={16} />}
            />
            <AppButton
              text="Register"
              className="bg-red-500 hover:bg-red-700 text-white !rounded-full px-6 py-2 cursor-pointer text-sm w-full transition-colors"
              onClick={() => {
                navigate("/register");
                setIsMobileMenuOpen(false);
              }}
              disabled={false}
            />
          </div>
        </div>
      )}

      {/* Search Modal */}
      <SearchModal isOpen={isSearchModalOpen} onClose={closeSearchModal} />
    </div>
  );
};

export default Header;
