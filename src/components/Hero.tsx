import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

interface HeroProps {
  scrollY: number;
}

const Hero: React.FC<HeroProps> = ({ scrollY }) => {
  const parallaxOffset = scrollY * 0.5;

  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* 3D Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full blur-xl animate-pulse"
          style={{ transform: `translate3d(0, ${parallaxOffset * 0.3}px, 0) rotateX(${scrollY * 0.1}deg)` }}
        />
        <div 
          className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse"
          style={{ transform: `translate3d(0, ${parallaxOffset * -0.2}px, 0) rotateY(${scrollY * 0.1}deg)` }}
        />
        <div 
          className="absolute bottom-1/4 left-1/2 w-20 h-20 bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse"
          style={{ transform: `translate3d(0, ${parallaxOffset * 0.4}px, 0) rotateZ(${scrollY * 0.1}deg)` }}
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div 
          className="space-y-6 transform transition-all duration-1000"
          style={{ transform: `translate3d(0, ${parallaxOffset * 0.1}px, 0)` }}
        >
          <h1 className="text-6xl md:text-8xl font-bold leading-tight">
            <span className="block bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              Creative
            </span>
            <span className="block text-white mt-2">Developer</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences with modern technologies and innovative design
          </p>

          <div className="flex justify-center space-x-6 pt-8">
            <a
              href="#"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-12"
            >
              <Github size={24} />
            </a>
            <a
              href="#"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-12"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="#"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-12"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="pt-12">
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex flex-col items-center space-y-2 hover:text-cyan-400 transition-colors"
            >
              <span className="text-sm font-medium">Scroll to explore</span>
              <ChevronDown size={24} className="animate-bounce group-hover:animate-pulse" />
            </button>
          </div>
        </div>
      </div>

      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent)] animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;