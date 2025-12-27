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
}

function ProjectCard({ title, href, imageSrc, imageAlt, shortDescription, Company }: ProjectCardProps) {
	return (
		<Link
			href={href}
			className="block border rounded-xl bg-card p-4 hover:scale-105 transform transition-transform duration-300 ease-in-out"
		>
			<div className="relative w-full h-48 md:h-56 lg:h-48 rounded overflow-hidden">
				<Image
					src={imageSrc || "/project-images/templateProjectImg.jpg"}
					alt={imageAlt || "Project Image"}
					height={500}
					width={500}
					className="object-cover"
				/>
			</div>
			<div className="flex justify-between items-start mt-4 gap-2">
				<div className="flex gap-2 items-center">
					<Image
						src={getLogo(Company)}
						alt={`${Company} Logo`}
						height={25}
						width={25}
					/>
					<h2 className="font-bold text-lg">{title}</h2>
				</div>
				<div className="mt-1">
					<ArrowRight />
				</div>
			</div>
			<p className="pt-1 text-muted-foreground text-sm">{shortDescription}</p>
		</Link>
	)
}

export { ProjectCard };

{/* I had a better idea of having a black to transparent gradient overlay at the bottom of the image with the title over it, but couldn't get it to work properly. Maybe later. */}