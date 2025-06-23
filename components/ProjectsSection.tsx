'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useCallback, useEffect } from 'react';
import { useT } from '@/contexts/LanguageContext';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export function ProjectsSection() {
  const t = useT();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // 🎠 Configurazione Embla Carousel
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      slidesToScroll: 1,
      breakpoints: {
        '(min-width: 768px)': { slidesToScroll: 1 },
      },
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  // 🎯 Funzioni di navigazione del carousel
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  // 🔄 Gestione eventi del carousel
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    onSelect();

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  const projects = [
    {
      id: 1,
      title: t('projects.booleanFlix.title'),
      description: t('projects.booleanFlix.description'),
      image:
        'https://images.unsplash.com/photo-1489599994951-0ad6bfa27e65?w=600&h=400&fit=crop',
      technologies: t('projects.booleanFlix.features'),
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 2,
      title: t('projects.foodDelivery.title'),
      description: t('projects.foodDelivery.description'),
      image:
        'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop',
      technologies: t('projects.foodDelivery.features'),
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 3,
      title: t('projects.portfolioV1.title'),
      description: t('projects.portfolioV1.description'),
      image:
        'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      technologies: t('projects.portfolioV1.features'),
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 4,
      title: t('projects.taskManager.title'),
      description: t('projects.taskManager.description'),
      image:
        'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: t('projects.taskManager.features'),
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-950" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            {t('projects.title')}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mt-6"></div>
        </motion.div>

        {/* 🎠 Embla Carousel */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* 🎠 Carousel Container */}
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="embla__slide flex-none w-full md:w-1/2 lg:w-1/3 px-3"
                >
                  <motion.div
                    className="relative h-96 group cursor-pointer"
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
                            <span className="inline-block px-3 py-1 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-xs font-semibold rounded-full mb-3">
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
                            {project.technologies
                              .slice(0, 3)
                              .map((tech: string) => (
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
                        className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-gray-900/70 to-transparent flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: hoveredProject === project.id ? 1 : 0,
                        }}
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
                            {t('projects.viewProject')}
                          </motion.p>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* 🎯 Navigation Buttons */}
          <motion.button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black/50 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300"
            onClick={scrollPrev}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft size={24} />
          </motion.button>

          <motion.button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black/50 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300"
            onClick={scrollNext}
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={24} />
          </motion.button>

          {/* 🔵 Dot Indicators */}
          <motion.div
            className="flex justify-center space-x-2 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {scrollSnaps.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                onClick={() => scrollTo(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.button
            className="px-8 py-3 border-2 border-emerald-500 text-emerald-400 rounded-full font-semibold hover:bg-emerald-500 hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('projects.viewCode')}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
