'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Clock } from 'lucide-react';

export function ExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timeline = [
    {
      id: 1,
      date: '2024 - 2025',
      title: 'Full-Stack Web Development Bootcamp',
      organization: 'Boolean',
      type: 'education',
      description:
        'Intensive 700-hour program covering modern web development technologies and best practices. Specialized in React, Node.js, MongoDB, and agile development methodologies.',
      highlights: [
        'Built 15+ full-stack applications',
        'Collaborated on team projects using Git',
        'Learned industry best practices',
        'Mastered responsive design principles',
      ],
      icon: GraduationCap,
      color: 'blue',
    },
    {
      id: 2,
      date: '2024',
      title: 'JavaScript Fundamentals Certification',
      organization: 'freeCodeCamp',
      type: 'certification',
      description:
        'Comprehensive study of JavaScript fundamentals, ES6+ features, and DOM manipulation. Completed multiple projects demonstrating proficiency in modern JavaScript development.',
      highlights: [
        '300+ hours of coding practice',
        'Built interactive web applications',
        'Mastered asynchronous programming',
        'Understanding of functional programming',
      ],
      icon: Award,
      color: 'purple',
    },
    {
      id: 3,
      date: '2024',
      title: 'Personal Projects & Learning',
      organization: 'Self-Directed',
      type: 'project',
      description:
        'Dedicated time to building personal projects and expanding knowledge through online resources, documentation, and community involvement.',
      highlights: [
        'Contributed to open-source projects',
        'Built portfolio of diverse applications',
        'Active in developer communities',
        'Continuous learning mindset',
      ],
      icon: Clock,
      color: 'green',
    },
  ];

  const getIconColor = (color: string) => {
    switch (color) {
      case 'blue':
        return 'from-blue-500 to-blue-600';
      case 'purple':
        return 'from-purple-500 to-purple-600';
      case 'green':
        return 'from-green-500 to-green-600';
      default:
        return 'from-blue-500 to-purple-600';
    }
  };

  return (
    <section className="py-20 px-6 bg-slate-900/50" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Experience & Education
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My journey in web development and continuous learning
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>

          {timeline.map((item, index) => (
            <motion.div
              key={item.id}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Timeline Icon */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${getIconColor(
                    item.color
                  )} rounded-full flex items-center justify-center shadow-lg`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </motion.div>
              </div>

              {/* Content Card */}
              <motion.div
                className={`w-full md:w-5/12 ml-24 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="glass p-6 rounded-xl">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-blue-400 bg-blue-500/20 px-3 py-1 rounded-full">
                      {item.date}
                    </span>
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded-full ${
                        item.type === 'education'
                          ? 'bg-blue-500/20 text-blue-300'
                          : item.type === 'certification'
                          ? 'bg-purple-500/20 text-purple-300'
                          : 'bg-green-500/20 text-green-300'
                      }`}
                    >
                      {item.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <h4 className="text-lg font-semibold text-gray-300 mb-3">
                    {item.organization}
                  </h4>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <ul className="space-y-2">
                    {item.highlights.map((highlight, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-center text-gray-300 text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.2 + idx * 0.1,
                        }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 flex-shrink-0"></div>
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {[
            { number: '700+', label: 'Hours of Training', color: 'blue' },
            { number: '15+', label: 'Projects Completed', color: 'purple' },
            { number: '100%', label: 'Passion for Code', color: 'green' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 glass rounded-xl"
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.h4
                className={`text-4xl font-bold mb-2 ${
                  stat.color === 'blue'
                    ? 'text-blue-400'
                    : stat.color === 'purple'
                    ? 'text-purple-400'
                    : 'text-green-400'
                }`}
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              >
                {stat.number}
              </motion.h4>
              <p className="text-gray-300 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
