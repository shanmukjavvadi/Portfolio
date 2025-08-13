import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Download, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Mail, 
  Phone,
  Calendar,
  MapPin,
  Award,
  Code,
  Database,
  Globe,
  BookOpen,
  User,
  FolderOpen,
  Send,
  ChevronDown,
  Star
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would be handled by Formspree
    alert('Thank you for your message! I\'ll get back to you soon.');
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-md border-b border-gray-800 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-white text-black rounded-lg flex items-center justify-center font-bold text-lg">
                JSSV
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {[
                  { name: 'About', id: 'about' },
                  { name: 'Skills', id: 'skills' },
                  { name: 'Projects', id: 'projects' },
                  { name: 'Education', id: 'education' },
                  { name: 'Blog', id: 'blog' },
                  { name: 'Contact', id: 'contact' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? 'bg-white text-black'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
                <a
                  href="/resume.pdf"
                  download
                  className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors flex items-center gap-2"
                >
                  <Download size={16} />
                  Resume
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black border-t border-gray-800">
              {[
                { name: 'About', id: 'about' },
                { name: 'Skills', id: 'skills' },
                { name: 'Projects', id: 'projects' },
                { name: 'Education', id: 'education' },
                { name: 'Blog', id: 'blog' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                >
                  {item.name}
                </button>
              ))}
              <a
                href="/resume.pdf"
                download
                className="bg-white text-black px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200 transition-colors flex items-center gap-2 w-fit"
              >
                <Download size={16} />
                Resume
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8 animate-fadeIn">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                Javvadi Shanmuk <br />
                <span className="text-gray-300">Sai Vardhan</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 mb-6">
                FullStack | Data Scientist
              </p>
              <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto">
                Recent CSE (AI & ML) grad — building full-stack apps and learning Data Science.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition-all transform hover:scale-105 flex items-center gap-2"
              >
                View Projects
                <ChevronDown size={20} />
              </button>
              <a
                href="/resume.pdf"
                download
                className="border border-gray-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-all flex items-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I am a recent graduate from CSE (AI & ML) with a passion for full-stack development. 
                I have hands-on experience with Python and MySQL, and I'm learning Data Science to 
                grow my AI skills.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I enjoy building practical web apps that solve problems and learning deployment 
                and backend fundamentals. My goal is to contribute to innovative projects while 
                continuously expanding my technical skills.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="flex items-center gap-3">
                  <User className="text-gray-400" size={20} />
                  <span className="text-gray-300">Fresh Graduate</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="text-gray-400" size={20} />
                  <span className="text-gray-300">April 2025</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="text-gray-400" size={20} />
                  <span className="text-gray-300">CGPA 7.83</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-gray-400" size={20} />
                  <span className="text-gray-300">India</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gray-800 rounded-full flex items-center justify-center">
                <User size={120} className="text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills</h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gray-900 p-6 rounded-xl mb-4">
                <Code className="mx-auto mb-4 text-white" size={48} />
                <h3 className="text-xl font-semibold mb-4">Languages</h3>
                <div className="space-y-2">
                  <span className="inline-block bg-gray-800 px-3 py-1 rounded-full text-sm">Python</span>
                  <span className="inline-block bg-gray-800 px-3 py-1 rounded-full text-sm ml-2">JavaScript</span>
                  <span className="inline-block bg-gray-800 px-3 py-1 rounded-full text-sm">TypeScript</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gray-900 p-6 rounded-xl mb-4">
                <Globe className="mx-auto mb-4 text-white" size={48} />
                <h3 className="text-xl font-semibold mb-4">Frontend</h3>
                <div className="space-y-2">
                  <span className="inline-block bg-gray-800 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="inline-block bg-gray-800 px-3 py-1 rounded-full text-sm ml-2">Next.js</span>
                  <span className="inline-block bg-gray-800 px-3 py-1 rounded-full text-sm">Tailwind</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gray-900 p-6 rounded-xl mb-4">
                <Database className="mx-auto mb-4 text-white" size={48} />
                <h3 className="text-xl font-semibold mb-4">Database</h3>
                <div className="space-y-2">
                  <span className="inline-block bg-gray-800 px-3 py-1 rounded-full text-sm">MySQL</span>
                  <span className="inline-block bg-gray-800 px-3 py-1 rounded-full text-sm ml-2">PostgreSQL</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gray-900 p-6 rounded-xl mb-4">
                <BookOpen className="mx-auto mb-4 text-white" size={48} />
                <h3 className="text-xl font-semibold mb-4">Learning</h3>
                <div className="space-y-2">
                  <span className="inline-block bg-gray-800 px-3 py-1 rounded-full text-sm">Data Science</span>
                  <span className="inline-block bg-gray-800 px-3 py-1 rounded-full text-sm ml-2">AI/ML</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-8">
            <div className="bg-gray-900 rounded-xl p-8 hover:bg-gray-800 transition-colors">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="lg:w-1/2">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 h-64 rounded-lg flex items-center justify-center">
                    <FolderOpen size={80} className="text-white opacity-80" />
                  </div>
                </div>
                
                <div className="lg:w-1/2 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Image Steganography</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Web-based application to hide and extract secret messages from images using advanced 
                      steganography techniques. Built with modern web technologies for optimal performance 
                      and user experience.
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-900/50 text-blue-200 px-3 py-1 rounded-full text-sm">Next.js</span>
                    <span className="bg-blue-900/50 text-blue-200 px-3 py-1 rounded-full text-sm">TypeScript</span>
                    <span className="bg-blue-900/50 text-blue-200 px-3 py-1 rounded-full text-sm">Canvas API</span>
                    <span className="bg-blue-900/50 text-blue-200 px-3 py-1 rounded-full text-sm">Steganography</span>
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/shanmukjavvadi/Image-Steganography.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                    >
                      <Github size={20} />
                      Code
                    </a>
                    <a
                      href="https://imagesteganography7.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-black hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </a>
                  </div>
                </div>

                
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-8">
            <div className="bg-gray-900 rounded-xl p-8 hover:bg-gray-800 transition-colors">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="lg:w-1/2">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 h-64 rounded-lg flex items-center justify-center">
                    <FolderOpen size={80} className="text-white opacity-80" />
                  </div>
                </div>
                
                <div className="lg:w-1/2 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Image Steganography</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Web-based application to hide and extract secret messages from images using advanced 
                      steganography techniques. Built with modern web technologies for optimal performance 
                      and user experience.
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-900/50 text-blue-200 px-3 py-1 rounded-full text-sm">Next.js</span>
                    <span className="bg-blue-900/50 text-blue-200 px-3 py-1 rounded-full text-sm">TypeScript</span>
                    <span className="bg-blue-900/50 text-blue-200 px-3 py-1 rounded-full text-sm">Canvas API</span>
                    <span className="bg-blue-900/50 text-blue-200 px-3 py-1 rounded-full text-sm">Steganography</span>
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/shanmukjavvadi/Image-Steganography.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                    >
                      <Github size={20} />
                      Code
                    </a>
                    <a
                      href="https://imagesteganography7.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-black hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </a>
                  </div>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Education & Certifications</h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div className="bg-gray-900 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <Award className="text-white" size={32} />
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-white">
                    Computer Science Engineering (AI & ML)
                  </h4>
                  <p className="text-gray-300">Godavari Institute of Engineering & Technology</p>
                  <p className="text-gray-400">CGPA: 7.83 | Graduated: April 2025</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-gray-900 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <Star className="text-white" size={32} />
                <h3 className="text-2xl font-bold">Certifications</h3>
              </div>
              
              <div className="space-y-4">
                <div className="border border-gray-700 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Python Essentials 1
                  </h4>
                  <p className="text-gray-400 mb-3">Cisco Networking Academy</p>
                  <a
                    href="https://www.credly.com/badges/22c63e22-a3a2-4b91-a6d5-8cd7b2c60177/public_url"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-2 text-sm"
                  >
                    <ExternalLink size={16} />
                    View Credential
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Blog</h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
            <p className="text-gray-400 mt-4">Coming soon - Insights on development, AI, and tech</p>
          </div>

          <div className="text-center">
            <div className="bg-gray-900 rounded-xl p-12">
              <BookOpen className="mx-auto mb-4 text-gray-600" size={64} />
              <h3 className="text-xl font-semibold mb-4">Blog Posts Coming Soon</h3>
              <p className="text-gray-400">
                I'll be sharing my journey in full-stack development, AI/ML learning experiences, 
                and technical insights. Stay tuned!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
            <p className="text-gray-400 mt-4">
              I'm always open to discussing new opportunities and collaborations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 max-w-md mx-auto">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:shanmukjavvadi@gmail.com"
                    className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors"
                  >
                    <Mail className="text-gray-400" size={24} />
                    shanmukjavvadi@gmail.com
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shanmuk-javvadi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors"
                  >
                    <Linkedin className="text-gray-400" size={24} />
                    LinkedIn Profile
                  </a>
                  <a
                    href="https://github.com/shanmukjavvadi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors"
                  >
                    <Github className="text-gray-400" size={24} />
                    GitHub Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-white text-black rounded-lg flex items-center justify-center font-bold text-lg">
                JSSV
              </div>
              <div>
                <p className="text-white font-semibold">Javvadi Shanmuk Sai Vardhan</p>
                <p className="text-gray-400 text-sm">FullStack Developer</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/shanmukjavvadi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/shanmuk-javvadi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:shanmukjavvadi@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;