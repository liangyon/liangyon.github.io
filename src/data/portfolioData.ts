export interface ExperienceItem {
  title: string;
  company: string;
  companyIcon: string;
  date: string;
  overview: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  link: string;
  techStack: string[];
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
        companyIcon: 'https://media.licdn.com/dms/image/v2/D4E0BAQF3yQnZsCMZjw/company-logo_200_200/company-logo_200_200/0/1735839196990?e=1762387200&v=beta&t=0T2Zvr74SERbKgILodqGVX23udcEo09vlpP18fgxT-0',
        date: 'Mar. 2025 - Present',
        overview: 'Built rideshare platform with React/TypeScript frontend and FastAPI microservices on GCP. Implemented JWT authentication with RBAC and CI/CD pipelines using Docker, Jest, and Pytest.'
      },
      {
        title: 'Web Developer',
        company: 'Z-Motors Group',
        companyIcon: 'https://media.licdn.com/dms/image/v2/D560BAQGuRLNvuEJMeg/company-logo_200_200/company-logo_200_200/0/1729224502917/zion_international_trading_group_corp_logo?e=1762387200&v=beta&t=TtBhujr11ABGy1bFBG5xKZ64VDA-4Z_mBp-Md5JERWE',
        date: 'Oct. 2024 - Feb. 2025',
        overview: 'Developed marketing website with Next.js and Decap CMS, achieving sub-2s load times and 85% cost reduction through optimization strategies.'
      },
      {
        title: 'Software Developer',
        company: 'Ontario Ministry of Health',
        companyIcon: 'https://media.licdn.com/dms/image/v2/D4E0BAQHKcm4ehNB-6g/company-logo_200_200/B4EZmgaKBoGYAQ-/0/1759332835908/ontario_ministry_of_health_logo?e=1762387200&v=beta&t=CDJ0uGUBomH8-y9YlHo_meMt9BXfVQm9a5qBCWakiPs',
        date: 'Sept. 2021 - Sept. 2022',
        overview: 'Created hospital budget reporting tool with React/TypeScript frontend and Node.js/Express.js APIs with MongoDB on Azure, serving 200+ facilities.'
      }
    ] as ExperienceItem[]
  },
  projects: {
    title: 'Projects',
    content: [
      {
        title: 'Selah Music Library',
        description: 'Full-stack Next.js/Express.js application with TypeScript and PostgreSQL. Digital sheet music library serving 20+ active users with automated metadata processing and Google Drive API integration.',
        link: 'https://www.selah-library.app',
        techStack: ['Next.js', 'Express.js', 'TypeScript', 'PostgreSQL']
      },
      {
        title: 'Delta Connect',
        description: 'Cross-platform desktop application with PySide6 GUI for automated game save synchronization. Integrates Dropbox API for seamless cloud-based save management across Windows/Mac/Linux emulators and iOS Delta app.',
        link: 'https://github.com/liangyon/delta-connect',
        techStack: ['Python', 'PySide6', 'Dropbox API']
      },
      {
        title: 'Space Invaders',
        description: 'Flexible Java game engine with classic Space Invaders implementation. Utilizes established design patterns for streamlined game object management.',
        link: 'https://github.com/liangyon/phase-1',
        techStack: ['Java', 'Android Studio', 'Firebase']
      }
    ] as ProjectItem[]
  },
  contact: {
    title: 'Contact',
    content: {
      github: 'https://github.com/liangyon',
      linkedin: 'https://linkedin.com/in/liangyon',
      resume: '/Brandon\'s Resume.pdf'
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
