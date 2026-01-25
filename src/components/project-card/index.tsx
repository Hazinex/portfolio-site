import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getLogo } from "@/lib/utils";

interface ProjectCardProps {
	title: string;
	imageSrc: string;
	imageAlt?: string;
	shortDescription?: string;
	href: string;
	Company: "Personal" | "TVS" | "VEC";
  delay: number;
  shouldAnimate?: boolean;
}

function ProjectCard({ title, href, imageSrc, imageAlt, shortDescription, Company, delay, shouldAnimate = true }: ProjectCardProps) {
	return (
		<Link
			href={href}
			className={`block group rounded-xl bg-card hover:bg-muted transition-all duration-300 ease-in-out ${shouldAnimate ? 'animate-fly-up opacity-0' : ''}`}
      style={{ animationDelay: `${delay}s`, animationFillMode: 'forwards' }}
		>
			<div className="relative w-full h-48 md:h-56 lg:h-48 rounded-t-lg overflow-hidden">
				<Image
					src={imageSrc || "/project-images/templateProjectImg.jpg"}
					alt={imageAlt || "Project Image"}
					height={500}
					width={500}
					className="object-cover w-full h-full rounded-t-lg group-hover:scale-110 origin-top transition-transform duration-300 ease-in-out"
				/>
				<div
					className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
				/>
			</div>
			<div className="p-4">
				<div className="flex justify-between items-start gap-2">
					<div className="flex gap-2 items-center">
						<div className="p-1 bg-muted group-hover:bg-muted-foreground/10 transition-colors rounded-md">
							<Image
								src={getLogo(Company)}
								alt={`${Company} Logo`}
								height={25}
								width={25}
							/>
						</div>
						<h2 className="font-bold text-lg">{title}</h2>
					</div>
					<div className="mt-1">
						<ArrowRight className="group-hover:translate-x-1 transition-all duration-400 text-muted-foreground group-hover:text-foreground" />
					</div>
				</div>
				<p className="pt-1 text-muted-foreground group-hover:text-foreground/90 transition-colors text-sm line-clamp-2">{shortDescription}</p>
			</div>
		</Link>
	)
}

export { ProjectCard };