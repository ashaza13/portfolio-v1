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
      <div className="bg-black min-h-screen font-abc relative overflow-hidden">
        {/* Mouse follower orb */}
        <MouseFollower />
        
        {/* Animated background lines */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <defs>
              <pattern id="movingDots" patternUnits="userSpaceOnUse" width="20" height="20">
                <circle cx="2" cy="2" r="1" fill="rgba(255,255,255,0.1)">
                  <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3s" repeatCount="indefinite"/>
                </circle>
              </pattern>
            </defs>
            
            {/* Curved moving lines */}
            <path 
              d="M-200,400 Q300,100 800,300 T1400,200" 
              stroke="url(#movingDots)" 
              strokeWidth="2" 
              fill="none"
              strokeDasharray="5,5"
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0;100,0;0,0"
                dur="8s"
                repeatCount="indefinite"
              />
            </path>
            
            <path 
              d="M-100,600 Q400,200 900,500 T1300,400" 
              stroke="url(#movingDots)" 
              strokeWidth="2" 
              fill="none"
              strokeDasharray="3,7"
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0;-80,0;0,0"
                dur="10s"
                repeatCount="indefinite"
              />
            </path>
            
            <path 
              d="M200,100 Q600,400 1000,200 T1600,300" 
              stroke="url(#movingDots)" 
              strokeWidth="1" 
              fill="none"
              strokeDasharray="8,4"
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0;50,0;0,0"
                dur="12s"
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
