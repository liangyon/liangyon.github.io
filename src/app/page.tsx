'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { portfolioData, type ExperienceItem, type ProjectItem, type ContactInfo, type TechStackItem } from '@/data/portfolioData'

const sections = [
  { id: 'about', title: 'About' },
  { id: 'experience', title: 'Experience' },
  { id: 'me', title: 'Me', isHome: true },
  { id: 'projects', title: 'Projects' },
  { id: 'contact', title: 'Contact' },
]

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const handleSectionClick = (sectionId: string) => {
    if (sectionId === 'me') {
      setActiveSection(null) // Show hero page
    } else {
      setActiveSection(activeSection === sectionId ? null : sectionId)
    }
  }

  const renderSectionContent = (sectionId: string) => {
    console.log('Rendering section:', sectionId, portfolioData[sectionId as keyof typeof portfolioData])
    
    switch (sectionId) {
      case 'about':
        const techStackData = portfolioData.techStack.content as TechStackItem[]
        return (
          <div className="space-y-12">
            {/* Tech Stack Section - Now above description */}
            <div className="animate-fade-in-up animation-delay-600">
              <h3 className="text-2xl font-semibold text-blue-400 mb-8 text-center">My Tech stack</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
                {techStackData.map((tech: TechStackItem, index: number) => (
                  <a
                    key={index}
                    href={tech.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex flex-col items-center p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500/50 hover:bg-slate-800/80 transition-all duration-300 hover:scale-105 animate-fade-in-up`}
                    style={{animationDelay: `${0.8 + index * 0.1}s`}}
                  >
                    <div className="w-16 h-16 mb-4 flex items-center justify-center">
                      <Image 
                        src={tech.icon} 
                        alt={`${tech.name} icon`}
                        width={64}
                        height={64}
                        className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                      />
                    </div>
                    <h4 className="text-white font-medium text-center mb-2 group-hover:text-blue-400 transition-colors">
                      {tech.name}
                    </h4>
                    <p className="text-slate-400 text-sm text-center leading-tight">
                      {tech.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>
            
            <p className="text-slate-300 leading-relaxed text-lg whitespace-pre-line animate-fade-in-up animation-delay-800">
              {portfolioData.about.content}
            </p>
          </div>
        )
      
      case 'experience':
        return (
          <div className="space-y-8 text-left">
            {portfolioData.experience.content.map((job: ExperienceItem, index: number) => (
              <div key={index} className={`space-y-3 animate-fade-in-up`} style={{animationDelay: `${0.6 + index * 0.2}s`}}>
                <h4 className="text-xl font-semibold text-blue-400">{job.title}</h4>
                <p className="text-sm text-slate-400">{job.date}</p>
                <ul className="space-y-2 text-slate-300">
                  {job.points.slice(0, 2).map((point: string, pointIndex: number) => (
                    <li key={pointIndex} className="flex items-start">
                      <span className="text-blue-400 mr-3 mt-1 flex-shrink-0">•</span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )
      
      case 'projects':
        return (
          <div className="space-y-8 text-left">
            {portfolioData.projects.content.map((project: ProjectItem, index: number) => (
              <div key={index} className={`space-y-3 animate-fade-in-up`} style={{animationDelay: `${0.6 + index * 0.2}s`}}>
                <h4 className="text-xl font-semibold text-blue-400">{project.title}</h4>
                <p className="text-slate-300 leading-relaxed">{project.description.slice(0, 150)}...</p>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block text-blue-400 hover:text-blue-300 underline transition-colors"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        )
      
      case 'contact':
        const contactData = portfolioData.contact.content as ContactInfo
        return (
          <div className="space-y-8">
            <p className="text-slate-300 text-xl leading-relaxed animate-fade-in-up animation-delay-600 max-w-2xl mx-auto">
              Let's connect! Feel free to reach out through any of these platforms.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              <a 
                href={contactData.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-4 bg-slate-800/50 hover:bg-slate-800/80 border border-slate-700 hover:border-blue-500/50 rounded-xl p-6 transition-all duration-300 hover:scale-105 min-w-[200px]"
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  <svg className="w-10 h-10 fill-slate-300 group-hover:fill-blue-400 transition-colors" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="text-white font-semibold text-lg group-hover:text-blue-400 transition-colors">GitHub</h3>
                  <p className="text-slate-400 text-sm">View my code</p>
                </div>
              </a>
              
              <a 
                href={contactData.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-4 bg-slate-800/50 hover:bg-slate-800/80 border border-slate-700 hover:border-blue-500/50 rounded-xl p-6 transition-all duration-300 hover:scale-105 min-w-[200px]"
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  <svg className="w-10 h-10 fill-slate-300 group-hover:fill-blue-400 transition-colors" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="text-white font-semibold text-lg group-hover:text-blue-400 transition-colors">LinkedIn</h3>
                  <p className="text-slate-400 text-sm">Let's connect</p>
                </div>
              </a>
            </div>
          </div>
        )
      
      default:
        return <div className="text-red-400">Section not found: {sectionId}</div>
    }
  }

  return (
    <div className="h-screen bg-slate-900 relative overflow-hidden">
      {/* Hero Section - Always visible, fades out when section is active */}
      <div className={`flex items-center justify-center h-full relative transition-opacity duration-500 ${
        activeSection ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}>
        <div className="text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 animate-fade-in-up">
            Brandon Liang
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-8 animate-fade-in-up animation-delay-300">
            Software Developer & Boba Enthusiast
          </p>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto animate-fade-in-up animation-delay-600">
            Recent grad from the University of Toronto, aspiring Software Developer
          </p>
        </div>
      </div>

      {/* Section Content - Fades in when section is active */}
      {activeSection && (
        <div className="absolute inset-0 bg-slate-900 animate-fade-in-up">
          {/* Sticky Title for small screens, centered for larger screens */}
          <div className="sticky top-0 z-10 bg-slate-900/95 backdrop-blur-md   md:relative md:bg-transparent md:border-b-0 md:backdrop-blur-none">
            <div className="flex items-center justify-center py-4 md:py-8">
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white animate-fade-in-up">
                {portfolioData[activeSection as keyof typeof portfolioData].title}
              </h2>
            </div>
          </div>
          
          {/* Scrollable Content */}
          <div className="h-full overflow-y-auto pb-32 md:pb-24">
            <div className="max-w-4xl mx-auto px-4 py-6 md:py-0 text-center">
              <div className="text-slate-300 animate-fade-in-up animation-delay-300">
                {renderSectionContent(activeSection)}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sticky Footer Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-20 bg-slate-800/95 backdrop-blur-md border-t border-slate-600">
        <div className="flex justify-center items-center px-4 py-3">
          <div className="flex space-x-1 bg-slate-900/50 rounded-lg p-1">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant="ghost"
                size="sm"
                className={`transition-all duration-300 ${
                  section.isHome
                    ? (activeSection === null ? 'bg-green-600 text-white hover:bg-green-700' : 'text-green-400 hover:text-green-300 hover:bg-slate-700')
                    : (activeSection === section.id 
                        ? 'bg-slate-600 text-white hover:bg-slate-700' 
                        : 'text-slate-300 hover:text-white hover:bg-slate-700')
                }`}
                onClick={() => handleSectionClick(section.id)}
              >
                {section.title}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
