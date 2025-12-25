import { ProjectCard } from "@/components/project-card"

import { ProjectType } from "@/lib/types"

const projects: ProjectType[] = [
	{
		id: 1,
		title: "Hela",
		imageSrc: "/templateProjectImg.jpg",
		imageAlt: "",
		shortDescription: "5 Level Game made in Unity using C#.",
		href: "/projects/hela",
		Company: "Personal"
	},
	{
		id: 2,
		title: "Bouncy Platforms",
		imageSrc: "/templateProjectImg.jpg",
		imageAlt: "",
		shortDescription: "Hyper-casual mobile game made in Unity using C#.",
		href: "/projects/bouncy-platforms",
		Company: "Personal"
	},
	{
		id: 3,
		title: "Computer Vision Damage Detection",
		imageSrc: "/templateProjectImg.jpg",
		imageAlt: "",
		shortDescription: "Smart meter damage detection using OpenCV and a branched CNN model.",
		href: "/projects/computer-vision-damage-detection",
		Company: "TVS"
	},
	{
		id: 4,
		title: "AR4 Robotic Arm",
		imageSrc: "/templateProjectImg.jpg",
		imageAlt: "",
		shortDescription: "Pick and place robotic arm controlled using computer vision object detection and classification.",
		href: "/projects/ar4-robotic-arm",
		Company: "TVS"
	},
	{
		id: 5,
		title: "Part Identification App",
		imageSrc: "/templateProjectImg.jpg",
		imageAlt: "",
		shortDescription: "Computer vision based part identification mobile app created using the Godot Engine.",
		href: "/projects/part-identification-app",
		Company: "TVS"
	},
	{
		id: 6,
		title: "CesiumJS Bermuda & Liverpool",
		imageSrc: "/templateProjectImg.jpg",
		imageAlt: "",
		shortDescription: "Interactive 3D map of Bermuda and Liverpool using CesiumJS.",
		href: "/projects/cesiumjs",
		Company: "VEC"
	},
	{
		id: 7,
		title: "MagnifyB Website",
		imageSrc: "/templateProjectImg.jpg",
		imageAlt: "",
		shortDescription: "Website built with Next.js and Tailwind CSS.",
		href: "/projects/magnifyb",
		Company: "VEC"
	},
	{
		id: 8,
		title: "Portfolio Site",
		imageSrc: "/templateProjectImg.jpg",
		imageAlt: "",
		shortDescription: "The website you are currently on, built with Next.js and Tailwind CSS.",
		href: "/projects/portfolio-site",
		Company: "VEC"
	}
]

export default function Projects() {
	return (
		<>
			<h1 className="p-6">Projects Page</h1>
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