import { SkillsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'full stack development',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Building full-stack web applications using React.js, Next.js, Node.js, and Express.js',
        'Developing responsive single-page applications with modern UI frameworks',
        'Creating RESTful APIs and integrating databases like MongoDB and MySQL',
      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        { name: 'html-5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        {
          name: 'typeScript',
          icon: 'vscode-icons:file-type-typescript-official',
        },
        { name: 'nodejs', icon: 'logos:nodejs-icon' },
        { name: 'reactjs', icon: 'logos:react' },
        { name: 'nextjs', icon: 'logos:nextjs-icon' },
        { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
        { name: 'mongodb', icon: 'logos:mongodb-icon' },
        { name: 'mysql', icon: 'logos:mysql-icon' },
        { name: 'expressjs', icon: 'simple-icons:express' },
        { name: 'git', icon: 'logos:git-icon' },
      ],
    },
    {
      id: getId(),
      title: 'mobile development',
      lottie: {
        light: '/lotties/designing.json',
        dark: '/lotties/designing-dark.json',
      },
      points: [
        'Building cross-platform mobile applications with Flutter',
        'Integrating Firebase for authentication, database, and cloud functions',
        'Creating responsive and user-friendly mobile interfaces',
      ],
      softwareSkills: [
        { name: 'flutter', icon: 'logos:flutter' },
        { name: 'dart', icon: 'logos:dart' },
        { name: 'firebase', icon: 'logos:firebase' },
        { name: 'android', icon: 'logos:android-icon' },
      ],
    },
  ],
};
