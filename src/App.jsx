import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

 // Main App component
const App = () => {
  // Tailwind CSS is assumed to be available
  // The structure and styling are designed to be responsive.
const [showResume, setShowResume] = useState(false);
 const [menuOpen, setMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // The file MUST be a PDF to be previewed in the browser.
  // Make sure you have a file named 'Nalla_Chandana_resume.pdf' in your public folder.
  const resumePdfUrl = "/Nalla_Chandana_resume.pdf";

  // Tailwind CSS is assumed to be available
  // The structure and styling are designed to be responsive.

  const handlePreviewClick = () => {
    setIsLoading(true);
    setError(null);
    setShowResume(true);
  };

  const handleClosePreview = () => {
    setShowResume(false);
    setIsLoading(false);
    setError(null);
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setError('Failed to load resume. Please ensure the PDF file exists and is in the public folder.');
  };

  return (
    <>
      <div className="bg-slate-900 min-h-screen text-white font-sans overflow-x-hidden relative">
      <div className="container mx-auto px-4 py-6">
        {/* Navigation */}
        <nav className="flex items-center justify-between py-4">
          <div className="text-3xl font-bold text-cyan-400">
            Portfolio
            </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-lg">
            <a href="#home" className="hover:text-cyan-400 transition duration-300">Home</a>
            <a href="#about" className="hover:text-cyan-400 transition duration-300">About me</a>
            <a href="#skills" className="hover:text-cyan-400 transition duration-300">Skills</a>
            <a href="#education" className="hover:text-cyan-400 transition duration-300">Education</a>
            <a href="#projects" className="hover:text-cyan-400 transition duration-300">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition duration-300">Contact me</a>
            <button 
              onClick={handlePreviewClick} 
              className="px-5 py-1 border-2 border-cyan-300 text-cyan-300 font-semibold rounded-full hover:bg-cyan-300 hover:text-slate-900 transition duration-300"
            >
              Check Resume
            </button>
          </div>
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-2xl" 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            &#9776;
          </button>
        </nav>

        {/* Mobile Menu Items */}
        {menuOpen && (
          <div className="md:hidden flex flex-col space-y-4 mt-4 text-lg bg-slate-800 p-4 rounded-lg">
            <a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-cyan-400 transition duration-300">Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-cyan-400 transition duration-300">About me</a>
            <a href="#skills" onClick={() => setMenuOpen(false)} className="hover:text-cyan-400 transition duration-300">Skills</a>
            <a href="#education" onClick={() => setMenuOpen(false)} className="hover:text-cyan-400 transition duration-300">Education</a>
            <a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-cyan-400 transition duration-300">Projects</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-cyan-400 transition duration-300">Contact me</a>
            <button 
              onClick={() => { handlePreviewClick(); setMenuOpen(false); }} 
              className="px-5 py-1 border-2 border-cyan-300 text-cyan-300 font-semibold rounded-full hover:bg-cyan-300 hover:text-slate-900 transition duration-300"
            >
              Check Resume
            </button>
          </div>
        )}

        {/* Hero Section */}
        <section id="home" className="flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-100px)] pt-16 md:pt-0">
          <div className="flex-1 text-center md:text-left p-4 md:p-8 ml-20">
            <h2 className="text-xl md:text-2xl font-light mb-2">
              Hello, I'm
            </h2>
            <h1 className="text-5xl md:text-5xl font-bold text-white mb-4">
              <span className="text-white">Nalla Chandana</span>
            </h1>
            <h3 className="text-xl md:text-2xl font-light">
              And I'm a{' '}
              <span className="font-semibold text-cyan-400">Full Stack Java Developer</span>
            </h3>
            <p className="text-lg text-gray-400 mt-6 max-w-lg mx-auto md:mx-0">
              {/* Objective from resume */}
              a dedicated Full Stack Java Developer aiming to leverage my expertise to deliver innovative solutions, grow as a global consultant, and contribute meaningfully to the success of progressive organizations."
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mt-8">
              {/* Social Media Icons (replace with your links) */}
              <a href="https://www.linkedin.com/in/chandananalla/" className="text-white p-3 rounded-full border border-gray-500 hover:bg-cyan-400 hover:border-cyan-400 transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucude-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://github.com/chandana193-code" className="text-white p-3 rounded-full border border-gray-500 hover:bg-cyan-400 hover:border-cyan-400 transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.26c3-1 6-4 6-8a5.13 5.13 0 0 0-1.87-3.69c.27-.72.27-1.5.07-2.31c0 0-1.2-1.2-3.6 0a12.18 12.18 0 0 0-6 0c-2.4-1.2-3.6 0-3.6 0a5.13 5.13 0 0 0 .07 2.31A5.13 5.13 0 0 0 4 10c0 4 3 7 6 8a4.8 4.8 0 0 0-1 3.26v4"/><path d="M9 18v-2.26c-1.2-.5-2.4-.8-3.6-.8"/></svg>
              </a>
              <a href="mailto:nallachandana193@gmail.com" className="text-white p-3 rounded-full border border-gray-500 hover:bg-cyan-400 hover:border-cyan-400 transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </a>
            </div>
            <a href="#about" className="inline-block mt-8 px-6 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-slate-900 transition duration-300">
              More About Me
            </a>
          </div>

          <div className="flex-1 flex justify-center p-4 md:p-8 relative">
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-cyan-280 shadow-[0_0_50px_10px_rgba(20,184,166,0.6),_0_0_80px_20px_rgba(167,139,250,0.4)]">
              <img
                src="img2.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

   {/* About Me Section */}
<section
  id="about"
  className="flex flex-col items-center justify-center py-12 bg-slate-900"
>
  <div className="text-center max-w-3xl px-4">
    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
      <span className="text-cyan-400">About Me</span>
    </h1>

    <h3 className="text-2xl md:text-3xl font-light mb-6">
      Full Stack Java Developer!
    </h3>

    <p className="text-lg text-gray-400 leading-relaxed">
      I’m Nalla Chandana, a passionate Full Stack Java Developer skilled in
      Core Java, Spring Boot, HTML, CSS, JavaScript, React JS, Hibernate,
      and MySQL. I have hands-on experience in designing RESTful APIs and
      working with microservices architecture, enabling scalable and efficient
      application development. My goal is to grow as a global consultant,
      leveraging my expertise to deliver innovative solutions and contribute to
      the success of progressive organizations. Outside of technology, I enjoy
      reading storybooks and cooking, which inspire my creativity and
      problem-solving mindset.
    </p>

    <a
      href="#projects"
      className="inline-block mt-8 px-6 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-slate-900 transition duration-300"
    >
      View My Projects
    </a>
  </div>
</section>



        {/* Skills Section */}
        <section id="skills" className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] pt-16 md:pt-0">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 text-center">
            <span className="text-cyan-400">Skills</span>
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl mx-auto">
            {/* Technical Skills Card */}
            <div className="bg-slate-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-4">Technical Skills</h3>
              <ul className="space-y-2 text-gray-400">
                <li><span className="font-semibold text-cyan-400">Programming Languages:</span> Java (OOP, Strings, Exception Handling, Multithreading, Collection Framework), JDBC, Hibernate, Spring Boot</li>
                <li><span className="font-semibold text-cyan-400">Web Technologies:</span> HTML, CSS, JavaScript, React JS, Servlets</li>
                <li><span className="font-semibold text-cyan-400">Databases:</span> MySQL</li>
                <li><span className="font-semibold text-cyan-400">Tools & Technologies:</span> Eclipse, MySQL Workbench, Visual Studio Code, Postman, Spring Tool Suite</li>
              </ul>
            </div>
            {/* Soft Skills Card */}
            <div className="bg-slate-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-4">Soft Skills</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Excellent problem-solving</li>
                <li>Attention to detail</li>
                <li>Team Collaboration</li>
                <li>Strong written and verbal communication</li>
              </ul>
            </div>
            {/* Strengths Card */}
            <div className="bg-slate-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-4">Strengths</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Hardworking, punctual and honest</li>
                <li>Matured enough to handle sensitive information professionally</li>
                <li>Can adapt easily to any environment</li>
                <li>Can mingle with anyone</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] pt-16 md:pt-0">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 text-center">
            <span className="text-cyan-400">Education</span>
          </h1>
          <div className="w-full max-w-3xl mx-auto space-y-8">
            {/* Education Item 1 */}
            <div className="bg-slate-800 p-8 rounded-lg shadow-lg">
              <div className="flex items-center space-x-4 mb-2">
                <div className="text-xl font-bold text-cyan-400">2024</div>
                <h3 className="text-xl font-semibold text-white">Master of Computer Science (MSc)</h3>
              </div>
              <p className="text-gray-400">
                Sri Venkateswara University, Tirupati
              </p>
              <p className="text-gray-400">
                Percentage: 77%
              </p>
            </div>
            {/* Education Item 2 */}
            <div className="bg-slate-800 p-8 rounded-lg shadow-lg">
              <div className="flex items-center space-x-4 mb-2">
                <div className="text-xl font-bold text-cyan-400">2022</div>
                <h3 className="text-xl font-semibold text-white">Bachelor of Science (B.Sc.) in Computer Science</h3>
              </div>
              <p className="text-gray-400">
                Sri Vikrama Simhapuri University, Nellore
              </p>
              <p className="text-gray-400">
                Percentage: 89%
              </p>
            </div>
            {/* Education Item 3 */}
            <div className="bg-slate-800 p-8 rounded-lg shadow-lg">
              <div className="flex items-center space-x-4 mb-2">
                <div className="text-xl font-bold text-cyan-400">2019</div>
                <h3 className="text-xl font-semibold text-white">Intermediate</h3>
              </div>
              <p className="text-gray-400">
                Board of Intermediate Education, Andhra Pradesh
              </p>
              <p className="text-gray-400">
                Percentage: 86%
              </p>
            </div>
             {/* Education Item 4 - S.S.C */}
    <div className="bg-slate-800 p-8 rounded-lg shadow-lg">
      <div className="flex items-center space-x-4 mb-2">
        <div className="text-xl font-bold text-cyan-400">2017</div>
        <h3 className="text-xl font-semibold text-white">Secondary School Certificate (S.S.C)</h3>
      </div>
      <p className="text-gray-400">
        Board of Secondary Education, Andhra Pradesh
      </p>
      <p className="text-gray-400">Percentage: 82%</p>
    </div>
  
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] pt-16 md:pt-0">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 text-center">
            <span className="text-cyan-400">Projects</span>
          </h1>
          <div className="w-full max-w-5xl mx-auto space-y-8">
            
            {/* Project Item 1 */}
            <div className="bg-slate-800 p-8 rounded-lg shadow-lg">
              <img
               src="/projectImg.jpg" // replace with your image path
               alt="Stunning Fashion Store"
               
                 className="w-full h-auto object-contain rounded-md mb-4"
              />
              <h3 className="text-2xl font-bold text-white mb-2">Stunning Fashion Store</h3>
              <p className="text-gray-400 mb-4">
                <span className="font-semibold text-cyan-400">Technologies:</span> React JS, JavaScript, HTML, CSS
              </p>
              <p className="text-gray-400">
                A fully responsive e-commerce fashion store with key UI components like product listings, category filtering, and a shopping cart. Focused on performance and a smooth user experience.
              </p>
            </div>
            {/* Project Item 2 */} 
            <div className="bg-slate-800 p-8 rounded-lg shadow-lg">
                <img
               src="/projectImg2.jpg" // replace with your image path
               alt="Stunning Fashion Store"
               
                 className="w-full h-auto object-contain rounded-md mb-4"
              />
              <h3 className="text-2xl font-bold text-white mb-2">Job Portal Website</h3>
              <p className="text-gray-400 mb-4">
                <span className="font-semibold text-cyan-400">Technologies:</span> HTML, CSS, JavaScript, React JS, Java, Spring Boot, MySQL
              </p>
              <p className="text-gray-400">
                A full-stack job portal system where users can register, browse job listings, and apply. It includes a backend with RESTful APIs, a MySQL database, and Spring Security for user data protection.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Me Section */}
        <section id="contact" className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] pt-16 md:pt-0">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 text-center">
            <span className="text-cyan-400">Contact Me</span>
          </h1>
          <div className="w-full max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
            <p className="text-gray-400 mb-4">
              I'm always open to new opportunities and collaborations. Feel free to reach out to me via email or connect with me on LinkedIn and GitHub.
            </p>
            <p className="text-lg">
                <span className="font-semibold text-cyan-400">Email:</span> nallachandana193@gmail.com
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="https://www.linkedin.com/in/chandananalla/" className="text-white p-3 rounded-full border border-gray-500 hover:bg-cyan-400 hover:border-cyan-400 transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://github.com/chandana193-code" className="text-white p-3 rounded-full border border-gray-500 hover:bg-cyan-400 hover:border-cyan-400 transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.26c3-1 6-4 6-8a5.13 5.13 0 0 0-1.87-3.69c.27-.72.27-1.5.07-2.31c0 0-1.2-1.2-3.6 0a12.18 12.18 0 0 0-6 0c-2.4-1.2-3.6 0-3.6 0a5.13 5.13 0 0 0 .07 2.31A5.13 5.13 0 0 0 4 10c0 4 3 7 6 8a4.8 4.8 0 0 0-1 3.26v4"/><path d="M9 18v-2.26c-1.2-.5-2.4-.8-3.6-.8"/></svg>
              </a>
              <a href="mailto:nallachandana193@gmail.com" className="text-white p-3 rounded-full border border-gray-500 hover:bg-cyan-400 hover:border-cyan-400 transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </a>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-slate-900 text-center py-6 border-t-2 border-slate-700">
          <div className="container mx-auto px-4">
            <div className="text-lg font-bold text-cyan-400">
              Portfolio
            </div>
            <p className="text-gray-400 mt-2">
              &copy; {new Date().getFullYear()} Nalla Chandana. All rights reserved.
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="https://www.linkedin.com/in/chandananalla/" className="text-white hover:text-cyan-400 transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://github.com/chandana193-code" className="text-white hover:text-cyan-400 transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.26c3-1 6-4 6-8a5.13 5.13 0 0 0-1.87-3.69c.27-.72.27-1.5.07-2.31c0 0-1.2-1.2-3.6 0a12.18 12.18 0 0 0-6 0c-2.4-1.2-3.6 0-3.6 0a5.13 5.13 0 0 0 .07 2.31A5.13 5.13 0 0 0 4 10c0 4 3 7 6 8a4.8 4.8 0 0 0-1 3.26v4"/><path d="M9 18v-2.26c-1.2-.5-2.4-.8-3.6-.8"/></svg>
              </a>
              <a href="mailto:nallachandana193@gmail.com" className="text-white hover:text-cyan-400 transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </a>
            </div>
          </div>
        </footer>
{/* Resume Preview Modal */}
        {showResume && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
            <div className="bg-slate-800 rounded-lg shadow-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
              <button
                onClick={handleClosePreview}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition duration-300 text-3xl font-bold"
              >
                &times;
              </button>
              <h2 className="text-3xl font-bold text-cyan-400 mb-4"> My Resume</h2>
              {isLoading && (
                <div className="flex justify-center items-center h-[60vh]">
                  <p className="text-lg text-gray-400 animate-pulse">Loading resume...</p>
                </div>
              )}
              {error && (
                <div className="flex justify-center items-center h-[60vh]">
                  <p className="text-lg text-red-400 text-center">{error}</p>
                </div>
              )}
              <div className={`w-full h-[60vh] ${isLoading || error ? 'hidden' : ''}`}>
                <iframe 
                  src={resumePdfUrl} 
                  title="Resume Preview"
                  onLoad={handleIframeLoad}
                  onError={handleIframeError}
                  className="w-full h-full border-none rounded-lg"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>    
    </>
  )
}

export default App
