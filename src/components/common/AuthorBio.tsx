import React from "react";
import { Mail, Globe, Twitter, Linkedin } from "lucide-react";

interface AuthorBioProps {
  name?: string;
  role?: string;
  bio?: string;
  avatar?: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    website?: string;
    email?: string;
  };
}

const AuthorBio: React.FC<AuthorBioProps> = ({
  name = "Sarah Mitchell",
  role = "Senior Content Writer & Tech Journalist",
  bio = "Sarah is an award-winning technology journalist with over 8 years of experience covering emerging tech, AI, and digital innovation. She's passionate about making complex topics accessible and inspiring readers to think critically about the future of technology.",
  avatar = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200&q=80",
  social = {
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    website: "https://example.com",
    email: "sarah@example.com",
  },
}) => {
  return (
    <div className="card-premium p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row gap-6">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <img
            src={avatar}
            alt={name}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover ring-4 ring-blue-100"
          />
        </div>

        {/* Info */}
        <div className="flex-1">
          <div className="mb-3">
            <h3 className="font-heading text-xl font-bold text-gray-900 mb-1">
              {name}
            </h3>
            <p className="text-sm text-blue-600 font-medium">{role}</p>
          </div>

          <p className="text-gray-600 leading-relaxed text-sm mb-4">{bio}</p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {social.twitter && (
              <a
                href={social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 hover:bg-blue-500 hover:text-white transition-all duration-300 group"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
            )}
            {social.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 hover:bg-blue-700 hover:text-white transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            )}
            {social.website && (
              <a
                href={social.website}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 hover:bg-purple-600 hover:text-white transition-all duration-300 group"
                aria-label="Website"
              >
                <Globe size={16} />
              </a>
            )}
            {social.email && (
              <a
                href={`mailto:${social.email}`}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-800 hover:text-white transition-all duration-300 group"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorBio;
