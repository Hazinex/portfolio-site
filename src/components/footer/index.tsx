import Link from "next/link"
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
	return (
		<footer className="flex justify-between bg-background py-10 border-t-4 border-accent/60 pt-10 px-4 z-10">
			<p>&copy; 2026 Harry Ellis | All rights reserved.</p>

			{/* Icon Links */}
			<div className="flex gap-4">
				<Link href="https://www.linkedin.com/in/harryellis3/">
					<FaLinkedin size={32} />
				</Link>
				<Link href="https://github.com/Hazinex">
					<FaGithub size={32} />
				</Link>
			</div>
		</footer>
	)
}

export { Footer }