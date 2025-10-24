import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppButton from "../common/AppButton";
import SearchModal from "../common/SearchModal";
import {
  LogIn,
  Search,
  Menu,
  X,
  Sparkles,
} from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <div
      className={`sticky top-0 z-50 transition-all duration-300 mb-5 ${
        isScrolled
          ? 'glass shadow-lg'
          : 'bg-white/95 backdrop-blur-sm'
      } p-3 md:p-5 rounded-2xl`}
    >
      <div className="flex items-center justify-between">
        {/* Left Section - Logo */}
        <div className="flex-shrink-0 group">
          <Link to={"/"} className="flex items-center gap-2">
            <img
              src="https://eumatrix.eu/assets/frontend/img/new-logo.png"
              alt="Logo"
              className="h-8 md:h-10 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <Sparkles className="hidden md:block text-blue-600 w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>

        {/* Desktop Right Section - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={openSearchModal}
            className="p-2.5 rounded-full hover:bg-gray-100 transition-all duration-200 group"
          >
            <Search
              className="text-gray-600 group-hover:text-blue-600 transition-colors"
              size={20}
            />
          </button>
          <AppButton
            text="Login"
            className="bg-gradient-to-r from-blue-950 to-blue-800 hover:from-blue-900 hover:to-blue-700 text-white !rounded-full px-4 lg:px-6 py-2.5 cursor-pointer text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            onClick={() => navigate("/login")}
            disabled={false}
            icon={<LogIn size={16} />}
          />
          <AppButton
            text="Register"
            className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white !rounded-full px-4 lg:px-6 py-2.5 cursor-pointer text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            onClick={() => navigate("/register")}
            disabled={false}
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={openSearchModal}
            className="p-2 rounded-full hover:bg-gray-100 transition-all duration-200"
          >
            <Search
              className="text-gray-600"
              size={20}
            />
          </button>
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-full hover:bg-gray-100 transition-all duration-200"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} className="text-gray-700" /> : <Menu size={24} className="text-gray-700" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Collapsible */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-gray-200 animate-fadeIn">
          {/* Mobile Action Buttons */}
          <div className="flex flex-col space-y-2">
            <AppButton
              text="Login"
              className="bg-gradient-to-r from-blue-950 to-blue-800 hover:from-blue-900 hover:to-blue-700 text-white !rounded-full px-6 py-2.5 cursor-pointer text-sm w-full font-medium transition-all duration-300 shadow-md"
              onClick={() => {
                navigate("/login");
                setIsMobileMenuOpen(false);
              }}
              disabled={false}
              icon={<LogIn size={16} />}
            />
            <AppButton
              text="Register"
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white !rounded-full px-6 py-2.5 cursor-pointer text-sm w-full font-medium transition-all duration-300 shadow-md"
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
