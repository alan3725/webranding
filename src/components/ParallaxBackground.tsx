import React from 'react';

interface ParallaxBackgroundProps {
  scrollY: number;
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({ scrollY }) => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 animate-gradient-xy" />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `translateY(${scrollY * (0.1 + Math.random() * 0.3)}px)`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Large floating elements */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-full blur-3xl"
        style={{
          transform: `translate3d(0, ${scrollY * 0.1}px, 0) rotateX(${scrollY * 0.05}deg)`,
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl"
        style={{
          transform: `translate3d(0, ${scrollY * -0.1}px, 0) rotateY(${scrollY * 0.05}deg)`,
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-orange-500/5 to-pink-500/5 rounded-full blur-3xl"
        style={{
          transform: `translate3d(-50%, -50%, 0) translate3d(0, ${scrollY * 0.15}px, 0) rotateZ(${scrollY * 0.05}deg)`,
        }}
      />
    </div>
  );
};

export default ParallaxBackground;