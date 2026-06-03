import type { SolutionItem } from '../types';

// Import semua ikon dari folder assets/icon
import webDevIcon from '../assets/icon/Web Development.png';
import mobileAppIcon from '../assets/icon/Mobile App Development.png';
import uiUxIcon from '../assets/icon/UI-UX Design.png';
import cloudIcon from '../assets/icon/Cloud Solutions.png';
import softwareDevIcon from '../assets/icon/Software Development.png';
import itInfraIcon from '../assets/icon/IT Infrastructure.png';
import cyberIcon from '../assets/icon/Cybersecurity Services.png';
import qaIcon from '../assets/icon/QA Solutions.png';
import itConsultingIcon from '../assets/icon/IT Consulting & Support.png';

export const solutionsData: SolutionItem[] = [
  {
    title: 'Web Development',
    description: 'Build fast, scalable, and SEO-friendly websites',
    icon: webDevIcon,
  },
  {
    title: 'Mobile App Development',
    description: 'Native & cross-platform apps tailored to user needs.',
    icon: mobileAppIcon,
  },
  {
    title: 'UI/UX Design',
    description: 'Delight users with intuitive and beautiful interfaces',
    icon: uiUxIcon,
  },
  {
    title: 'Cloud Solutions',
    description: 'Secure and flexible cloud infrastructure for your growth.',
    icon: cloudIcon,
  },
  {
    title: 'Software Development',
    description: 'Custom solutions built around your business logic.',
    icon: softwareDevIcon,
  },
  {
    title: 'IT Infrastructure',
    description: 'Robust networks and systems to keep operations smooth.',
    icon: itInfraIcon,
  },
  {
    title: 'Cybersecurity Services',
    description:
      'Protecting your digital assets with advanced security measures.',
    icon: cyberIcon,
  },
  {
    title: 'QA Solutions',
    description: 'Rigorous testing to ensure flawless performance.',
    icon: qaIcon,
  },
  {
    title: 'IT Consulting & Support',
    description: 'Expert advice to optimize your IT operations and strategy.',
    icon: itConsultingIcon,
  },
];
