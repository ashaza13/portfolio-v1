import Hero from './components/Hero.js';
import Nav from './components/Nav.js';
import About from './components/About.js';
import Experince from './components/Experience.js';

function App() {
  return (
    <div className="bg-darkSlate font-abc">
      <Nav />
      <Hero />
      <About />
      <Experince />
    </div>
  );
}

export default App;
