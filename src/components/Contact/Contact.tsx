import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  Instagram, 
  Github, 
  Linkedin, 
  MapPin,
  Send,
  Zap,
  Globe,
  MessageCircle
} from 'lucide-react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      id: 'email',
      icon: Mail,
      label: 'Email',
      value: 'moysesmv@msn.com',
      href: 'mailto:moysesmv@msn.com',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'phone',
      icon: Phone,
      label: 'Telefone',
      value: '(27) 98157-6419',
      href: 'tel:+5527981576419',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 'instagram',
      icon: Instagram,
      label: 'Instagram',
      value: '@MoysesTi_MV',
      href: 'https://instagram.com/MoysesTi_MV',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      id: 'location',
      icon: MapPin,
      label: 'Localização',
      value: 'Vila Velha, ES - Brasil',
      href: '#',
      gradient: 'from-purple-500 to-indigo-500'
    }
  ];

  const socialLinks = [
    {
      id: 'github',
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com',
      color: '#ffffff'
    },
    {
      id: 'linkedin',
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      color: '#0077b5'
    },
    {
      id: 'instagram',
      icon: Instagram,
      label: 'Instagram',
      href: 'https://instagram.com/MoysesTi_MV',
      color: '#e4405f'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envio
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    setIsSubmitting(false);
    alert('Mensagem enviada com sucesso! Em breve entrarei em contato.');
  };

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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="contact" className="contact-section space-bg">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="contact-header"
        >
          <h2 className="section-title gradient-text font-orbitron">
            Vamos Trabalhar Juntos
          </h2>
          <p className="contact-subtitle">
            Pronto para criar algo extraordinário? Entre em contato e vamos transformar 
            suas ideias em realidade digital. O universo das possibilidades nos aguarda!
          </p>
        </motion.div>

        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Informações de contato */}
          <motion.div className="contact-info" variants={itemVariants}>
            <h3 className="info-title">
              <MessageCircle className="title-icon" />
              Informações de Contato
            </h3>
            
            <div className="contact-cards">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={contact.id}
                  href={contact.href}
                  className="contact-card"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <div className={`contact-icon bg-gradient-to-br ${contact.gradient}`}>
                    <contact.icon />
                  </div>
                  <div className="contact-details">
                    <span className="contact-label">{contact.label}</span>
                    <span className="contact-value">{contact.value}</span>
                  </div>
                  <div className="contact-arrow">→</div>
                </motion.a>
              ))}
            </div>

            {/* Redes sociais */}
            <div className="social-section">
              <h4 className="social-title">Me acompanhe nas redes</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.id}
                    href={social.href}
                    className="social-link"
                    style={{ '--social-color': social.color } as React.CSSProperties}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                    title={social.label}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Formulário de contato */}
          <motion.div className="contact-form-wrapper" variants={itemVariants}>
            <h3 className="form-title">
              <Send className="title-icon" />
              Envie uma Mensagem
            </h3>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <motion.div 
                  className="form-group"
                  whileFocus={{ scale: 1.02 }}
                >
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Seu nome"
                    required
                    className="form-input"
                  />
                  <div className="input-border"></div>
                </motion.div>
                
                <motion.div 
                  className="form-group"
                  whileFocus={{ scale: 1.02 }}
                >
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Seu email"
                    required
                    className="form-input"
                  />
                  <div className="input-border"></div>
                </motion.div>
              </div>
              
              <motion.div 
                className="form-group"
                whileFocus={{ scale: 1.02 }}
              >
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Assunto"
                  required
                  className="form-input"
                />
                <div className="input-border"></div>
              </motion.div>
              
              <motion.div 
                className="form-group"
                whileFocus={{ scale: 1.02 }}
              >
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Sua mensagem"
                  required
                  rows={6}
                  className="form-textarea"
                />
                <div className="input-border"></div>
              </motion.div>
              
              <motion.button
                type="submit"
                className="submit-button"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="loading-spinner"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="submit-icon" />
                    Enviar Mensagem
                    <Zap className="submit-zap" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        {/* Call to action final */}
        <motion.div
          className="contact-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <div className="cta-content">
            <Globe className="cta-icon" />
            <h3 className="cta-title">Conecte-se ao Futuro</h3>
            <p className="cta-description">
              Juntos, podemos criar soluções que transcendem o comum e 
              exploram as infinitas possibilidades do universo digital.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;