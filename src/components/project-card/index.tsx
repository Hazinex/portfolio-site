import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


interface ProjectCardProps {
	title: string;
	href: string;
	imageSrc: string;
	imageAlt?: string;
}

function ProjectCard({ title, href, imageSrc }: ProjectCardProps) {
  return (
		<Link href={href} className="">
			<div className="border rounded-xl bg-card p-4 w-lg h-lg hover:scale-105 transform transition-transform duration-300 ease-in-out">
				<Image
					src={imageSrc}
					alt={title}
					height={500}
					width={500}
					className="rounded"
				/>
				<div className="flex justify-between items-center mt-4">
          <h2 className="font-bold text-lg">{title}</h2>
          <ArrowRight />
        </div>
			</div>
		</Link>
  )
}

export { ProjectCard };