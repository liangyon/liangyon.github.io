export interface ExperienceItem {
  title: string;
  date: string;
  points: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  link: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
}

export const portfolioData = {
  about: {
    title: 'About',
    content: `I'm Brandon, a recent graduate from the University of Toronto and bubble tea enjoyer. 
    In my own time I enjoy looking for new places to explore and good food to eat around the city.
    
    As an aspiring developer, I am always interested in picking up new ideas and technologies so that I can keep learning and developing my skillset. I'm most proficient in Python and Java, but also comfortable with Javascript and C. In terms of frameworks, I am familiar with the common full-stack choices such as Spring, Django, Flask, and React, Angular Etc.`
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
        link: 'https://selah-library.app'
      },
      {
        title: 'Space Invaders',
        description: 'Developed a flexible Java game engine and created a classic Space Invaders game as a proof of concept. Utilized established design patterns to streamline game object management.',
        link: 'https://github.com/liangyon/phase-1'
      },
      {
        title: 'Startup-kit Initiative',
        description: 'Created a dynamic MERN social-media-like web app for the Kenyan tech scene, enabling 50+ startups to connect with 100+ potential investors',
        link: 'https://github.com/liangyon/Startup-Kit'
      }
    ] as ProjectItem[]
  },
  contact: {
    title: 'Contact',
    content: {
      email: 'brandon121511@gmail.com',
      phone: '(604) 603-9298',
      location: 'Canada (Open to relocation, seeking roles in the US)',
      github: 'https://github.com/liangyon',
      linkedin: 'https://linkedin.com/in/liangyon'
    } as ContactInfo
  }
}
