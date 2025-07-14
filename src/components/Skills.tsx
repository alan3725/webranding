import React, { useEffect, useRef, useState } from 'react';
import { Code, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';

interface SkillsProps {
  scrollY: number;
}

const Skills: React.FC<SkillsProps> = ({ scrollY }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedCategories, setAnimatedCategories] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      color: "from-blue-400 to-cyan-500",
      skills: ["React", "Vue.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "SASS"]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Development",
      color: "from-green-400 to-emerald-500",
      skills: ["Node.js", "Express.js", "Python", "Django", "PHP", "Laravel", "REST APIs", "GraphQL"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database & Cloud",
      color: "from-purple-400 to-violet-500",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "AWS", "Docker", "Kubernetes", "Firebase"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      color: "from-pink-400 to-rose-500",
      skills: ["React Native", "Flutter", "Ionic", "Progressive Web Apps", "Mobile UI/UX", "App Store Deployment"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design & Tools",
      color: "from-orange-400 to-amber-500",
      skills: ["Figma", "Adobe XD", "Photoshop", "UI/UX Design", "Responsive Design", "Prototyping"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "DevOps & Others",
      color: "from-cyan-400 to-teal-500",
      skills: ["Git", "GitHub Actions", "CI/CD", "Testing", "Agile", "Scrum", "Linux", "Nginx"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate categories one by one
          skillCategories.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedCategories(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * 200);
          });
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
    <section ref={sectionRef} id="skills" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`group transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                transform: `perspective(1000px) rotateY(${Math.sin(scrollY * 0.001 + index) * 2}deg)`
              }}
            >
              <div className="h-full bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="flex items-center mb-4">
                  <div className={`p-3 bg-gradient-to-r ${category.color} rounded-xl mr-4 group-hover:scale-110 transition-transform`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-cyan-400 transition-colors">
                    {category.title}
                  </h3>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className={`px-3 py-2 bg-white/5 backdrop-blur-sm rounded-lg text-sm font-medium text-center hover:bg-white/10 transition-all duration-300 transform ${
                        animatedCategories[index] 
                          ? 'opacity-100 translate-y-0' 
                          : 'opacity-0 translate-y-2'
                      }`}
                      style={{ 
                        transitionDelay: `${(index * 200) + (skillIndex * 50)}ms`
                      }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 3D Background Elements */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full blur-2xl"
            style={{ transform: `translate3d(0, ${scrollY * 0.1}px, 0) rotateX(${scrollY * 0.1}deg)` }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full blur-2xl"
            style={{ transform: `translate3d(0, ${scrollY * -0.1}px, 0) rotateY(${scrollY * 0.1}deg)` }}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;