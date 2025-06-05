export interface Skill {
  name: string;
  level: number;
  color: string;
  icon: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  color: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'web' | 'mobile' | 'data' | 'fullstack';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon: string;
  section: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  image: string;
  email: string;
  phone: string;
  location: string;
  socialLinks: {
    github: string;
    linkedin: string;
    portfolio: string;
  };
}