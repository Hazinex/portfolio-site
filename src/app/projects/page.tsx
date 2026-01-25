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
				<section className="max-w-screen-2xl mx-auto px-6 md:px-12 py-12">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
						<div className="md:col-span-2 animate-fly-right">
							<h1 className={`pb-6 text-4xl font-bold ${sansation.className}`}>Projects</h1>
							<div className="space-y-4">
								<p className="text-muted-foreground">Below is a selection of projects I&apos;ve worked on, spanning game development, computer vision, robotics, and web technologies. Each project highlights different skills, tools, and scenarios.</p>
								<p className="text-muted-foreground">You can swap between seeing my main projects and smaller mini projects that I think are worth mentioning, but are on a smaller scale to my main ones.</p>
								<p className="text-muted-foreground">Click each project to learn more.</p>
							</div>
						</div>
						<div className="animate-fly-left">
							<h2 className={`pb-4 text-2xl font-bold ${sansation.className}`}>Legend</h2>
							<p className="text-muted-foreground text-sm pb-6">Each project has a logo representing the company or organization it was created for. Below is a key and links to their websites.</p>
							<div className="flex flex-col gap-3">
								{CompanyData.map((company) => (
									<div className="flex items-center gap-3" key={company.id}>
										<Image
											src={getLogo(company.name)}
											alt={`${company.name} Logo`}
											height={40}
											width={40}
										/>
										<Link href={company.website}>
											<p className="text-muted-foreground text-sm hover:text-foreground underline">{company.text}</p>
										</Link>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>
				<hr className="my-8 animate-fly-up" />
				<ProjectTabs MainProjectsData={MainProjectsData} MiniProjectsData={MiniProjectsData} />
			</div>
		</>
	)
}