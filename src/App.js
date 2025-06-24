import Hero from './components/Hero.js';
import Nav from './components/Nav.js';
import About from './sections/About.js';
import Skills from './sections/Skills.js';
import Experience from './sections/Experience.js';
import Projects from './sections/Projects.js';
import Contact from './sections/Contact.js';
import Footer from './components/Footer.js';
import MouseFollower from './components/MouseFollower.js';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-darkSlate min-h-screen font-abc relative overflow-hidden">
        {/* Mouse follower orb */}
        <MouseFollower />
        
        {/* Animated background lines - Palantir style */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <defs>
              <pattern id="palantirDots" patternUnits="userSpaceOnUse" width="20" height="20">
                <circle cx="2" cy="2" r="1" fill="rgba(59, 130, 246, 0.15)">
                  <animate attributeName="opacity" values="0.1;0.4;0.1" dur="4s" repeatCount="indefinite"/>
                </circle>
              </pattern>
              <linearGradient id="palantirGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#3b82f6', stopOpacity: '0.3'}} />
                <stop offset="50%" style={{stopColor: '#1e40af', stopOpacity: '0.2'}} />
                <stop offset="100%" style={{stopColor: '#1e3a8a', stopOpacity: '0.1'}} />
              </linearGradient>
            </defs>
            
            {/* Sophisticated curved lines */}
            <path 
              d="M-200,400 Q300,100 800,300 T1400,200" 
              stroke="url(#palantirGradient)" 
              strokeWidth="2" 
              fill="none"
              strokeDasharray="8,8"
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0;100,0;0,0"
                dur="12s"
                repeatCount="indefinite"
              />
            </path>
            
            <path 
              d="M-100,600 Q400,200 900,500 T1300,400" 
              stroke="url(#palantirDots)" 
              strokeWidth="1.5" 
              fill="none"
              strokeDasharray="5,10"
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0;-80,0;0,0"
                dur="15s"
                repeatCount="indefinite"
              />
            </path>
            
            <path 
              d="M200,100 Q600,400 1000,200 T1600,300" 
              stroke="rgba(59, 130, 246, 0.2)" 
              strokeWidth="1" 
              fill="none"
              strokeDasharray="12,6"
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0;50,0;0,0"
                dur="18s"
                repeatCount="indefinite"
              />
            </path>
            
            {/* Additional subtle geometric elements */}
            <circle 
              cx="300" 
              cy="200" 
              r="2" 
              fill="rgba(59, 130, 246, 0.3)"
            >
              <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite"/>
            </circle>
            
            <circle 
              cx="800" 
              cy="500" 
              r="1.5" 
              fill="rgba(30, 64, 175, 0.4)"
            >
              <animate attributeName="opacity" values="0.2;0.6;0.2" dur="4s" repeatCount="indefinite"/>
            </circle>
          </svg>
        </div>
        
        <div className="relative z-10">
          <Nav />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
