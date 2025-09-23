'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { portfolioData, type ExperienceItem, type ProjectItem, type ContactInfo, type TechStackItem, techIconMap } from '@/data/portfolioData'

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
              <h3 className="text-2xl font-semibold text-primary mb-8 text-center">My Tech stack</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
                {techStackData.map((tech: TechStackItem, index: number) => (
                  <a
                    key={index}
                    href={tech.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex flex-col items-center p-6 bg-card rounded-xl border border-border hover:border-primary/50 hover:bg-accent transition-all duration-300 hover:scale-105 animate-fade-in-up`}
                    style={{animationDelay: `${0.4 + index * 0.05}s`}}
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
                    <h4 className="text-card-foreground font-medium text-center mb-2 group-hover:text-primary transition-colors">
                      {tech.name}
                    </h4>
                    <p className="text-muted-foreground text-sm text-center leading-tight">
                      {tech.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>
            
            <p className="text-foreground leading-relaxed text-lg whitespace-pre-line animate-fade-in-up animation-delay-800">
              {portfolioData.about.content}
            </p>
          </div>
        )
      
      case 'experience':
        return (
          <div className="space-y-8 text-left">
            <p className="text-muted-foreground text-sm text-center leading-tight">
              A Software Developer with Full Stack and Web Dev proficiency. Here are some of my experiences
            </p>
            {portfolioData.experience.content.map((job: ExperienceItem, index: number) => (
              <div key={index} className={`space-y-3 animate-fade-in-up`} style={{animationDelay: `${0.3 + index * 0.1}s`}}>
                <h4 className="text-xl font-semibold text-primary">{job.title}</h4>
                <p className="text-sm text-muted-foreground">{job.date}</p>
                <ul className="space-y-2 text-foreground">
                  {job.points.slice(0, 5).map((point: string, pointIndex: number) => (
                    <li key={pointIndex} className="flex items-start">
                      <span className="text-primary mr-3 mt-1 flex-shrink-0">•</span>
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
          <div className="space-y-8">
            {portfolioData.projects.content.map((project: ProjectItem, index: number) => (
              <div 
                key={index} 
                className={`bg-card border border-border hover:border-primary/50 hover:bg-accent rounded-xl p-8 transition-all duration-300  animate-fade-in-up`}
                style={{animationDelay: `${0.3 + index * 0.1}s`}}
              >
                <div className="space-y-6">
                  {/* Project Title */}
                  <h4 className="text-2xl font-semibold text-primary">{project.title}</h4>
                  
                  {/* Project Description */}
                  <p className="text-foreground leading-relaxed text-lg">{project.description}</p>
                  
                  {/* Tech Stack Icons */}
                  <div className="space-y-3 text-center">
                    <h5 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Built with</h5>
                    <div className="flex flex-wrap gap-3 justify-center">
                      {project.techStack.map((tech: string, techIndex: number) => (
                        <div 
                          key={techIndex}
                          className="flex items-center space-x-2 bg-secondary hover:bg-secondary/80 rounded-lg px-3 py-2 transition-all duration-200 hover:scale-105"
                        >
                          <div className="w-6 h-6 flex items-center justify-center">
                            <Image 
                              src={techIconMap[tech] || techIconMap['JavaScript']} 
                              alt={`${tech} icon`}
                              width={24}
                              height={24}
                              className="w-full h-full object-contain filter brightness-90 hover:brightness-110 transition-all duration-200"
                            />
                          </div>
                          <span className="text-secondary-foreground text-sm font-medium">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Project Link Button */}
                  <div className="pt-2">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group inline-flex items-center space-x-3 bg-primary/10 hover:bg-primary/20 border border-primary/30 hover:border-primary/50 rounded-lg px-6 py-3 transition-all duration-300 hover:scale-105"
                    >
                      <svg className="w-5 h-5 text-primary group-hover:text-primary/80 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span className="text-primary group-hover:text-primary/80 font-medium transition-colors">
                        View Project
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
      
      case 'contact':
        const contactData = portfolioData.contact.content as ContactInfo
        return (
          <div className="space-y-8">
            <p className="text-foreground text-xl leading-relaxed animate-fade-in-up animation-delay-600 max-w-2xl mx-auto">
              Let&apos;s connect! Feel free to reach out through any of these platforms.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <a 
                href={contactData.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-4 bg-card hover:bg-accent border border-border hover:border-primary/50 rounded-xl p-6 transition-all duration-300 hover:scale-105 min-w-[200px]"
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  <svg className="w-10 h-10 fill-muted-foreground group-hover:fill-primary transition-colors" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="text-card-foreground font-semibold text-lg group-hover:text-primary transition-colors">GitHub</h3>
                  <p className="text-muted-foreground text-sm">View my code</p>
                </div>
              </a>
              
              <a 
                href={contactData.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-4 bg-card hover:bg-accent border border-border hover:border-primary/50 rounded-xl p-6 transition-all duration-300 hover:scale-105 min-w-[200px]"
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  <svg className="w-10 h-10 fill-muted-foreground group-hover:fill-primary transition-colors" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="text-card-foreground font-semibold text-lg group-hover:text-primary transition-colors">LinkedIn</h3>
                  <p className="text-muted-foreground text-sm">Let&apos;s connect</p>
                </div>
              </a>
              
              <a 
                href={contactData.resume} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-4 bg-card hover:bg-accent border border-border hover:border-primary/50 rounded-xl p-6 transition-all duration-300 hover:scale-105 min-w-[200px]"
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  <svg className="w-10 h-10 fill-muted-foreground group-hover:fill-primary transition-colors" viewBox="0 0 24 24">
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="text-card-foreground font-semibold text-lg group-hover:text-primary transition-colors">Resume</h3>
                  <p className="text-muted-foreground text-sm">Download PDF</p>
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
    <div className="h-screen bg-background relative overflow-hidden">
      {/* Hero Section - Always visible, fades out when section is active */}
      <div className={`flex items-center justify-center h-full relative transition-opacity duration-500 ${
        activeSection ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}>
        <div className="text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-4 animate-fade-in-up">
            Brandon Liang
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up animation-delay-300">
            Software Developer & Ice cream lover
          </p>
          <p className="text-lg text-muted-foreground/70 max-w-2xl mx-auto animate-fade-in-up animation-delay-600">
            Exploring the world, one scoop at a time
          </p>
        </div>
      </div>

      {/* Section Content - Fades in when section is active */}
      {activeSection && (
        <div className="absolute inset-0 bg-background animate-fade-in-up flex flex-col">
          {/* Sticky Title for small screens, centered for larger screens */}
          <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-md md:relative md:bg-transparent md:border-b-0 md:backdrop-blur-none flex-shrink-0">
            <div className="flex items-center justify-center py-4 md:py-8">
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-foreground animate-fade-in-up">
                {portfolioData[activeSection as keyof typeof portfolioData].title}
              </h2>
            </div>
          </div>
          
          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="max-w-4xl mx-auto px-4 py-6 md:py-0 text-center">
              <div className="text-foreground animate-fade-in-up animation-delay-300">
                {renderSectionContent(activeSection)}
              </div>
              {/* Extra spacing to ensure content can scroll above footer */}
              <div className="h-24 sm:h-20 md:h-16"></div>
            </div>
          </div>
        </div>
      )}

      {/* Sticky Footer Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-20 bg-card/95 backdrop-blur-md border-t border-border">
        <div className="flex justify-center items-center px-4 py-2 sm:py-3 min-h-[60px] sm:min-h-[64px]">
          <div className="flex flex-wrap justify-center space-x-1 bg-secondary/50 rounded-lg p-1">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant="ghost"
                size="sm"
                className={`transition-all duration-300 text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2 ${
                  section.isHome
                    ? (activeSection === null ? 'bg-primary text-primary-foreground shadow-md border border-primary/20' : 'text-primary hover:text-primary-foreground hover:bg-primary/80 hover:shadow-sm')
                    : (activeSection === section.id 
                        ? 'bg-primary/90 text-primary-foreground shadow-md border border-primary/20' 
                        : 'text-muted-foreground hover:text-primary-foreground hover:bg-primary/70 hover:shadow-sm')
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
