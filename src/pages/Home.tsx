import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { Education } from '../components/Education';
import { Certifications } from '../components/Certifications';
import { Github } from '../components/Github';
import { Contact } from '../components/Contact';

export function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Github />
      <Contact />
    </main>
  );
}
