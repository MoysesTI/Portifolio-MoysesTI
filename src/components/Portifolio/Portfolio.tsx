import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  Calendar, 
  Code, 
  Database, 
  Smartphone,
  Globe,
  BarChart3,
  Zap
} from 'lucide-react';
import './Portfolio.css';

interface Project {
  id: string;
  title: string;
  description: string;
  category: 'web' | 'mobile' | 'data' | 'fullstack';
  technologies: string[];
  status: 'em-andamento' | 'concluido' | 'pausado';
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  startDate: string;
  gradient: string;
  icon: React.ElementType;
}

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 'cosmic-dashboard',
      title: 'Cosmic Analytics Dashboard',
      description: 'Dashboard avançado para análise de dados espaciais com visualizações interativas em tempo real e relatórios dinâmicos.',
      category: 'data',
      technologies: ['Python', 'Power BI', 'React', 'TypeScript', 'D3.js'],
      status: 'em-andamento',
      image: '/placeholder-dashboard.jpg',
      startDate: '2024',
      gradient: 'from-blue-500 to-cyan-500',
      icon: BarChart3
    },
    {
      id: 'stellar-ecommerce',
      title: 'Stellar E-commerce Platform',
      description: 'Plataforma de e-commerce completa com pagamentos integrados, gestão de estoque e painel administrativo.',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'Stripe'],
      status: 'em-andamento',
      image: '/placeholder-ecommerce.jpg',
      startDate: '2024',
      gradient: 'from-purple-500 to-indigo-500',
      icon: Globe
    },
    {
      id: 'nebula-mobile',
      title: 'Nebula Mobile App',
      description: 'Aplicativo mobile para controle de tarefas espaciais com sincronização em nuvem e interface futurística.',
      category: 'mobile',
      technologies: ['React Native', 'TypeScript', 'Firebase', 'Redux'],
      status: 'em-andamento',
      image: '/placeholder-mobile.jpg',
      startDate: '2024',
      gradient: 'from-pink-500 to-rose-500',
      icon: Smartphone
    },
    {
      id: 'quantum-api',
      title: 'Quantum Data API',
      description: 'API robusta para processamento de dados quânticos com autenticação JWT e documentação completa.',
      category: 'web',
      technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'AWS'],
      status: 'em-andamento',
      image: '/placeholder-api.jpg',
      startDate: '2024',
      gradient: 'from-emerald-500 to-teal-500',
      icon: Database
    },
    {
      id: 'galaxy-portfolio',
      title: 'Galaxy Portfolio Website',
      description: 'Site portfólio interativo com tema espacial, animações 3D e experiência imersiva para apresentação profissional.',
      category: 'web',
      technologies: ['React', 'TypeScript', 'Framer Motion', 'Three.js'],
      status: 'em-andamento',
      image: '/placeholder-portfolio.jpg',
      startDate: '2024',
      gradient: 'from-amber-500 to-orange-500',
      icon: Code
    },
    {
      id: 'orbit-learning',
      title: 'Orbit Learning Platform',
      description: 'Plataforma educacional com gamificação, progress tracking e sistema de recompensas para aprendizado contínuo.',
      category: 'fullstack',
      technologies: ['React', 'TypeScript', 'Express', 'MongoDB', 'Socket.io'],
      status: 'em-andamento',
      image: '/placeholder-learning.jpg',
      startDate: '2024',
      gradient: 'from-violet-500 to-purple-500',
      icon: Zap
    }
  ];

  const categories = [
    { id: 'all', label: 'Todos', count: projects.length },
    { id: 'web', label: 'Web', count: projects.filter(p => p.category === 'web').length },
    { id: 'mobile', label: 'Mobile', count: projects.filter(p => p.category === 'mobile').length },
    { id: 'data', label: 'Data', count: projects.filter(p => p.category === 'data').length },
    { id: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'em-andamento': return '#f59e0b';
      case 'concluido': return '#10b981';
      case 'pausado': return '#6b7280';
      default: return '#f59e0b';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'em-andamento': return 'Em Andamento';
      case 'concluido': return 'Concluído';
      case 'pausado': return 'Pausado';
      default: return 'Em Andamento';
    }
  };

  return (
    <section id="portfolio" className="portfolio-section space-bg">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="portfolio-header"
        >
          <h2 className="section-title gradient-text font-orbitron">
            Portfolio
          </h2>
          <p className="portfolio-subtitle">
            Projetos inovadores em desenvolvimento, explorando as fronteiras da tecnologia
            e criando soluções que transcendem o comum.
          </p>
        </motion.div>

        {/* Filtros de categoria */}
        <motion.div
          className="category-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span>{category.label}</span>
              <span className="filter-count">{category.count}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Grid de projetos */}
        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                y: -10
              }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 20 
              }}
            >
              <div className="project-card-inner">
                {/* Header do card */}
                <div className="project-header">
                  <div className="project-icon-wrapper">
                    <div className={`project-icon bg-gradient-to-br ${project.gradient}`}>
                      <project.icon />
                    </div>
                    <div 
                      className="status-badge"
                      style={{ '--status-color': getStatusColor(project.status) } as React.CSSProperties}
                    >
                      {getStatusLabel(project.status)}
                    </div>
                  </div>
                  
                  <div className="project-actions">
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        className="action-btn"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        title="Ver no GitHub"
                      >
                        <Github />
                      </motion.a>
                    )}
                    {project.demoUrl && (
                      <motion.a
                        href={project.demoUrl}
                        className="action-btn"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        title="Ver Demo"
                      >
                        <ExternalLink />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Imagem do projeto */}
                <div className="project-image">
                  <div 
                    className="image-placeholder"
                    style={{
                      background: `linear-gradient(135deg, ${project.gradient.split(' ')[1]}, ${project.gradient.split(' ')[3]})`
                    }}
                  >
                    <div className="image-overlay">
                      <project.icon className="large-icon" />
                      <span>Preview em breve</span>
                    </div>
                  </div>
                </div>

                {/* Conteúdo do projeto */}
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  {/* Data de início */}
                  <div className="project-date">
                    <Calendar className="date-icon" />
                    <span>Iniciado em {project.startDate}</span>
                  </div>

                  {/* Tecnologias */}
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="tech-tag"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: techIndex * 0.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Efeito de hover */}
                <motion.div 
                  className="card-hover-effect"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="portfolio-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h3 className="cta-title">Projetos em Constante Evolução</h3>
          <p className="cta-description">
            Cada projeto é uma jornada de descoberta e inovação. Acompanhe o progresso
            e veja como as ideias se transformam em realidade digital.
          </p>
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span>Colaborar em Projeto</span>
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

export default Portfolio;