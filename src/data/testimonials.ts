import sarahAvatar from '../assets/Image/Testimonials/sarah-tan.jpg';
import johnAvatar from '../assets/Image/Testimonials/Jhon-Chen.jpg';
import emilyAvatar from '../assets/Image/Testimonials/Emily-Chen.jpg';
import type { Testimonial } from '../types';

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Tan',
    status: 'Product Manager at Finovate',
    review:
      'The team delivered exactly what we needed — on time and with outstanding quality. Their attention to detail and communication were top-notch.',
    avatar: sarahAvatar,
  },

  {
    id: 2,
    name: 'Jhon Chen',
    status: 'Creative Director at Innovate Corp',
    review:
      'Working with this team was a game-changer for our project. They understood our vision and turned it into reality efficiently and effectively.',
    avatar: johnAvatar,
  },

  {
    id: 3,
    name: 'Emily Chen',
    status: 'Marketing Head at Tech Solutions',
    review:
      'The collaboration was seamless, and the results surpassed our expectations. Their expertise transformed our ideas into a successful product.',
    avatar: emilyAvatar,
  },
];
