import { ProjectCard } from "@/components/project-card"
import { ProjectType } from "@/lib/types"
import { getLogo } from "@/lib/utils"
import { Sansation } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { text } from "stream/consumers"

const sansation = Sansation({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-sansation', fallback: ['system-ui'] })

const projects: ProjectType[] = [
	{
		id: 1,
		title: "Hela",
		imageSrc: "/project-images/hela/lvl2.png",
		imageAlt: "Zombie jumping towards the camera in a dimly lit room.",
		shortDescription: "5 Level Game made in Unity using C#.",
		href: "/projects/hela",
		Company: "Personal"
	},
	{
		id: 2,
		title: "Bouncy Platforms",
		imageSrc: "/project-images/bouncy-platforms/fail.jpg",
		imageAlt: "A ball bouncing around the screen",
		shortDescription: "Hyper-casual mobile game made in Unity using C#.",
		href: "/projects/bouncy-platforms",
		Company: "Personal"
	},
	{
		id: 3,
		title: "Computer Vision Damage Detection",
		imageSrc: "/project-images/smart-meters/cnnarchitecture.png",
		imageAlt: "A diagram showing a branched CNN architecture.",
		shortDescription: "Smart meter damage detection using OpenCV and a branched CNN model.",
		href: "/projects/computer-vision-damage-detection",
		Company: "TVS"
	},
	{
		id: 4,
		title: "AR4 Robotic Arm",
		imageSrc: "/project-images/ar4/shot.jpg",
		imageAlt: "A robotic arm picking up an object.",
		shortDescription: "Pick and place robotic arm controlled using computer vision object detection and classification.",
		href: "/projects/ar4-robotic-arm",
		Company: "TVS"
	},
	{
		id: 5,
		title: "Part Identification App",
		imageSrc: "/project-images/parts-app/main.jpg",
		imageAlt: "A mobile app interface showing placeholder with prompts to enter an image or take a photo.",
		shortDescription: "Computer vision based part identification mobile app created using the Godot Engine.",
		href: "/projects/part-identification-app",
		Company: "TVS"
	},
	{
		id: 6,
		title: "CesiumJS Bermuda & Liverpool",
		imageSrc: "/project-images/cesiumjs/hamilton.png",
		imageAlt: "A 3D map of Bermuda using CesiumJS.",
		shortDescription: "Interactive 3D map of Bermuda and Liverpool using CesiumJS.",
		href: "/projects/cesiumjs",
		Company: "VEC"
	},
	{
		id: 7,
		title: "MagnifyB Website",
		imageSrc: "/project-images/magnifyb/home.png",
		imageAlt: "A screenshot of the MagnifyB website homepage.",
		shortDescription: "Website built with Next.js and Tailwind CSS.",
		href: "/projects/magnifyb",
		Company: "VEC"
	},
	{
		id: 8,
		title: "Portfolio Site",
		imageSrc: "/project-images/portfolio-site/placeholder.png",
		imageAlt: "A screenshot of the portfolio website homepage.",
		shortDescription: "The website you are currently on, built with Next.js and Tailwind CSS.",
		href: "/projects/portfolio-site",
		Company: "VEC"
	}
]

const companies = [
	{
		id: 1,
		name: "Personal",
		website: "/",
		text: "Personal Projects"
	},
	{
		id: 2,
		name: "TVS",
		website: "https://www.tvsscs.com/",
		text: "TVS Supply Chain Solutions"
	},
	{
		id: 3,
		name: "VEC",
		website: "https://www.virtualengineeringcentre.com/",
		text: "Virtual Engineering Centre"
	}
]

export default function Projects() {
	return (
		<>
			<section className="flex flex-col md:flex-row gap-20">
				<div className="items-center">
					<h1 className={`pt-12 pl-12 pb-4 text-3xl font-bold ${sansation.className}`}>Projects</h1>
					<p className="pl-12 pb-6 pr-6 text-muted-foreground">Below is a selection of projects I&apos;ve worked on, spanning game development, computer vision, robotics, and web technologies.<br /> Each project highlights different skills, tools, and problem-solving approaches.</p>
					<p className="pl-12 pb-12 pr-6 text-muted-foreground">Click each project to learn more.</p>
				</div>
				<div className="md:ml-auto pt-12 pr-12 items-center">
					<h2 className={`pb-4 text-3xl text-right font-bold ${sansation.className}`}>Legend</h2>
					<p className="pl-6 text-muted-foreground justify-end text-right">Each project has a logo representing the company or organization it was created for.<br /> Below is a key and links to their websites.</p>
					<div className="flex flex-col items-end gap-2 pt-4">
						{companies.map((company) => (
							<div className="flex items-center gap-2" key={company.id}>
								<Link href={company.website}>
									<p className="text-muted-foreground text-right hover:text-foreground hover:underline">{company.text}</p>
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
			<section className="max-w-screen-2xl mx-auto">
				<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project) => (
						<ProjectCard
							key={project.id}
							title={project.title}
							href={project.href}
							imageSrc={project.imageSrc}
							imageAlt={project.imageAlt}
							shortDescription={project.shortDescription}
							Company={project.Company}
						/>
					))}
				</div>
			</section>
		</>
	)
}