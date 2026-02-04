import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "projects i've worked on",
  projects: [
    {
      id: getId(),
      name: 'E-Commerce Platform',
      description: 'A full-featured online shopping platform with modern UI.',
      tasks:
        'Built a complete e-commerce solution with product management, shopping cart, user authentication, and payment integration. Implemented responsive design and optimized performance for seamless user experience.',
      url: 'https://github.com/nisal-G',
      img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      tags: [
        'React',
        'Node.js',
        'MongoDB',
        'Express.js',
        'Tailwind CSS',
      ],
    },
    {
      id: getId(),
      name: 'Rental Management System',
      description: 'A comprehensive system for managing rental properties.',
      tasks:
        'Developed a rental management application with features for property listings, tenant management, payment tracking, and booking system. Implemented full CRUD operations with MySQL database.',
      url: 'https://github.com/nisal-G',
      img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
      tags: ['Next.js', 'MySQL', 'TypeScript', 'Tailwind CSS'],
    },
    {
      id: getId(),
      name: 'NGO Support Application',
      description:
        'A mobile app to connect volunteers with NGOs and social causes.',
      tasks:
        'Created a cross-platform mobile application using Flutter and Firebase. Implemented features for event management, volunteer registration, donation tracking, and real-time notifications.',
      url: 'https://github.com/nisal-G',
      img: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&h=600&fit=crop',
      tags: ['Flutter', 'Firebase', 'Dart', 'Cloud Functions'],
    },
  ],
};

export default featuredProjectsSection;
