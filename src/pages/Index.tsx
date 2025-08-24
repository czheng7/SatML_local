
import { useEffect, useState } from "react";
import TrustBadges from "@/components/hero/TrustBadges";
import ChromaticSmoke from "@/components/hero/ChromaticSmoke";
import LocationScroll from "@/components/sections/LocationScroll";

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-b from-transparent to-gray-900 overflow-hidden">
        <ChromaticSmoke />
        
        {/* Content Container */}
        <div className="relative z-10 min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            {/* Badge */}
            <div className={`transform transition-all duration-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
              <p className="text-sm text-green-400 font-medium">
                Real-time satellite monitoring. Global coverage.
              </p>
            </div>
            
            {/* Main Heading */}
            <h1 
              className={`text-4xl sm:text-5xl md:text-6xl font-bold text-white transform transition-all duration-700 delay-100 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ textShadow: "0 2px 4px rgba(0,0,0,0.2)" }}
            >
              Monitor Earth. Detect Methane. Save the Planet.
            </h1>
            
            {/* Subtext */}
            <p className={`mt-4 text-lg text-gray-300 transform transition-all duration-700 delay-150 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
              Leveraging hyper-spectral imagery and deep learning to track emissions from space.
            </p>
            
            {/* CTA Fields */}
            <div className={`flex gap-4 mt-6 transform transition-all duration-700 delay-175 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
              <input
                type="text"
                placeholder="Lat/Lon or Region (e.g. 53.5°N, 113.5°W)"
                className="bg-zinc-800 text-white p-3 rounded-md w-full border border-zinc-700 focus:border-green-500 focus:outline-none transition-colors"
              />
              <input
                type="text"
                placeholder="Date Range (e.g. July 2025)"
                className="bg-zinc-800 text-white p-3 rounded-md w-full border border-zinc-700 focus:border-green-500 focus:outline-none transition-colors"
              />
              <button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-3 rounded-md transition-colors">
                Run Inference
              </button>
            </div>
            
            {/* Description */}
            <p className={`text-gray-400 mt-4 transform transition-all duration-700 delay-200 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
              SatML is an AI research project detecting methane emissions using hyperspectral satellite imagery and machine learning.
            </p>
            
            {/* Search Component */}
            <div className={`transform transition-all duration-700 delay-300 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg w-full max-w-3xl mx-auto">
                <div className="flex gap-4">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="Lat/Lon or Region (e.g. 53.5°N, 113.5°W)"
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/20 border border-white/10 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-all text-white placeholder:text-white/70"
                    />
                    <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-400" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.35-4.35"></path>
                    </svg>
                  </div>
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="Date Range (e.g. July 2025)"
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/20 border border-white/10 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-all text-white placeholder:text-white/70"
                    />
                    <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-400" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                  </div>
                  <button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-3 rounded-md transition-colors flex items-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.35-4.35"></path>
                    </svg>
                    Run Inference
                  </button>
                </div>
              </div>
            </div>
            
            {/* Trust Badges */}
            <div className={`transform transition-all duration-700 delay-400 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
              <TrustBadges />
            </div>
          </div>
        </div>
      </div>

      {/* Location Scroll Section */}
      <LocationScroll />
    </div>
  );
};

export default Index;
