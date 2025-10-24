import React, { useState } from "react";
import { Share2, Twitter, Facebook, Linkedin, Link2, Check } from "lucide-react";

interface ShareButtonsProps {
  url?: string;
  title?: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ url, title }) => {
  const [copied, setCopied] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const shareUrl = url || window.location.href;
  const shareTitle = title || document.title;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareLinks = [
    {
      name: "Twitter",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
      color: "hover:bg-blue-400 hover:text-white",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: "hover:bg-blue-600 hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: "hover:bg-blue-700 hover:text-white",
    },
  ];

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="flex items-center gap-2 px-4 py-2.5 bg-white border-2 border-gray-200 rounded-full hover:border-blue-500 hover:text-blue-600 transition-all duration-300 shadow-sm hover:shadow-md group"
      >
        <Share2 size={18} className="group-hover:scale-110 transition-transform duration-300" />
        <span className="font-medium text-sm">Share</span>
      </button>

      {showMenu && (
        <div className="absolute top-full mt-2 right-0 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 min-w-[280px] animate-fadeIn z-50">
          <h4 className="font-semibold text-gray-900 mb-3 text-sm">Share this article</h4>

          <div className="space-y-2">
            {shareLinks.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 ${platform.color} border border-gray-100`}
              >
                <platform.icon size={18} />
                <span className="font-medium text-sm">{platform.name}</span>
              </a>
            ))}

            <button
              onClick={copyToClipboard}
              className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 hover:bg-gray-100 border border-gray-100"
            >
              {copied ? (
                <>
                  <Check size={18} className="text-green-600" />
                  <span className="font-medium text-sm text-green-600">Copied!</span>
                </>
              ) : (
                <>
                  <Link2 size={18} />
                  <span className="font-medium text-sm">Copy Link</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShareButtons;
