import { MainProjectsData, MiniProjectsData } from "@/lib/projectData"
import { ProjectTabs } from "@/components/project-tabs"
import { CompanyData } from "@/lib/companyData"
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
			<div>
				<section className="flex flex-col md:flex-row gap-20 mb-12">
					<div className="items-center animate-fly-right">
						<h1 className={`pt-12 pl-6 md:pl-12 pb-4 text-3xl font-bold ${sansation.className}`}>Projects</h1>
						<p className="px-6 md:pl-12 pb-6 md:pr-6 text-muted-foreground">Below is a selection of projects I&apos;ve worked on, spanning game development, computer vision, robotics, and web technologies.<br /> Each project highlights different skills, tools, and scanarios.</p>
						<p className="px-6 md:pl-12 pb-6 md:pr-6 text-muted-foreground">You can swap between seeing my main projects and smaller mini projects that I think are worth mentioning, but are on a smaller scale to my main ones.</p>
						<p className="pl-6 md:pl-12 md:pb-12 md:pr-6 text-muted-foreground">Click each project to learn more.</p>
					</div>
					<div className="md:ml-auto md:pt-12 pr-6 md:pr-12 items-center animate-fly-left">
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
				<hr className="mt-8 mb-8 mx-4 md:mx-32 animate-fly-up" />
				<ProjectTabs MainProjectsData={MainProjectsData} MiniProjectsData={MiniProjectsData} />
			</div>
		</>
	)
}