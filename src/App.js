import { Nav } from './components/Nav';
import { Hero }   from './components/Hero';
import { Highlights } from './components/Highlights';
import { Testimonials } from './components/Testimonials';
import { About } from './components/About';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
}

export default App;
