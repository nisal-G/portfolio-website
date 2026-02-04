import { ExperienceSectionType } from '@/lib/types/sections';

export const experienceSection: ExperienceSectionType = {
  title: "my journey",
  experiences: [
    {
      company: 'SLIIT',
      companyUrl: 'https://www.sliit.lk/',
      role: 'Software Engineering Undergraduate',
      started: '2022',
      upto: 'present',
      tasks: [
        'Pursuing Bachelor of Science Honours in Information Technology, specializing in Software Engineering.',
        'Working on multiple full-stack and mobile projects as part of academic curriculum.',
        'Actively learning advanced backend concepts and system design principles.',
      ],
    },
    {
      company: 'Personal Projects',
      companyUrl: 'https://github.com/nisal-G',
      role: 'Full Stack Developer',
      started: '2022',
      upto: 'present',
      tasks: [
        'Built e-commerce platforms with React, Node.js, and MongoDB.',
        'Developed rental management systems with full CRUD functionality.',
        'Created NGO support applications with Flutter and Firebase.',
        'Implemented authentication, payment integration, and real-time features.',
      ],
    },
  ],
};
