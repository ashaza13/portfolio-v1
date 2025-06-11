import React, { useEffect, useState } from 'react';

const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={`fixed pointer-events-none z-50 transition-opacity duration-300 hidden lg:block ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        left: mousePosition.x - 10,
        top: mousePosition.y - 10,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {/* Main orb */}
      <div className="w-6 h-6 bg-white/20 rounded-full blur-sm animate-pulse"></div>
      
      {/* Glow effect */}
      <div 
        className="absolute top-1/2 left-1/2 w-12 h-12 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-white/10 to-gray-300/10 rounded-full blur-xl"
        style={{
          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        }}
      ></div>
      
      {/* Small center dot */}
      <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
};

export default MouseFollower; 
 