import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'nisal gunathilaka.',
  tagline: 'I build real-world applications with modern technologies.',
  description:
    "I'm a passionate full-stack developer and Software Engineering undergraduate at SLIIT with hands-on experience in building web and mobile applications using React, Next.js, Node.js, MongoDB, and Flutter.",
  specialText: 'Currently seeking internship opportunities',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
