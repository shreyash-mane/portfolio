import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Dissertation from './components/sections/Dissertation';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#09090b] text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Dissertation />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
