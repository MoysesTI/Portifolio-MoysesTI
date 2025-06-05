import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Smartphone, 
  BarChart3, 
  Camera, 
  Palette 
} from 'lucide-react';
import './WhatIDo.css';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  gradient: string;
}

const WhatIDo: React.FC = () => {
  const services: Service[] = [
    {
      id: 'frontend',
      title: 'Desenvolvimento Frontend',
      description: 'Criação de interfaces modernas e responsivas com React, TypeScript e tecnologias de ponta, focando na experiência do usuário.',
      icon: Code,
      color: '#3b82f6',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'backend',
      title: 'Desenvolvimento Backend',
      description: 'Desenvolvimento de APIs robustas e escaláveis com Python, Node.js e integração com bancos de dados modernos.',
      icon: Database,
      color: '#8b5cf6',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      id: 'mobile',
      title: 'Aplicações Mobile',
      description: 'Desenvolvimento de aplicativos mobile híbridos com React Native, proporcionando experiências nativas multiplataforma.',
      icon: Smartphone,
      color: '#ec4899',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      id: 'data',
      title: 'Análise de Dados',
      description: 'Transformação de dados em insights valiosos utilizando Python, Power BI e Excel VBA para tomadas de decisão estratégicas.',
      icon: BarChart3,
      color: '#10b981',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      id: 'consulting',
      title: 'Consultoria Tech',
      description: 'Consultoria especializada em metodologias ágeis e melhores práticas de desenvolvimento para otimizar processos.',
      icon: Palette,
      color: '#f59e0b',
      gradient: 'from-amber-500 to-orange-500'
    },
    {
      id: 'teaching',
      title: 'Ensino Avançado',
      description: 'Ensino especializado em Excel, Word, Power BI e ferramentas de produtividade para capacitação profissional.',
      icon: Camera,
      color: '#ef4444',
      gradient: 'from-red-500 to-pink-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="services" className="services-section space-bg">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="services-header"
        >
          <h2 className="section-title gradient-text font-orbitron">
            What I Do
          </h2>
          <p className="services-subtitle">
            Transformando ideias em soluções tecnológicas inovadoras com expertise 
            em desenvolvimento full stack e análise de dados.
          </p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="service-card"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                z: 50
              }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 20 
              }}
            >
              <div className="service-card-inner">
                {/* Ícone */}
                <motion.div 
                  className="service-icon-wrapper"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <div 
                    className={`service-icon bg-gradient-to-br ${service.gradient}`}
                    style={{ '--icon-color': service.color } as React.CSSProperties}
                  >
                    <service.icon />
                  </div>
                </motion.div>

                {/* Conteúdo */}
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  
                  {/* Barra de progresso decorativa */}
                  <motion.div 
                    className="service-progress"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                  >
                    <div 
                      className={`progress-fill bg-gradient-to-r ${service.gradient}`}
                    />
                  </motion.div>
                </div>

                {/* Efeito de hover */}
                <motion.div 
                  className="card-hover-effect"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Partículas decorativas */}
                <div className="card-particles">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="card-particle"
                      animate={{
                        y: [0, -20, 0],
                        x: [0, Math.random() * 10 - 5, 0],
                        opacity: [0.3, 1, 0.3]
                      }}
                      transition={{
                        duration: 2 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.5
                      }}
                      style={{
                        left: `${20 + i * 30}%`,
                        backgroundColor: service.color
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="services-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h3 className="cta-title">Pronto para começar seu próximo projeto?</h3>
          <p className="cta-description">
            Vamos trabalhar juntos para transformar suas ideias em realidade digital.
          </p>
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span>Iniciar Projeto</span>
            <motion.div
              className="button-arrow"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIDo;