import Nav from './components/Nav.js';
import Hero from './sections/Hero.js';
import Systems from './sections/Systems.js';
import Record from './sections/Record.js';
import Projects from './sections/Projects.js';
import Stack from './sections/Stack.js';
import Contact from './sections/Contact.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <>
      <a
        href="#systems"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-paper focus:px-4 focus:py-2 focus:text-sm focus:text-ink"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <Systems />
        <Record />
        <Projects />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
