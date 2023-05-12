import Hero from './components/Hero.js';
import Nav from './components/Nav.js';
import About from './components/About.js';
import Experience from './components/Experience.js';
import Work from './components/Work.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="bg-darkSlate font-abc">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
