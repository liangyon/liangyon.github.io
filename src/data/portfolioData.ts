export interface ExperienceItem {
  title: string;
  company: string;
  companyIcon: string;
  date: string;
  overview: string;
  size?: 'sm' | 'md' | 'lg';
  link?: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  link: string;
  techStack: string[];
  size?: 'sm' | 'md' | 'lg';
  feature?: 'spotlight' | 'metrics' | 'timeline' | 'typing';
  spotlightItems?: string[];
  metrics?: Array<{
    label: string;
    value: number;
    suffix?: string;
    color?: string;
  }>;
}

export interface ContactInfo {
  github: string;
  linkedin: string;
  resume: string;
}

export interface TechStackItem {
  name: string;
  icon: string;
  url: string;
  description: string;
}

// Tech icon mapping for projects
export const techIconMap: Record<string, string> = {
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
  'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
  'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
  'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  'FastAPI': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',
  'Android Studio': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg',
  'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg',
  'PySide6': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/qt/qt-original.svg',
  'Dropbox API': 'https://img.icons8.com/color/48/dropbox.png',
}

export const portfolioData = {
  about: {
    title: 'About',
    content: `Hi, I'm Brandon! I'm a passionate software developer and recent University of Toronto graduate who believes great code starts with great coffee (or bubble tea). When I'm not building digital solutions, you'll find me exploring Vancouver's neighborhoods, hunting for the perfect bowl of ramen, or discovering new local spots.

I'm driven by curiosity and the endless possibilities that technology brings to solving real-world problems. My experience spans from hospital budget systems serving hundreds of facilities to rideshare platforms handling thousands of daily transactions. I thrive in full-stack environments where I can bring ideas to life from database to user interface.

What excites me most? The moment when clean, efficient code transforms into something that genuinely improves people's lives – whether it's streamlining workflows, connecting communities, or simply making someone's day a little easier.`

  },
  experience: {
    title: 'Experience',
    content: [
      {
        title: 'Software Developer',
        company: 'Optimize Everything',
        companyIcon: '/company-icons/optimize.jpg',
        date: 'Mar. 2025 - Present',
        overview: 'Built rideshare platform with React/TypeScript frontend and FastAPI microservices on GCP. Implemented JWT authentication with RBAC and CI/CD pipelines using Docker, Jest, and Pytest.',
        size: 'md',
        link: 'https://www.optimize-everything.com'
      },
      {
        title: 'Web Developer',
        company: 'Z-Motors Group',
        companyIcon: '/company-icons/zion.jpg',
        date: 'Oct. 2024 - Feb. 2025',
        overview: 'Developed marketing website with Next.js and Decap CMS, achieving sub-2s load times and 85% cost reduction through optimization strategies.',
        size: 'sm',
        link: 'https://www.z-motors.com'
      },
      {
        title: 'Software Developer',
        company: 'Ontario Ministry of Health',
        companyIcon: '/company-icons/moh.jpg',
        date: 'Sept. 2021 - Sept. 2022',
        overview: 'Created hospital budget reporting tool with React/TypeScript frontend and Node.js/Express.js APIs with MongoDB on Azure, serving 200+ facilities.',
        size: 'sm',
        link: '#'
      }
    ] as ExperienceItem[]
  },
  projects: {
    title: 'Projects',
    content: [
      {
        title: 'Machi Quest',
        description: 'Fully deployed gamified end-to-end automated productivity tracker. Features real-time task management, achievement systems, and analytics dashboard with serverless architecture.',
        link: 'https://machi.quest',
        techStack: ['Next.js', 'FastAPI', 'Python', 'PostgreSQL'],
        size: 'lg',
        feature: 'spotlight',
        spotlightItems: [
          'Real-time task tracking & analytics',
          'Gamification with XP & achievements',
          'AWS serverless deployment',
          'Automated productivity insights',
          'Full-stack TypeScript & Python'
        ]
      },
      {
        title: 'Delta Connect',
        description: 'Cross-platform desktop app for automated game save synchronization with Dropbox API.',
        link: 'https://github.com/liangyon/delta-connect',
        techStack: ['Python', 'PySide6', 'Dropbox API'],
        size: 'sm'
      },
      {
        title: 'Space Invaders',
        description: 'Flexible Java game engine with classic Space Invaders implementation. Utilizes established design patterns for streamlined game object management.',
        link: 'https://github.com/liangyon/phase-1',
        techStack: ['Java', 'Android Studio', 'Firebase'],
        size: 'sm'
      },
      {
        title: 'Selah Music Library',
        description: 'Full-stack digital sheet music library serving 20+ active users with automated metadata processing and Google Drive API integration.',
        link: 'https://www.selah-library.app',
        techStack: ['Next.js', 'Express.js', 'TypeScript', 'PostgreSQL'],
        size: 'md',
        feature: 'metrics',
        metrics: [
          { label: 'Active Users', value: 20, suffix: '+', color: 'emerald' },
          { label: 'Music Sheets', value: 85, suffix: '+', color: 'blue' },
          { label: 'Uptime', value: 99.9, suffix: '%', color: 'violet' }
        ]
      }
    ] as ProjectItem[]
  },
  contact: {
    title: 'Contact',
    content: {
      github: 'https://github.com/liangyon',
      linkedin: 'https://linkedin.com/in/liangyon',
      resume: '/Brandon_Liang_Resume.pdf'
    } as ContactInfo
  },
  techStack: {
    title: 'Tech Stack',
    content: [
      {
        name: 'Next.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
        url: 'https://nextjs.org',
        description: 'React framework for production'
      },
      {
        name: 'Express.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
        url: 'https://expressjs.com',
        description: 'Fast Node.js web framework'
      },
      {
        name: 'FastAPI',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',
        url: 'https://fastapi.tiangolo.com',
        description: 'Modern Python web framework'
      },
      {
        name: 'Python',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
        url: 'https://python.org',
        description: 'Versatile programming language'
      },
      {
        name: 'PostgreSQL',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
        url: 'https://postgresql.org',
        description: 'Advanced open source database'
      }
    ] as TechStackItem[]
  }
}
