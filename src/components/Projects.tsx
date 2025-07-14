import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Zap } from 'lucide-react';

interface ProjectsProps {
  scrollY: number;
}

const Projects: React.FC<ProjectsProps> = ({ scrollY }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features real-time inventory, payment processing, and admin dashboard.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "#",
      live: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, file sharing, and team communication features.",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Vue.js", "Express", "MongoDB", "Socket.io"],
      github: "#",
      live: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather application with interactive maps, forecasts, and location-based services using modern APIs.",
      image: "https://images.pexels.com/photos/531756/pexels-photo-531756.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "TypeScript", "OpenWeather API", "Mapbox"],
      github: "#",
      live: "#"
    },
    {
      title: "Social Media Analytics",
      description: "A comprehensive analytics dashboard for social media performance tracking with beautiful data visualizations.",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Python", "Django", "React", "D3.js"],
      github: "#",
      live: "#"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: `${index * 200}ms`,
                transform: `perspective(1000px) rotateX(${Math.sin(scrollY * 0.001 + index) * 1}deg)`
              }}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.github}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href={project.live}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium hover:bg-white/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full hover:from-purple-600 hover:to-cyan-600 transition-colors group">
            <Zap size={20} className="group-hover:animate-pulse" />
            <span className="font-semibold">View More on GitHub</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;