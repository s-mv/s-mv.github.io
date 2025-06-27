import { useState } from 'preact/hooks'
import Header from './components/Header'
import Hero from './components/Hero'
import Socials from './components/Socials'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import About from './components/About'
import Footer from './components/Footer'

export default function App() {
  // State for section refs to allow smooth scrolling
  const [refs] = useState({
    hero: null,
    socials: null,
    skills: null,
    projects: null,
    experience: null,
    about: null
  })

  // Set refs for scrolling
  const setRef = (section, ref) => {
    refs[section] = ref
  }

  // Scroll to section
  const scrollToSection = (section) => {
    refs[section]?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="bg-black text-white min-h-screen font-mono">
      <Header scrollToSection={scrollToSection} />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Hero 
          setRef={(ref) => setRef('hero', ref)} 
          scrollToSection={scrollToSection} 
        />
        
        <section ref={(ref) => setRef('socials', ref)} className="my-16">
          <Socials />
        </section>
        
        <section ref={(ref) => setRef('skills', ref)} className="my-16">
          <h2 className="text-2xl font-bold mb-8">Tech Stack & Tools</h2>
          <Skills />
        </section>
        
        <section ref={(ref) => setRef('projects', ref)} className="my-16">
          <h2 className="text-2xl font-bold mb-8">Projects</h2>
          <Projects />
        </section>
        
        <section ref={(ref) => setRef('experience', ref)} className="my-16">
          <h2 className="text-2xl font-bold mb-8">Experience</h2>
          <Experience />
        </section>
        
        <section ref={(ref) => setRef('about', ref)} className="my-16">
          <h2 className="text-2xl font-bold mb-8">About Me</h2>
          <About />
        </section>
      </div>
      
      <Footer />
    </div>
  )
}
