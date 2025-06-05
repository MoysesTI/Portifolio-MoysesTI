import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, Star } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number}>>([]);

  // Gerar partículas espaciais
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1
        });
      }
      setParticles(newParticles);
    };
    generateParticles();
  }, []);

  // Tracking do mouse para efeitos interativos
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:contato@moysesti.com', label: 'Email' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="home" className="hero space-bg">
      {/* Partículas espaciais */}
      <div className="space-particles">
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      {/* Planetas decorativos */}
      <motion.div 
        className="planet planet-1"
        animate={{
          x: mousePosition.x * 0.1,
          y: mousePosition.y * 0.1,
          rotate: 360
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
          x: { duration: 0.5 },
          y: { duration: 0.5 }
        }}
      />
      <motion.div 
        className="planet planet-2"
        animate={{
          x: mousePosition.x * -0.05,
          y: mousePosition.y * -0.05,
          rotate: -360
        }}
        transition={{
          rotate: { duration: 30, repeat: Infinity, ease: 'linear' },
          x: { duration: 0.7 },
          y: { duration: 0.7 }
        }}
      />

      <div className="container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Lado esquerdo - Texto */}
          <div className="hero-left">
            <motion.div className="hero-greeting" variants={itemVariants}>
              <span className="greeting-text">Bem-vindo ao futuro!</span>
              <Star className="greeting-icon" />
            </motion.div>

            <motion.h1 className="hero-title" variants={itemVariants}>
              Hi I am <span className="name-highlight">Moyses</span> Silva
            </motion.h1>

            <motion.h2 className="hero-subtitle" variants={itemVariants}>
              Desenvolvedor Full Stack & Analista de Dados
            </motion.h2>

            <motion.p className="hero-description" variants={itemVariants}>
              Transformo ideias em soluções tecnológicas inovadoras. Com 1.5 anos no mercado de TI, 
              especializado em React, TypeScript, Python e análise de dados. 
              Criando experiências digitais que conectam sistemas e usuários de forma intuitiva.
            </motion.p>

            <motion.div className="hero-stats" variants={itemVariants}>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projetos</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1.5</span>
                <span className="stat-label">Anos Exp.</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Dedicação</span>
              </div>
            </motion.div>

            <motion.div className="hero-actions" variants={itemVariants}>
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Mais Sobre Mim
              </motion.button>
              
              <motion.button
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="btn-icon" />
                Download CV
              </motion.button>
            </motion.div>

            <motion.div className="hero-social" variants={itemVariants}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="social-link"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  title={social.label}
                >
                  <social.icon />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Lado direito - Imagem */}
          <motion.div 
            className="hero-right"
            variants={itemVariants}
          >
            <div className="hero-image-container">
              <motion.div 
                className="hero-image-wrapper"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Placeholder para sua foto */}
                <div className="hero-image-placeholder">
                  <div className="image-content">
                    <div className="avatar-placeholder">
                      <img src="/src/assets/Eu.png" alt="" />
                    </div>
                  </div>
                </div>
                
                {/* Badge flutuante */}
                <motion.div 
                  className="floating-badge"
                  animate={{
                    y: [-10, 10, -10],
                    rotate: [0, 5, 0, -5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                >
                  <span className="badge-text">1.5 years client</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;