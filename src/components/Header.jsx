export default function Header({ scrollToSection }) {
  return (
    <header className="sticky top-0 bg-black/80 backdrop-blur-sm z-10 border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-4xl">
        <div className="text-lg font-semibold">{'<smv />'}</div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <button 
                onClick={() => scrollToSection('projects')} 
                className="hover:text-orange-800 transition-colors"
              >
                Projects
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('skills')} 
                className="hover:text-orange-800 transition-colors"
              >
                Skills
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('experience')} 
                className="hover:text-orange-800 transition-colors"
              >
                Experience
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('about')} 
                className="hover:text-orange-800 transition-colors"
              >
                About
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
