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

export function AboutSection() {
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
    <section className="py-20 px-6 bg-slate-800/50" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Marco Vacchi"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Hello! I'm Marco Vacchi
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a recent graduate of the{' '}
              <span className="text-blue-400 font-semibold">
                Boolean web development bootcamp
              </span>
              , eager to apply my full-stack skills to real-world projects. I
              thrive on building beautiful and functional web applications from
              scratch.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My journey into web development began with a passion for
              technology and problem-solving. Through intensive training and
              hands-on projects, I've developed expertise in modern web
              technologies and best practices.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm passionate about{' '}
              <span className="text-purple-400 font-semibold">
                continuous learning
              </span>
              , clean code, and creating user experiences that make a
              difference. When I'm not coding, you'll find me exploring new
              technologies or contributing to open-source projects.
            </p>

            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium">
                Team Player
              </span>
              <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm font-medium">
                Quick Learner
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            Technical Skills
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
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
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
                    className="h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
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
