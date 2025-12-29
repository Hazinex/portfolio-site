import { ProjectCard } from "@/components/project-card"
import { ProjectsData } from "@/lib/projectData"
import { CompanyData } from "@/lib/companyData"
import { slugify } from "@/lib/utils"
import { getLogo } from "@/lib/utils"
import { Sansation } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Harry Ellis",
  description: "View my projects",
};

const sansation = Sansation({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-sansation', fallback: ['system-ui'] })

export default function Projects() {
	return (
		<>
			<section className="flex flex-col md:flex-row gap-20">
				<div className="items-center">
					<h1 className={`pt-12 pl-12 pb-4 text-3xl font-bold ${sansation.className}`}>Projects</h1>
					<p className="pl-12 pb-6 pr-6 text-muted-foreground">Below is a selection of projects I&apos;ve worked on, spanning game development, computer vision, robotics, and web technologies.<br /> Each project highlights different skills, tools, and problem-solving approaches.</p>
					<p className="pl-12 md:pb-12 pr-6 text-muted-foreground">Click each project to learn more.</p>
				</div>
				<div className="md:ml-auto md:pt-12 pr-12 items-center">
					<h2 className={`pb-4 text-3xl text-right font-bold ${sansation.className}`}>Legend</h2>
					<p className="pl-6 text-muted-foreground justify-end text-right">Each project has a logo representing the company or organization it was created for.<br /> Below is a key and links to their websites.</p>
					<div className="flex flex-col items-end gap-2 pt-4">
						{CompanyData.map((company) => (
							<div className="flex items-center gap-2" key={company.id}>
								<Link href={company.website}>
									<p className="text-muted-foreground text-right hover:text-foreground underline md:no-underline md:hover:underline">{company.text}</p>
								</Link>
								<Image
									src={getLogo(company.name)}
									alt={`${company.name} Logo`}
									height={50}
									width={50}
								/>
							</div>
						))}
					</div>
				</div>
			</section>
			<hr className="my-8 mb-16" />
			<section className="max-w-screen-2xl mx-auto px-6 mb-8">
				<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{ProjectsData.map((project) => (
						<ProjectCard
							key={project.id}
							title={project.title}
							href={`projects/${slugify(project.title)}`}
							imageSrc={project.thumbnailSrc}
							imageAlt={project.thumbnailAlt}
							shortDescription={project.shortDescription}
							Company={project.Company}
						/>
					))}
				</div>
			</section>
		</>
	)
}