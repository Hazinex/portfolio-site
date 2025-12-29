import { notFound } from "next/navigation"
import { ProjectsData } from "@/lib/projectData"
import { slugify } from "@/lib/utils"
import { ProjectGallery } from "@/components/gallery"
import { Sansation } from "next/font/google"

const sansation = Sansation({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-sansation', fallback: ['system-ui'] })

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const project = ProjectsData.find(p => slugify(p.title) === resolvedParams.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="flex flex-col md:flex-row m-6 md:m-16">

			{/* Text */}
			<article className="md:mr-16">
				<h1 className={`${sansation.className} text-4xl`}>{project.title}</h1>
				{project.paragraphs.map((paragraph) => (
					<section key={paragraph.number} className="mt-8">
						<h2 className={`${sansation.className} text-2xl`}>{paragraph.header}</h2>
						<p>{paragraph.content}</p>
					</section>
				))}
			</article>
			
			{/* Gallery */}
			<section className="max-w-lg mt-8 md:mt-0">
				<h2 className={`${sansation.className} text-3xl`}>Gallery:</h2>
				<div className="my-2">
					<p className="hidden text-muted-foreground md:block">Click the gallery to open it, then press the buttons either side of the image to navigate</p>
					<p className="text-muted-foreground md:hidden">Tap the gallery to open it, then swipe to navigate through the images</p>
				</div>
					<ProjectGallery images={project.gallery} />
				<aside className="mt-8">
					<h2 className={`${sansation.className} text-3xl`}>Technologies Used:</h2>
					<ul className="mt-2 grid grid-cols-2 gap-x-8 list-inside list-disc">
						{project.technologies.map((technology, index) => (
							<li key={index}>{technology}</li>
						))}
					</ul>
				</aside>
			</section>
    </div>
  )
}
