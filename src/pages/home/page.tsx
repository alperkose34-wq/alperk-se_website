import { useState, useEffect } from 'react';

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Portfolio',
      category: 'Professional',
      description: 'A comprehensive digital portfolio showcasing my industrial design projects, product designs, and creative work. Features detailed case studies and design process documentation.',
      image: 'https://readdy.ai/api/search-image?query=modern%20professional%20portfolio%20website%20design%20clean%20interface%20elegant%20layout%20showcasing%20projects%20and%20work%20samples%20minimalist%20aesthetic%20with%20organized%20sections%20and%20beautiful%20typography&width=800&height=600&seq=portfolio001&orientation=landscape',
      tags: ['Portfolio Design', 'UI/UX', 'Digital Presentation'],
      pdfUrl: 'https://drive.google.com/file/d/1OCnGFuY_3fB5iDkqZvLrrR9i1QtjukEP/view?usp=sharing'
    },
    {
      id: 2,
      title: 'Mobile Application Design',
      category: 'Business',
      description: 'User-centered mobile application interface design project focusing on intuitive user experience, modern visual design principles, and seamless interaction patterns for mobile platforms.',
      image: 'https://readdy.ai/api/search-image?query=modern%20mobile%20application%20interface%20design%20sleek%20smartphone%20screen%20showing%20elegant%20app%20interface%20with%20clean%20user%20experience%20contemporary%20mobile%20UI%20design%20professional%20presentation&width=800&height=600&seq=mobileapp001&orientation=landscape',
      tags: ['Mobile UI/UX', 'Interaction Design', 'User Research'],
      pdfUrl: 'https://drive.google.com/file/d/1MrbX49twHLuTSqd1_ud4zaab1qRvub5E/view?usp=sharing'
    },
    {
      id: 3,
      title: 'Production Internship',
      category: 'Academic',
      description: 'Hands-on industrial design internship experience in production environment, working on real product development, manufacturing processes, and collaborating with engineering teams on design-for-manufacturing projects.',
      image: 'https://readdy.ai/api/search-image?query=modern%20industrial%20factory%20production%20line%20with%20advanced%20manufacturing%20equipment%20automated%20assembly%20systems%20robotic%20arms%20working%20on%20products%20clean%20well-lit%20factory%20floor%20with%20machinery%20and%20production%20processes%20contemporary%20manufacturing%20facility&width=800&height=600&seq=factoryproduction002&orientation=landscape',
      tags: ['Product Development', 'Manufacturing', 'Design Engineering'],
      pdfUrl: 'https://drive.google.com/file/d/1fv1NgeL4vpG12jDohlSbHakKfFiVqTsu/view?usp=sharing'
    },
    {
      id: 4,
      title: 'R&D Internship',
      category: 'Academic',
      description: 'Research and development internship focusing on innovative product design, material exploration, prototyping new concepts, and investigating emerging design technologies and methodologies.',
      image: 'https://readdy.ai/api/search-image?query=advanced%20three%20dimensional%20printer%20creating%20prototype%20object%20layer%20by%20layer%20modern%20additive%20manufacturing%20technology%203D%20printing%20machine%20in%20action%20with%20detailed%20printed%20parts%20clean%20professional%20laboratory%20setting%20with%20innovative%20rapid%20prototyping%20equipment&width=800&height=600&seq=3dprinting002&orientation=landscape',
      tags: ['Design Research', 'Innovation', 'Prototyping'],
      pdfUrl: 'https://drive.google.com/file/d/1ztMop0u58nsgbgdAMENEHIGRLi9oKS8M/view?usp=sharing'
    },
    {
      id: 5,
      title: 'Graduation Thesis',
      category: 'Research',
      description: 'Comprehensive graduation thesis exploring advanced topics in industrial design, presenting original research on design methodology, user-centered design principles, and innovative product development approaches.',
      image: 'https://readdy.ai/api/search-image?query=academic%20research%20thesis%20document%20presentation%20clean%20professional%20layout%20with%20charts%20graphs%20and%20data%20visualization%20scholarly%20work%20display%20modern%20academic%20setting%20organized%20information%20design&width=800&height=600&seq=thesis001&orientation=landscape',
      tags: ['Design Research', 'Academic Study', 'Thesis Project'],
      pdfUrl: 'https://drive.google.com/file/d/1o1Wm0dfATzl3jMXx7ihnGBs7JfMF1-1k/view?usp=sharing'
    }
  ];

  const filters = ['All', 'Business', 'Professional', 'Academic', 'Research'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openPDF = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0f172a]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#f97316] to-[#ea580c] rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
              <img src="https://static.readdy.ai/image/4c02c0d9d10919294d753188e68165b5/e6d539770bdc0e7925f4af7271d500db.jpeg" alt="Alper" className="w-full h-full object-cover" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Alper</span>
          </div>
          <div className="flex gap-8">
            <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-[#f97316] transition-all duration-300 font-medium whitespace-nowrap cursor-pointer">Projects</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-[#f97316] transition-all duration-300 font-medium whitespace-nowrap cursor-pointer">About</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-[#f97316] transition-all duration-300 font-medium whitespace-nowrap cursor-pointer">Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#f97316] rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#ea580c] rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="text-center z-10 px-6 max-w-5xl mx-auto">
          <div className="mb-6 inline-block">
            <span className="px-6 py-2 bg-[#f97316]/20 text-[#f97316] rounded-full text-sm font-semibold border border-[#f97316]/30 whitespace-nowrap">
              Welcome to my website
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight">
            Hi, I'm <span className="bg-gradient-to-r from-[#f97316] to-[#ea580c] bg-clip-text text-transparent">Alper</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 font-light mb-6">Industrial Designer & Product Developer</p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
            Passionate about creating innovative products that blend form and function. Explore my design projects, research work, and creative journey in industrial design.
          </p>
          <button 
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-[#f97316]/50 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
          >
            View My Work
          </button>
          <div className="mt-16 animate-bounce cursor-pointer" onClick={() => scrollToSection('projects')}>
            <i className="ri-arrow-down-line text-5xl text-[#f97316]"></i>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Featured <span className="bg-gradient-to-r from-[#f97316] to-[#ea580c] bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A collection of my design research, professional work, and innovative projects that showcase my skills and creative vision
            </p>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-16 flex-wrap">
            {filters.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-8 py-3 rounded-xl transition-all duration-300 font-medium whitespace-nowrap cursor-pointer ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white shadow-lg shadow-[#f97316]/30'
                    : 'bg-[#1e293b] text-gray-300 hover:bg-[#334155] border border-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-[#1e293b] rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500 cursor-pointer border border-gray-700 hover:border-[#f97316] hover:shadow-2xl hover:shadow-[#f97316]/20"
                onClick={() => setSelectedProject(project)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b] via-transparent to-transparent z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-4 py-2 bg-[#f97316]/90 backdrop-blur-sm text-white rounded-lg text-sm font-semibold whitespace-nowrap shadow-lg">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[#f97316] transition-colors">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-5 line-clamp-2 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-[#0f172a] text-[#f97316] rounded-lg text-xs font-medium whitespace-nowrap border border-[#f97316]/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-[#1e293b]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-[#f97316] to-[#ea580c] bg-clip-text text-transparent">Me</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-4xl font-bold mb-6">Hello, I'm Alper</h3>
              <p className="text-gray-400 mb-6 leading-relaxed text-lg">
                I'm a passionate industrial designer with a strong background in product development and design research. 
                My journey includes academic excellence, professional internships in manufacturing and R&D, and innovative design projects.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                I specialize in user-centered design, product development, and design research. Throughout my career, 
                I've worked on diverse projects ranging from digital interfaces to physical products. I'm committed to 
                creating meaningful designs that improve people's lives through thoughtful problem-solving and innovative thinking.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-[#f97316]/10 to-[#ea580c]/10 p-6 rounded-2xl border border-[#f97316]/20">
                  <div className="text-5xl font-bold bg-gradient-to-r from-[#f97316] to-[#ea580c] bg-clip-text text-transparent mb-2">5+</div>
                  <div className="text-gray-400 font-medium">Design Projects</div>
                </div>
                <div className="bg-gradient-to-br from-[#f97316]/10 to-[#ea580c]/10 p-6 rounded-2xl border border-[#f97316]/20">
                  <div className="text-5xl font-bold bg-gradient-to-r from-[#f97316] to-[#ea580c] bg-clip-text text-transparent mb-2">2</div>
                  <div className="text-gray-400 font-medium">Internships</div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#f97316] to-[#ea580c] rounded-3xl blur-2xl opacity-20"></div>
                <div className="relative w-full h-[500px] rounded-3xl overflow-hidden border-4 border-[#f97316]/30">
                  <img
                    src="https://static.readdy.ai/image/4c02c0d9d10919294d753188e68165b5/e6d539770bdc0e7925f4af7271d500db.jpeg"
                    alt="Profile"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Let's <span className="bg-gradient-to-r from-[#f97316] to-[#ea580c] bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
            I'm always open to discussing new design projects, opportunities, or collaborations. Feel free to reach out and let's create something amazing together!
          </p>
          <div className="flex justify-center gap-6 mb-12">
            <a href="mailto:alperkose34@gmail.com" className="w-16 h-16 bg-[#1e293b] rounded-2xl flex items-center justify-center hover:bg-gradient-to-r hover:from-[#f97316] hover:to-[#ea580c] transition-all duration-300 border border-gray-700 hover:border-transparent hover:shadow-lg hover:shadow-[#f97316]/30 cursor-pointer group">
              <i className="ri-mail-line text-3xl text-gray-300 group-hover:text-white transition-colors"></i>
            </a>
            <a href="tel:05071714038" className="w-16 h-16 bg-[#1e293b] rounded-2xl flex items-center justify-center hover:bg-gradient-to-r hover:from-[#f97316] hover:to-[#ea580c] transition-all duration-300 border border-gray-700 hover:border-transparent hover:shadow-lg hover:shadow-[#f97316]/30 cursor-pointer group">
              <i className="ri-phone-line text-3xl text-gray-300 group-hover:text-white transition-colors"></i>
            </a>
            <a href="https://www.instagram.com/alperrrkose?igsh=MWtteXNoMjVpcXFjcA==" target="_blank" rel="noopener noreferrer" className="w-16 h-16 bg-[#1e293b] rounded-2xl flex items-center justify-center hover:bg-gradient-to-r hover:from-[#f97316] hover:to-[#ea580c] transition-all duration-300 border border-gray-700 hover:border-transparent hover:shadow-lg hover:shadow-[#f97316]/30 cursor-pointer group">
              <i className="ri-instagram-line text-3xl text-gray-300 group-hover:text-white transition-colors"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-gray-800 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 text-lg">2025</p>
          <p className="text-gray-500 mt-3">
            <a href="https://readdy.ai/?ref=logo" target="_blank" rel="noopener noreferrer" className="hover:text-[#f97316] transition-colors cursor-pointer font-medium">
              Alper Köse
            </a>
          </p>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-6 animate-fadeIn" onClick={() => setSelectedProject(null)}>
          <div className="bg-[#1e293b] rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-gray-700 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-96 w-full">
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b] via-transparent to-transparent z-10"></div>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover object-top"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-12 h-12 bg-[#0f172a]/90 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-[#f97316] transition-all duration-300 z-20 cursor-pointer border border-gray-700"
              >
                <i className="ri-close-line text-3xl"></i>
              </button>
            </div>
            <div className="p-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-5 py-2 bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white rounded-xl font-semibold whitespace-nowrap shadow-lg">
                  {selectedProject.category}
                </span>
              </div>
              <h2 className="text-5xl font-bold mb-6">{selectedProject.title}</h2>
              <p className="text-gray-400 mb-8 leading-relaxed text-lg">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-3 mb-10">
                {selectedProject.tags.map((tag, index) => (
                  <span key={index} className="px-5 py-2 bg-[#0f172a] text-[#f97316] rounded-xl text-sm font-medium whitespace-nowrap border border-[#f97316]/20">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 flex-wrap">
                <button 
                  onClick={() => openPDF(selectedProject.pdfUrl)}
                  className="px-8 py-4 bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white rounded-xl hover:shadow-2xl hover:shadow-[#f97316]/50 transition-all duration-300 flex items-center gap-3 whitespace-nowrap cursor-pointer font-semibold text-lg"
                >
                  <i className="ri-file-pdf-line text-xl"></i>
                  Download PDF
                </button>
                <button 
                  onClick={() => openPDF(selectedProject.pdfUrl)}
                  className="px-8 py-4 bg-[#1e293b] text-white rounded-xl hover:bg-[#2d4a6f] transition-colors flex items-center gap-3 whitespace-nowrap cursor-pointer border border-gray-700 font-semibold text-lg"
                >
                  <i className="ri-eye-line text-xl"></i>
                  View PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
