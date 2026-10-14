import { MotionConfig } from 'framer-motion';
import Nav from './components/Nav.js';
import Hero from './components/Hero.js';
import About from './sections/About.js';
import Skills from './sections/Skills.js';
import Experience from './sections/Experience.js';
import Projects from './sections/Projects.js';
import Contact from './sections/Contact.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:text-ink-950"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}

export default App;
