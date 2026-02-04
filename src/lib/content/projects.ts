import { ProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  projects: [
    {
      id: getId(),
      name: 'E-Commerce Platform',
      url: '',
      repo: 'https://github.com/nisal-G',
      img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      year: 2024,
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    },
    {
      id: getId(),
      name: 'Rental Management System',
      url: '',
      repo: 'https://github.com/nisal-G',
      img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
      year: 2024,
      tags: ['Next.js', 'MySQL', 'Tailwind CSS'],
    },
    {
      id: getId(),
      name: 'NGO Support Application',
      url: '',
      repo: 'https://github.com/nisal-G',
      img: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&h=600&fit=crop',
      year: 2023,
      tags: ['Flutter', 'Firebase', 'Dart'],
    },
    {
      id: getId(),
      name: 'Task Management App',
      url: '',
      repo: 'https://github.com/nisal-G',
      img: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
      year: 2023,
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      id: getId(),
      name: 'Portfolio Website',
      url: '',
      repo: 'https://github.com/nisal-G/portfolio-website',
      img: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=600&fit=crop',
      year: 2024,
      tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    },
  ],
};
