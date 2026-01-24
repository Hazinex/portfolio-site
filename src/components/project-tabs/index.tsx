'use client';

import { ProjectCard } from '@/components/project-card'
import { Button } from '@/components/ui/button';
import { slugify } from "@/lib/utils"
import { ProjectType } from '@/lib/projectData';
import { useState, useRef } from 'react'

interface ProjectTabsProps {
  MainProjectsData: ProjectType[];
  MiniProjectsData: ProjectType[];
} 

function ProjectTabs({ MainProjectsData, MiniProjectsData }: ProjectTabsProps) {
  const [activeTab, setActiveTab] = useState('main')
  const [projectsData, setProjectsData] = useState<ProjectType[]>(MainProjectsData)
  const isInitialLoad = useRef(true)
  
  function handleTabChange(tab: 'main' | 'mini') {
    isInitialLoad.current = false
    setActiveTab(tab)
    setProjectsData(tab === 'main' ? MainProjectsData : MiniProjectsData)
  }

  return (
    <>
      <section className="max-w-screen-2xl mx-auto px-6 mb-8">
        <div className='flex my-4 mb-8 gap-4'>
          <Button variant={'ghost'} size={'sm'} className={activeTab === 'main' ? 'relative border-b-8 border-accent animate-fly-up' : 'animate-fly-up'} onClick={() => handleTabChange('main')}>
            Main Projects
          </Button>
          <Button variant={'ghost'} size={'sm'} className={activeTab === 'mini' ? 'relative border-b-8 border-accent animate-fly-up' : 'animate-fly-up'} onClick={() => handleTabChange('mini')}>
            Mini Projects
          </Button>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData
          .filter(project => project.released)
          .slice()
          .reverse()
          .map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              href={`projects/${slugify(project.title)}`}
              imageSrc={project.thumbnailSrc}
              imageAlt={project.thumbnailAlt}
              shortDescription={project.shortDescription}
              Company={project.Company}
              delay={isInitialLoad.current ? index * 0.1 + 0.5 : 0}
              shouldAnimate={isInitialLoad.current}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export { ProjectTabs }