import { Dribbble, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import React from "react";

const Socials = () => {
  return (
    <div className="social-media mt-5 flex items-center justify-center gap-5">
      <Facebook size={18} />
      <Instagram size={18} />
      <Dribbble size={18} />
      <Youtube size={18} />
      <Linkedin size={18} />
    </div>
  );
};

export default Socials;
