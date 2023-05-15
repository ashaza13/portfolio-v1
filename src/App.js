import Hero from './components/Hero.js';
import Nav from './components/Nav.js';
import About from './sections/About.js';
import Experience from './sections/Experience.js';
import Work from './sections/Work.js';
import Contact from './sections/Contact.js';
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
