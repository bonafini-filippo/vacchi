'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Code,
  Database,
  Globe,
  Smartphone,
  GitBranch,
  Palette,
} from 'lucide-react';
import { useT } from '@/contexts/LanguageContext';

export function AboutSection() {
  const t = useT();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      name: 'JavaScript',
      icon: Code,
      level: 90,
      description: 'ES6+, Modern JavaScript development',
    },
    {
      name: 'React',
      icon: Code,
      level: 85,
      description: 'Hooks, Context API, Component architecture',
    },
    {
      name: 'Node.js',
      icon: Database,
      level: 80,
      description: 'Express.js, RESTful APIs, Server-side development',
    },
    {
      name: 'MongoDB',
      icon: Database,
      level: 75,
      description: 'NoSQL database design and optimization',
    },
    {
      name: 'Next.js',
      icon: Globe,
      level: 80,
      description: 'Full-stack React framework with SSR/SSG',
    },
    {
      name: 'Tailwind CSS',
      icon: Palette,
      level: 85,
      description: 'Utility-first CSS framework',
    },
    {
      name: 'Git',
      icon: GitBranch,
      level: 80,
      description: 'Version control and collaboration',
    },
    {
      name: 'Responsive Design',
      icon: Smartphone,
      level: 90,
      description: 'Mobile-first, cross-platform development',
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-900/50" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Sfondo con effetto glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-cyan-500/10 rounded-3xl blur-3xl"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-emerald-500/5 rounded-3xl blur-2xl"></div>

          <div className="relative glass rounded-3xl p-8 lg:p-12 backdrop-blur-xl border border-white/10">
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              {/* Immagine a sinistra - 2 colonne */}
              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, x: -100, scale: 0.8 }}
                animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <div className="relative group">
                  {/* Cerchi animati di sfondo */}
                  <motion.div
                    className="absolute -inset-8 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full blur-2xl"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                  <motion.div
                    className="absolute -inset-6 bg-gradient-to-l from-cyan-500/15 to-emerald-500/15 rounded-full blur-xl"
                    animate={{
                      scale: [1.1, 1, 1.1],
                      rotate: [360, 180, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />

                  {/* Immagine principale */}
                  <motion.div
                    className="relative w-80 h-80 mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-emerald-500/20 ring-1 ring-white/10"
                    whileHover={{
                      scale: 1.05,
                      rotateY: 5,
                      rotateX: 5,
                    }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face"
                      alt="Marco Vacchi"
                      className="w-full h-full object-cover filter brightness-110 contrast-105 group-hover:brightness-115 transition-all duration-500"
                    />

                    {/* Overlay con gradiente */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/20 via-transparent to-cyan-900/20 opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>

                    {/* Particelle fluttuanti randomiche */}
                    {[
                      { left: 15, top: 20, size: 'w-1 h-1', delay: 0 },
                      { left: 85, top: 15, size: 'w-0.5 h-0.5', delay: 0.8 },
                      { left: 25, top: 75, size: 'w-1.5 h-1.5', delay: 1.5 },
                      { left: 70, top: 85, size: 'w-1 h-1', delay: 2.2 },
                      { left: 45, top: 35, size: 'w-0.5 h-0.5', delay: 0.4 },
                      { left: 90, top: 55, size: 'w-1 h-1', delay: 1.8 },
                      { left: 10, top: 60, size: 'w-1.5 h-1.5', delay: 1.1 },
                      { left: 60, top: 10, size: 'w-0.5 h-0.5', delay: 2.5 },
                      { left: 35, top: 90, size: 'w-1 h-1', delay: 0.7 },
                      { left: 80, top: 40, size: 'w-1.5 h-1.5', delay: 1.9 },
                    ].map((particle, i) => (
                      <motion.div
                        key={i}
                        className={`absolute ${particle.size} bg-emerald-400 rounded-full opacity-50`}
                        style={{
                          left: `${particle.left}%`,
                          top: `${particle.top}%`,
                        }}
                        animate={{
                          y: [0, -15 - Math.random() * 20, 0],
                          x: [0, Math.random() * 10 - 5, 0],
                          opacity: [0.3, 0.8, 0.3],
                          scale: [0.8, 1.4, 0.8],
                        }}
                        transition={{
                          duration: 2.5 + Math.random() * 2,
                          repeat: Infinity,
                          delay: particle.delay,
                          ease: 'easeInOut',
                        }}
                      />
                    ))}
                  </motion.div>

                  {/* Badge floating */}
                  <motion.div
                    className="absolute -bottom-4 -right-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-4 py-2 rounded-2xl text-sm font-bold shadow-lg"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    ✨ Full-Stack Dev
                  </motion.div>
                </div>
              </motion.div>

              {/* Contenuto a destra - 3 colonne */}
              <motion.div
                className="lg:col-span-3 space-y-8"
                initial={{ opacity: 0, x: 100 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {/* Titolo con effetto typing */}
                <motion.div>
                  <motion.h3
                    className="text-3xl lg:text-4xl font-bold mb-6"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <span className="gradient-text">{t('about.title')}</span>
                  </motion.h3>
                </motion.div>

                {/* Descrizioni con animazioni staggered */}
                <motion.div className="space-y-6">
                  <motion.p
                    className="text-gray-300 text-lg leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    {t('about.description')}
                  </motion.p>
                  <motion.p
                    className="text-gray-300 text-lg leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1.0 }}
                  >
                    {t('about.bio')}
                  </motion.p>
                </motion.div>

                {/* Badge animati */}
                <motion.div
                  className="flex flex-wrap gap-4 pt-6"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  {[
                    { text: 'Problem Solver', color: 'emerald' },
                    { text: 'Team Player', color: 'cyan' },
                    { text: 'Quick Learner', color: 'green' },
                  ].map((badge, i) => (
                    <motion.span
                      key={badge.text}
                      className={`px-6 py-3 bg-${badge.color}-500/20 text-${badge.color}-300 rounded-full text-sm font-medium border border-${badge.color}-500/30 backdrop-blur-sm`}
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 1.4 + i * 0.2 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      {badge.text}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            {t('about.skills')}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="group p-6 glass rounded-xl hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <skill.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {skill.name}
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                  {skill.description}
                </p>

                {/* Skill Level Bar */}
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="h-2 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 1.2 + index * 0.1 }}
                  />
                </div>
                <span className="text-xs text-gray-400 mt-1 block">
                  {skill.level}%
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
