export interface ExperienceItem {
  title: string;
  date: string;
  points: string[];
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
        title: 'Software Developer - Optimize Everything',
        date: 'Mar. 2025 - Present (Contract)',
        points: [
          'Developed core rideshare user flows using React/TypeScript frontend with FastAPI microservices, scaled to support 10,000+ daily transactions',
          'Designed and implemented a secure JWT authentication system with RBAC, refresh token rotation, and validation flow',
          'Implemented comprehensive test automation covering 85% of critical paths (Jest frontend/Pytest backend)',
          'Took ownership in key early frontend infrastructure decisions and payment workflow planning'
        ]
      },
      {
        title: 'Software Developer - Z-Motors Group',
        date: 'Oct. 2024 - Feb. 2025 (Contract)',
        points: [
          'Launched a marketing website with Next.js and Decap CMS that improved content update times from 2 hours down to 10 minutes',
          'Reduced page load times to under 2 seconds by implementing Next image optimization strategies',
          'Delivered client-side search functionality with debounced inputs and lazy-loaded results, improving interaction speed by 40%'
        ]
      },
      {
        title: 'Software Developer - Ontario Ministry of Health',
        date: 'Sept. 2021 - Sept. 2022',
        points: [
          'Developed and tested a hospital budget reporting tool to track and analyze departmental spending, serving 200+ facilities',
          'Built a dynamic reporting dashboard with interactive visualizations, enabling real-time budget insights',
          'Optimized database queries and implemented efficient archiving that reduced page load times from 8s to 2s',
          'Designed an in-browser spreadsheet component using React and custom hooks that streamlined data entry workflows'
        ]
      }
    ] as ExperienceItem[]
  },
  projects: {
    title: 'Projects',
    content: [
      {
        title: 'Selah Music Library',
        description: 'Developed and deployed a full-stack Next.js/Express.js application with TypeScript and PostgreSQL, creating a digital sheet music library currently serving 20+ active users in production',
        link: 'https://www.selah-library.app',
        techStack: ['Next.js', 'Express.js', 'TypeScript', 'PostgreSQL', 'React']
      },
      {
        title: 'Space Invaders',
        description: 'Developed a flexible Java game engine and created a classic Space Invaders game as a proof of concept. Utilized established design patterns to streamline game object management.',
        link: 'https://github.com/liangyon/phase-1',
        techStack: ['Java', 'Android Studio', 'Firebase']
      },
      // {
      //   title: 'Startup-kit Initiative',
      //   description: 'Created a dynamic MERN social-media-like web app for the Kenyan tech scene, enabling 50+ startups to connect with 100+ potential investors',
      //   link: 'https://github.com/liangyon/Startup-Kit',
      //   techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JavaScript']
      // }
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
        name: 'Tailwind CSS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
        url: 'https://tailwindcss.com',
        description: 'Utility-first CSS framework'
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
