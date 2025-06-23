'use client';

import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { useT } from '@/contexts/LanguageContext';

export function Footer() {
  const t = useT();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/marcovacchi',
      color: 'hover:text-gray-300',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/marcovacchi',
      color: 'hover:text-blue-400',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/marcovacchi',
      color: 'hover:text-blue-400',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:marco.vacchi@email.com',
      color: 'hover:text-purple-400',
    },
  ];

  const footerLinks = [
    { name: t('nav.home'), href: '#hero' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.experience'), href: '#experience' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold gradient-text">Marco Vacchi</h3>
            <p className="text-gray-400 leading-relaxed">
              {t('footer.tagline')}
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Made with</span>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  color: ['#ef4444', '#ec4899', '#ef4444'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Heart className="w-4 h-4 fill-current" />
              </motion.div>
              <span>and Next.js</span>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <motion.li key={link.name}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 relative group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.name}
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>Milan, Italy</p>
              <a
                href="mailto:marco.vacchi@email.com"
                className="block hover:text-white transition-colors duration-200"
              >
                marco.vacchi@email.com
              </a>
              <a
                href="tel:+39123456790"
                className="block hover:text-white transition-colors duration-200"
              >
                +39 123 456 7890
              </a>
            </div>

            {/* Availability Status */}
            <motion.div
              className="flex items-center space-x-2 mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium">
                Available for hire
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center space-x-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color}`}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <social.icon className="w-4 h-4" />
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="border-t border-gray-800 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">{t('footer.copyright')}</p>
          <motion.p
            className="text-gray-500 text-xs mt-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
            Designed and developed with passion for clean code and beautiful
            user experiences.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
