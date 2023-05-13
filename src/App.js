import Hero from './components/Hero.js';
import Nav from './components/Nav.js';
import About from './components/About.js';
import Experience from './components/Experience.js';
import Work from './components/Work.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-darkSlate font-abc">
        <Nav />
        <Hero />
        <About />
        <Experience />
        <Work />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
