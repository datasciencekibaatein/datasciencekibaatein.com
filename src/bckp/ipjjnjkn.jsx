import React, { useState } from 'react';
import { Sun, Moon, Youtube, Instagram, Twitter, Mail, Send, Database, BarChart3, Code, Cpu, GitBranch, LineChart, PieChart, Terminal, Layers, Box, TrendingUp, Binary, X } from 'lucide-react';

export default function LandingPage() {
  const [isDark, setIsDark] = useState(true);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showContact, setShowContact] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);

  const handleSubmit = () => {
    if (email && message) {
      alert(`Message sent!\nEmail: ${email}\nMessage: ${message}`);
      setEmail('');
      setMessage('');
      setShowContact(false);
    }
  };

  const socialLinks = [
    { icon: Youtube, label: 'YouTube', url: 'https://www.youtube.com/@datasciencekibaatein', color: 'hover:text-red-500' },
    { icon: Instagram, label: 'Instagram', url: '#', color: 'hover:text-pink-500' },
    { icon: Twitter, label: 'Twitter', url: '#', color: 'hover:text-blue-400' },
    { icon: Mail, label: 'Email', url: 'mailto:datasciencekibaatein@example.com', color: 'hover:text-green-500' }
  ];

  const bgIcons = [
    Database, BarChart3, Code, Cpu, GitBranch, LineChart, 
    PieChart, Terminal, Layers, Box, TrendingUp, Binary,
    Database, BarChart3, Code, Cpu, GitBranch, LineChart,
    PieChart, Terminal, Layers, Box, TrendingUp, Binary,
    Database, BarChart3, Code, Cpu, GitBranch, LineChart,
    PieChart, Terminal, Layers, Box, TrendingUp, Binary,
    Database, BarChart3, Code, Cpu, GitBranch, LineChart,
    PieChart, Terminal, Layers, Box, TrendingUp, Binary,
    Database, BarChart3, Code, Cpu, GitBranch, LineChart,
    PieChart, Terminal, Layers, Box, TrendingUp, Binary,
    Database, BarChart3, Code, Cpu
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 relative overflow-hidden ${isDark ? 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900' : 'bg-gray-50'}`}>
      {/* Background Pattern with Icons */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 md:p-8">
          {bgIcons.map((Icon, i) => (
            <div
              key={i}
              className={`flex items-center justify-center ${isDark ? 'text-white' : 'text-gray-800'}`}
              style={{ 
                animation: `float ${3 + (i % 3)}s ease-in-out infinite`,
                animationDelay: `${i * 0.1}s`
              }}
            >
              <Icon size={32} className="sm:w-10 sm:h-10 md:w-12 md:h-12" strokeWidth={1.5} />
            </div>
          ))}
        </div>
      </div>

      {/* Top Right Controls */}
      <div className="fixed top-4 right-4 sm:top-6 sm:right-6 flex items-center space-x-3 z-50">
        {/* Contact Button */}
        <button
          onClick={() => setShowContact(true)}
          className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
            isDark 
              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700' 
              : 'bg-gradient-to-r from-blue-600 to-purple-700 text-white hover:from-blue-700 hover:to-purple-800'
          } shadow-lg`}
        >
          Contact
        </button>
  {/* Theme Toggle */}
  <button
    onClick={toggleTheme}
    className={`p-2 sm:p-3 rounded-full transition-all duration-300 ${
      isDark ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-white text-gray-800 hover:bg-gray-100'
    } shadow-lg`}
  >
    {isDark ? <Sun size={20} className="sm:w-6 sm:h-6" /> : <Moon size={20} className="sm:w-6 sm:h-6" />}
  </button>

  
</div>

      {/* Main Content */}
      <div className={`relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-8 py-12 transition-all duration-300 ${showContact ? 'blur-sm' : ''}`}>
        <div className="text-center space-y-6 sm:space-y-8 max-w-4xl w-full">
          {/* Main Title */}
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Datascience ki Baatein
            </span>
          </h1>

          {/* Subtitle */}
          <p className={`text-lg sm:text-xl md:text-2xl transition-colors duration-300 px-4 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Soon we launch it...
          </p>

          {/* Animated Dots */}
          <div className="flex justify-center space-x-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${isDark ? 'bg-blue-500' : 'bg-blue-600'}`}
                style={{
                  animation: 'bounce 1.5s ease-in-out infinite',
                  animationDelay: `${i * 0.2}s`
                }}
              />
            ))}
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 pt-6 sm:pt-8 px-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 sm:p-4 rounded-full transition-all duration-300 transform hover:scale-110 ${
                  isDark ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-700'
                } ${social.color} shadow-lg hover:shadow-xl`}
                aria-label={social.label}
              >
                <social.icon size={24} className="sm:w-7 sm:h-7" />
              </a>
            ))}
          </div>

          {/* Email Display */}
          <div className={`mt-6 sm:mt-8 p-3 sm:p-4 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg inline-block mx-4 max-w-full`}>
            <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Get in touch:
            </p>
            <a
              href="mailto:datasciencekibaatein@example.com"
              className={`text-sm sm:text-base md:text-lg font-semibold ${isDark ? 'text-blue-400' : 'text-blue-600'} hover:underline break-all`}
            >
              datasciencekibaatein@gmail.com
            </a>
          </div>

          
        </div>

        {/* Footer */}
        <div className={`absolute bottom-4 sm:bottom-6 text-xs sm:text-sm px-4 text-center ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
          © 2025 Datascience ki Baatein. All rights reserved.
        </div>
      </div>

      {/* Contact Modal */}
      {showContact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowContact(false)}
          ></div>
          
          <div className={`relative ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8 animate-slideIn`}>
            {/* Close Button */}
            <button
              onClick={() => setShowContact(false)}
              className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-300 hover:rotate-90 ${
                isDark ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <X size={20} />
            </button>

            <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Contact Us
            </h2>

            <div className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg ${
                    isDark 
                      ? 'bg-gray-700 text-white placeholder-gray-400' 
                      : 'bg-gray-100 text-gray-900 placeholder-gray-500'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg resize-none ${
                    isDark 
                      ? 'bg-gray-700 text-white placeholder-gray-400' 
                      : 'bg-gray-100 text-gray-900 placeholder-gray-500'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
              </div>
              <button
                onClick={handleSubmit}
                className={`w-full py-2.5 sm:py-3 text-sm sm:text-base rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 ${
                  isDark 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-blue-700 hover:bg-blue-800 text-white'
                }`}
              >
                <span>Send Message</span>
                <Send size={16} className="sm:w-4.5 sm:h-4.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}