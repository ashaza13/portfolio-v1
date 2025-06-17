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
      <div className="bg-gradient-to-br from-warm-white via-warm-gray to-lightBlue min-h-screen font-abc relative overflow-hidden">
        {/* Mouse follower orb */}
        <MouseFollower />
        
        {/* Animated background elements */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <defs>
              <pattern id="movingDots" patternUnits="userSpaceOnUse" width="20" height="20">
                <circle cx="2" cy="2" r="1" fill="rgba(255,107,53,0.15)">
                  <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3s" repeatCount="indefinite"/>
                </circle>
              </pattern>
              <linearGradient id="warmGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#FF6B35', stopOpacity: 0.1}} />
                <stop offset="50%" style={{stopColor: '#FFB340', stopOpacity: 0.05}} />
                <stop offset="100%" style={{stopColor: '#4FC3F7', stopOpacity: 0.1}} />
              </linearGradient>
            </defs>
            
            {/* Soft floating shapes */}
            <circle cx="200" cy="150" r="80" fill="url(#warmGradient)" opacity="0.3">
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0;20,10;0,0"
                dur="8s"
                repeatCount="indefinite"
              />
            </circle>
            
            <circle cx="800" cy="300" r="120" fill="rgba(255,179,64,0.1)" opacity="0.5">
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0;-15,20;0,0"
                dur="10s"
                repeatCount="indefinite"
              />
            </circle>
            
            <circle cx="1000" cy="600" r="100" fill="rgba(79,195,247,0.1)" opacity="0.4">
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0;10,-15;0,0"
                dur="12s"
                repeatCount="indefinite"
              />
            </circle>
            
            {/* Curved gentle lines */}
            <path 
              d="M-200,400 Q300,100 800,300 T1400,200" 
              stroke="rgba(255,107,53,0.2)" 
              strokeWidth="2" 
              fill="none"
              strokeDasharray="5,5"
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0;50,0;0,0"
                dur="8s"
                repeatCount="indefinite"
              />
            </path>
            
            <path 
              d="M-100,600 Q400,200 900,500 T1300,400" 
              stroke="rgba(79,195,247,0.15)" 
              strokeWidth="2" 
              fill="none"
              strokeDasharray="3,7"
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0;-30,0;0,0"
                dur="10s"
                repeatCount="indefinite"
              />
            </path>
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
