'use client';

import { ProjectCard } from '@/components/project-card'
import { Button } from '@/components/ui/button';
import { slugify } from "@/lib/utils"
import { ProjectType } from '@/lib/projectData';
import { useState, useEffect, useRef } from 'react'
import { Funnel } from 'lucide-react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/shadcn/dialog";
import { Checkbox } from '@/components/ui/shadcn/checkbox';
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSeparator, FieldSet } from "@/components/ui/shadcn/field";


interface ProjectTabsProps {
  MainProjectsData: ProjectType[];
  MiniProjectsData: ProjectType[];
} 

function ProjectTabs({ MainProjectsData, MiniProjectsData }: ProjectTabsProps) {
  const [activeTab, setActiveTab] = useState('main')
  const [projectsData, setProjectsData] = useState<ProjectType[]>(MainProjectsData)
  const isInitialLoad = useRef(true)

  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleItem = (item: string, list: string[], setList: (val: string[]) => void) => {
    setList(
      list.includes(item) 
        ? list.filter((i) => i !== item) 
        : [...list, item]
    );
  };

  const uniqueTags = Array.from(
    new Set(projectsData.flatMap(project => project.tags || []))
  );
  
  useEffect(() => {
    isInitialLoad.current = false;
  }, []);

  function handleTabChange(tab: 'main' | 'mini') {
    isInitialLoad.current = false
    setActiveTab(tab)
    setProjectsData(tab === 'main' ? MainProjectsData : MiniProjectsData)
  }

  return (
    <>
      <section className="max-w-screen-2xl mx-auto px-6 mb-8">
        <div className='flex flex-col md:flex-row my-8 items-center'>
          <div className='flex gap-4 mr-auto items-center'>
            <Button variant={'ghost'} size={'sm'} className={activeTab === 'main' ? 'relative md:border-b-8 md:border-accent animate-fly-up bg-accent md:bg-background' : 'animate-fly-up'} onClick={() => handleTabChange('main')}>
              Main Projects
            </Button>
            <Button variant={'ghost'} size={'sm'} className={activeTab === 'mini' ? 'relative md:border-b-8 md:border-accent animate-fly-up bg-accent md:bg-background' : 'animate-fly-up'} onClick={() => handleTabChange('mini')}>
              Mini Projects
            </Button>
          </div>
          <div className='flex mr-auto md:mr-0 mt-4 md:mt-0 md:ml-auto'>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant={'secondary'} size={'sm'} className='relative animate-fly-up'>
                  Filters
                  <Funnel className='ml-2 h-4 w-4' />
                </Button>
              </DialogTrigger>
              <DialogContent className='w-[94vw] md:max-w-lg'>
                <DialogHeader>
                  <DialogTitle>Filters</DialogTitle>
                  <DialogDescription>
                    Filter projects by company or the tag.
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-4 overflow-y-auto max-h-[50vh] px-1">
                  <p className="text-sm text-muted-foreground">Company</p>
                  <div className="mt-2 space-y-2">
                    {Array.from(new Set(projectsData.map(p => p.Company))).map(company => (
                      <Field key={company} orientation="horizontal">
                        <Checkbox 
                          id={company} 
                          checked={selectedCompanies.includes(company)}
                          onCheckedChange={() => toggleItem(company, selectedCompanies, setSelectedCompanies)}
                        />
                        <FieldLabel htmlFor={company}>{company}</FieldLabel>
                      </Field>
                    ))}
                  </div>
                  <FieldSeparator className="my-4" />
                  <p className="text-sm text-muted-foreground mt-4">Tags</p>
                  <div className="grid grid-cols-1 whitespace-nowrap md:grid-cols-2 mt-2 space-y-2">
                    {uniqueTags.map(tag => (
                      <Field key={tag} orientation="horizontal">
                        <Checkbox 
                          id={tag} 
                          checked={selectedTags.includes(tag)}
                          onCheckedChange={() => toggleItem(tag, selectedTags, setSelectedTags)}
                        />
                        <FieldLabel htmlFor={tag}>{tag}</FieldLabel>
                      </Field>
                    ))}
                  </div>
                  <FieldSeparator className="my-4" />
                  <Button asChild variant="default" className="w-full mb-4">
                    <DialogTrigger>
                      Close
                    </DialogTrigger>
                  </Button>
                </div>

              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData
            .filter(project => project.released)
            .filter(project => {
              const companyMatch = selectedCompanies.length === 0 || selectedCompanies.includes(project.Company);
              const tagMatch = selectedTags.length === 0 || project.tags?.some(tag => selectedTags.includes(tag));
              return companyMatch && tagMatch;
            })
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