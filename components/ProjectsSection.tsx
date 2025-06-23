'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Play } from 'lucide-react';
import { useState } from 'react';

export function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Boolean-Flix',
      description:
        'A Netflix-inspired streaming platform built with React and external movie APIs. Features responsive design, search functionality, and detailed movie information.',
      image:
        'https://images.unsplash.com/photo-1489599994951-0ad6bfa27e65?w=600&h=400&fit=crop',
      technologies: [
        'React',
        'JavaScript',
        'CSS3',
        'Movie API',
        'Responsive Design',
      ],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Food Delivery App',
      description:
        'Full-stack food ordering application with user authentication, cart functionality, and real-time order tracking. Complete with admin dashboard.',
      image:
        'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop',
      technologies: [
        'React',
        'Node.js',
        'Express',
        'MongoDB',
        'JWT',
        'Socket.io',
      ],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'Portfolio V1',
      description:
        'My first portfolio website showcasing my learning journey. Built with vanilla JavaScript and CSS, demonstrating my progression in web development.',
      image:
        'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      technologies: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'GSAP',
        'Responsive Design',
      ],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 4,
      title: 'Task Management App',
      description:
        'A collaborative task management tool with drag-and-drop functionality, team collaboration features, and real-time updates.',
      image:
        'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: [
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Firebase',
        'Drag & Drop',
      ],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
  ];

  return (
    <section
      className="py-20 px-6 bg-gradient-to-br from-slate-900 to-slate-800"
      ref={ref}
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my latest work, demonstrating my skills in modern web
            development
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6"></div>
        </motion.div>

        {/* Horizontal Scrolling Gallery */}
        <motion.div
          className="overflow-x-auto pb-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex space-x-6 w-max">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="relative w-80 h-96 group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                whileHover={{ y: -10 }}
              >
                {/* Project Card */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Project Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.featured && (
                        <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold rounded-full mb-3">
                          Featured
                        </span>
                      )}
                      <h3 className="text-xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-white/10 backdrop-blur text-white text-xs rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-white/10 backdrop-blur text-white text-xs rounded-md">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  </div>

                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-purple-900/70 to-transparent flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-center">
                      <motion.div
                        className="flex space-x-4 justify-center"
                        initial={{ scale: 0 }}
                        animate={{
                          scale: hoveredProject === project.id ? 1 : 0,
                        }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        <motion.a
                          href={project.liveUrl}
                          className="flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink size={20} />
                        </motion.a>
                        <motion.a
                          href={project.githubUrl}
                          className="flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Github size={20} />
                        </motion.a>
                      </motion.div>
                      <motion.p
                        className="text-white mt-4 text-sm"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{
                          opacity: hoveredProject === project.id ? 1 : 0,
                          y: hoveredProject === project.id ? 0 : 10,
                        }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                      >
                        View Project Details
                      </motion.p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.button
            className="px-8 py-3 border-2 border-blue-500 text-blue-400 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects on GitHub
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
