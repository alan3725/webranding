import React from 'react';
import { 
  Github, 
  Linkedin,
  Heart,
  ExternalLink,
  Code,
  Briefcase,
  User,
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { id: 'hero', label: 'Home', icon: <User size={16} /> },
    { id: 'about', label: 'About', icon: <User size={16} /> },
    { id: 'skills', label: 'Skills', icon: <Code size={16} /> },
    { id: 'projects', label: 'Projects', icon: <Briefcase size={16} /> },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={20} />,
      href: 'https://github.com/DanaMaulana',
      color: 'hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      href: 'https://www.linkedin.com/in/danamaulana/',
      color: 'hover:text-blue-400'
    },
    // {
    //   name: 'Twitter',
    //   icon: <Twitter size={20} />,
    //   href: 'https://x.com/DanaMaulanaDev',
    //   color: 'hover:text-sky-400'
    // },
    // {
    //   name: 'Instagram',
    //   icon: <Instagram size={20} />,
    //   href: 'https://instagram.com',
    //   color: 'hover:text-pink-400'
    // }
  ];

  const contactInfo = [
    {
      icon: <Linkedin size={18} />,
      label: 'LinkedIn',
      value: 'Dana Maulana',
      href: 'https://www.linkedin.com/in/danamaulana/'
    },
    // {
    //   icon: <Phone size={18} />,
    //   label: 'Phone',
    //   value: '+1 (555) 123-4567',
    //   href: 'tel:+15551234567'
    // },
    // {
    //   icon: <MapPin size={18} />,
    //   label: 'Location',
    //   value: 'San Francisco, CA',
    //   href: '#'
    // }
  ];

  const quickLinks = [
    { label: 'Resume/CV', href: '#', icon: <ExternalLink size={16} /> },
    { label: 'Blog', href: '#', icon: <ExternalLink size={16} /> },
    // { label: 'Testimonials', href: '#', icon: <MessageCircle size={16} /> },
    // { label: 'Services', href: '#', icon: <Briefcase size={16} /> }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-black/40 backdrop-blur-sm border-t border-white/10 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              DevFolio
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Passionate full-stack developer creating innovative digital solutions 
              with modern technologies and creative design.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-white/5 backdrop-blur-sm rounded-full ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/10`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Navigation</h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors group"
                  >
                    <span className="group-hover:scale-110 transition-transform">
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors group"
                  >
                    <span className="group-hover:scale-110 transition-transform">
                      {link.icon}
                    </span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Get In Touch</h3>
            <ul className="space-y-4">
              {contactInfo.map((contact) => (
                <li key={contact.label}>
                  <a
                    href={contact.href}
                    className="flex items-start space-x-3 text-gray-300 hover:text-cyan-400 transition-colors group"
                  >
                    <span className="mt-1 group-hover:scale-110 transition-transform">
                      {contact.icon}
                    </span>
                    <div>
                      <div className="text-sm text-gray-400">{contact.label}</div>
                      <div className="font-medium">{contact.value}</div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>


        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>&copy; {currentYear} Dana Maulana. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart size={16} className="text-red-400 animate-pulse" />
              {/* <span>using React & Tailwind CSS</span> */}
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full blur-3xl" />
      </div>
    </footer>
  );
};

export default Footer;