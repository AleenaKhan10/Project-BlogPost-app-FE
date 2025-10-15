import { Dribbble, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import React from "react";

const Socials = () => {
  return (
    <div className="social-media mt-5 flex items-center justify-center gap-5">
      <Facebook
        size={18}
        className="hover:text-blue-600 transition-all cursor-pointer"
      />
      <Instagram
        size={18}
        className="hover:text-blue-600 transition-all cursor-pointer"
      />
      <Dribbble
        size={18}
        className="hover:text-blue-600 transition-all cursor-pointer"
      />
      <Youtube
        size={18}
        className="hover:text-blue-600 transition-all cursor-pointer"
      />
      <Linkedin
        size={18}
        className="hover:text-blue-600 transition-all cursor-pointer"
      />
    </div>
  );
};

export default Socials;
