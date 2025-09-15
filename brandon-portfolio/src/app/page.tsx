'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { portfolioData, type ExperienceItem, type ProjectItem, type ContactInfo } from '@/data/portfolioData'

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
        return (
          <div className="space-y-4">
            <p className="text-slate-300 leading-relaxed text-lg whitespace-pre-line animate-fade-in-up animation-delay-600">
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
          <div className="space-y-6">
            <div className="space-y-4 animate-fade-in-up animation-delay-600">
              <div className="animate-fade-in-up" style={{animationDelay: '0.8s'}}>
                <span className="text-blue-400 font-medium text-lg">Email: </span>
                <a href={`mailto:${contactData.email}`} className="text-slate-300 hover:text-blue-400 transition-colors">
                  {contactData.email}
                </a>
              </div>
              <div className="animate-fade-in-up" style={{animationDelay: '1.0s'}}>
                <span className="text-blue-400 font-medium text-lg">Phone: </span>
                <span className="text-slate-300">{contactData.phone}</span>
              </div>
              <div className="animate-fade-in-up" style={{animationDelay: '1.2s'}}>
                <span className="text-blue-400 font-medium text-lg">Location: </span>
                <span className="text-slate-300">{contactData.location}</span>
              </div>
            </div>
            <div className="flex space-x-6 pt-4 animate-fade-in-up" style={{animationDelay: '1.4s'}}>
              <a 
                href={contactData.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline transition-colors text-lg"
              >
                GitHub →
              </a>
              <a 
                href={contactData.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline transition-colors text-lg"
              >
                LinkedIn →
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
        <div className="absolute inset-0 flex items-center justify-center h-full px-4 py-8 animate-fade-in-up overflow-y-auto bg-slate-900">
          <div className="max-w-4xl w-full pb-24 text-center">
            <div className="mb-8 animate-fade-in-up">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {portfolioData[activeSection as keyof typeof portfolioData].title}
              </h2>
            </div>
            <div className="text-slate-300 animate-fade-in-up animation-delay-300">
              {renderSectionContent(activeSection)}
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
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
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
