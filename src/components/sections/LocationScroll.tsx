import { useRef, useEffect, useState } from "react";

const sections = [
  {
    title: "What's the Problem?",
    description: "Methane emissions are a significant driver of climate change, responsible for approximately 30% of the global temperature increase since pre-industrial times.",
    icon: "🌍",
    extendedInfo: "With a warming potential about 80x that of CO₂ over two decades, methane's impact is both intense and immediate. Its short atmospheric lifetime means that cutting methane emissions can quickly reduce warming rates, making it a vital target for immediate climate action.",
    stat: "30% of global warming"
  },
  {
    title: "Our Mission",
    description: "We aim to develop and deploy AI onboard microcontrollers to identify and segment methane plumes using hyperspectral machine learning models.",
    icon: "🛰️",
    extendedInfo: "The goal is to enhance environmental monitoring and contribute to climate change mitigation by providing precise and real-time data on methane emissions. Our AI models can detect methane concentrations from space with unprecedented accuracy.",
    stat: "AI-powered detection"
  },
  {
    title: "Technology",
    description: "Using hyperspectral imagery and deep learning algorithms to track emissions from space in real-time.",
    icon: "🧠",
    extendedInfo: "Our system combines advanced satellite technology with cutting-edge machine learning to provide continuous monitoring of methane emissions across the globe. This enables rapid response to leaks and better environmental policy decisions.",
    stat: "Real-time monitoring"
  },
  {
    title: "Impact",
    description: "Immediate climate action through precise methane detection and monitoring capabilities.",
    icon: "📈",
    extendedInfo: "By identifying methane sources quickly and accurately, we can help reduce emissions faster than ever before. This technology has the potential to significantly accelerate global climate change mitigation efforts.",
    stat: "Immediate results"
  }
];

const LocationScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const sections = containerRef.current.children[1].children;
      const scrollPosition = window.scrollY - containerRef.current.offsetTop;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i] as HTMLElement;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop - sectionHeight / 2 &&
          scrollPosition < sectionTop + sectionHeight / 2
        ) {
          setActiveIndex(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-black" ref={containerRef}>
      {/* Center Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/20">
        <div className="sticky top-1/2 -translate-y-1/2">
          <div className="w-8 h-8 -ml-4 flex items-center justify-center text-2xl transition-all duration-300 transform">
            {sections[activeIndex].icon}
          </div>
        </div>
      </div>

      {/* Content Panels */}
      <div className="relative max-w-7xl mx-auto">
        {sections.map((section, index) => (
          <div
            key={section.title}
            className={`flex items-center min-h-screen ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div className="w-full max-w-xl p-8">
              <div 
                className={`group relative rounded-2xl overflow-hidden transition-all duration-500 ${
                  activeIndex === index ? "scale-110" : ""
                }`}
                style={{
                  transformOrigin: index % 2 === 0 ? "left center" : "right center",
                  transform: `${
                    activeIndex === index 
                      ? `scale(1.1) ${index % 2 === 0 ? "rotateY(0deg)" : "rotateY(0deg)"}` 
                      : `scale(1) ${index % 2 === 0 ? "rotateY(0deg)" : "rotateY(0deg)"}` 
                  }`,
                  perspective: "1000px"
                }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-900/50 to-blue-900/50 backdrop-blur-sm transition-all duration-300 group-hover:from-green-800/60 group-hover:to-blue-800/60" />
                  <div className="w-full h-[400px] flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-6xl mb-4">{section.icon}</div>
                      <h3 className="text-3xl font-bold text-white mb-3">
                        {section.title}
                      </h3>
                      <p className="text-white/90">
                        {section.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                {activeIndex === index && (
                  <div 
                    className="absolute inset-0 bg-black/90 backdrop-blur-md p-8 animate-fade-in"
                    style={{
                      transformOrigin: index % 2 === 0 ? "left center" : "right center"
                    }}
                  >
                    <div className="h-full flex flex-col justify-between">
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-4">
                          {section.title} {section.icon}
                        </h3>
                        <p className="text-white/90 mb-6">
                          {section.extendedInfo}
                        </p>
                      </div>
                      <div className="space-y-4">
                        <p className="text-2xl font-bold text-green-400">
                          {section.stat}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationScroll;
