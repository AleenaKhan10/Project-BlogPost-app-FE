import React, { useState } from "react";
import { Mail, Send, Sparkles, CheckCircle2 } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail("");
    }, 1500);
  };

  if (isSubscribed) {
    return (
      <div className="card-premium p-8 text-center animate-scaleIn">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <CheckCircle2 className="text-green-600" size={32} />
        </div>
        <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
          You're All Set!
        </h3>
        <p className="text-gray-600 text-sm">
          Thank you for subscribing. Check your inbox for a confirmation email.
        </p>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden card-premium p-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Decorative Elements */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr from-pink-400/20 to-orange-400/20 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        {/* Icon */}
        <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white rounded-full shadow-sm">
          <Sparkles className="text-blue-600" size={18} />
          <span className="text-sm font-semibold text-gray-700">Newsletter</span>
        </div>

        {/* Heading */}
        <h3 className="font-heading text-2xl font-bold text-gray-900 mb-3">
          Stay in the Loop
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          Get the latest articles, insights, and exclusive content delivered
          straight to your inbox every week.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="relative">
            <Mail
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-200 text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3.5 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Subscribing...</span>
              </>
            ) : (
              <>
                <span>Subscribe Now</span>
                <Send size={18} />
              </>
            )}
          </button>
        </form>

        {/* Privacy Note */}
        <p className="text-xs text-gray-500 mt-4 text-center">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
