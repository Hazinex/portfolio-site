import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sansation } from "next/font/google"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Harry Ellis",
  description: "Learn more about Harry Ellis",
};

const sansation = Sansation({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-sansation', fallback: ['system-ui'] })

export default function About() {
  return (
		<>
			{/* Hero Section */}
			<section className="flex flex-col items-center justify-center md:flex-row md:items-center md:gap-12">
				<div>
					<h1 className="text-center text-4xl font-bold md:text-left ">Hey, I&apos;m Harry!</h1>
					<p className={`text-center text-2xl md:text-left ${sansation.className}`}> Project Engineer at the Virtual Engineering Center</p>
				</div>
				<div className="relative w-fit mt-6">
					<div className="absolute -bottom-6 -right-6 w-full h-full rounded-xl border-2 border-accent" />
					<Image
						className="relative rounded-xl object-cover"
						src="/about-pics/pfp.jpg"
						alt="Profile Picture"
						width={250}
						height={250}
					/>
				</div>
			</section>

			<div className="flex flex-col items-center justify-center mt-16 md:flex-row md:items-center md:gap-12">
				<p className="text-center">You can also download or view my CV here:</p>
				<div className="flex gap-2">
					<Button>
						<a href="CV_HarryEllis.pdf" target="_blank" rel="noopener noreferrer">View</a>
					</Button>
					<Button>
						<a href="CV_HarryEllis.pdf" download>Download</a>
					</Button>
				</div>
			</div>

			{/* Articles */}
			<section className="mt-16">

				{/* University Article */}
				<div className="bg-muted p-8 mb-8">
					<article className="flex flex-col max-w-7xl mx-auto items-center md:flex-row md:items-start">
						<div className="flex-1">
						<h2 className={`text-2xl ${sansation.className}`}>Edge Hill University</h2>
							<p className="mt-4 pr-6">
								Hello! I&apos;m Harry, a Project Engineer at the Virtual Engineering Center (VEC) based in
								Liverpool, UK. I graduated from Edge Hill University in 2024 with a degree in
								BSc Computer Science with a first. My degree provided me with a solid foundation in many disciplines such as
								software development, data structures, algorithms, databases, web development, and artificial intelligence.
								During my time at university, I also gained practical experience through various projects, internships,
								and within extracurricular clubs, cyber-security club and Research club.
								I went on to present my project, “Using machine learning to detect phishing attacks to overcome the flaws of traditional spam filters”
								at the universities end of year showcase.
							</p>
						</div>
						<div className="pt-8 md:pt-0 md:pl-8">
							<Image
								className="rounded-xl drop-shadow-lg drop-shadow-foreground/50"
								src="/about-pics/graduation.jpg"
								alt="VEC Building"
								width={400}
								height={300}
							/>
						</div>
					</article>
				</div>

				{/* TVS SCS Article */}
				<div className="p-8">
					<article className="flex flex-col max-w-7xl mx-auto items-center md:items-start md:text-right md:flex-row">
						<div className="pb-8 md:pb-0 pr-8">
							<Image
								className="rounded-xl drop-shadow-lg drop-shadow-foreground/50"
								src="/project-images/ar4/warehouse.jpg"
								alt="VEC Building"
								width={400}
								height={300}
							/>
						</div>
						<div className="flex-1">
						<h2 className={`text-2xl ${sansation.className}`}>TVS Supply Chain Solutions - AI Developer</h2>
							<p className="mt-4">
								After graduating in 2024, I joined TVS Supply Chain Solutions as an AI Developer.
								Here, I worked on developing AI-driven solutions to optimize supply chain operations,
								improving efficiency and reducing costs for our clients. My role involved investigating current policies and procedures,
								identifying areas for improvement, and implementing AI technologies to streamline processes.
								This experience allowed me to apply my academic knowledge in a practical setting, enhancing my skills in AI and machine learning.
							</p>
						</div>
					</article>
				</div>

				{/* VEC Article */}
				<div className="bg-muted p-8 mb-8">
					<article className="flex flex-col max-w-7xl mx-auto items-center md:flex-row md:items-start">
						<div className="flex-1">
						<h2 className={`text-2xl ${sansation.className}`}>Virtual Engineering Center - Project Engineer</h2>
							<p className="mt-4 pr-6">
								After a year at TVS SCS, I was made redundant due to budget cuts.
								However, this led me to my current role as a project engineer at the Virtual Engineering Center (VEC) in Liverpool.
								My role is currently focused on front-end web development using modern frameworks such as Next.js and Svelte.
							</p>
						</div>
						<div className="pt-8 md:pt-0 md:pl-8">
							<Image
								className="rounded-xl drop-shadow-lg drop-shadow-foreground/50"
								src="/about-pics/vec-daresbury.png"
								alt="VEC Building"
								width={400}
								height={300}
							/>
						</div>
					</article>
				</div>

				{/* Skills Article */}
				<div className="p-8">
					<article className="flex flex-col max-w-7xl mx-auto">
						<h2 className={`text-2xl ${sansation.className}`}>Skills / Technologies</h2>

						<div className="grid grid-cols-1 md:grid-cols-3 mt-8">

							<div>
								<h3 className="mt-4 font-semibold">Proficient</h3>
								<ul className="mt-4 list-disc list-inside">
									<li>Python - PyTorch, OpenCV, etc.</li>
									<li>Git</li>
									<li>Windows</li>
								</ul>
							</div>

							<div>
								<h3 className="mt-4 font-semibold">Intermediate</h3>
								<ul className="mt-4 list-disc list-inside">
									<li>JavaScript / TypeScript</li>
									<li>Next.js</li>
									<li>Unity & C#</li>
									<li>Godot & GDScript</li>
									<li>Java</li>
									<li>Linux</li>
								</ul>
							</div>

							<div>
								<h3 className="mt-4 font-semibold">Basic</h3>
								<ul className="mt-4 list-disc list-inside">
									<li>SQL</li>
									<li>Svelte</li>
									<li>Docker</li>
								</ul>
							</div>

						</div>
					</article>
				</div>

			</section>
		</>
	)
}