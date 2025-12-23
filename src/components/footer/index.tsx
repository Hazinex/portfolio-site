import Link from "next/link"
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

function Footer() {
	return (
		<footer className="flex justify-between m-10">
			<p>&copy; 2026 Harry Ellis | All rights reserved.</p>

			{/* Icon Links */}
			<div className="flex gap-4">
				<Link href="#">
					<FaLinkedin size={32} />
				</Link>
				<Link href="#">
					<FaGithub size={32} />
				</Link>
			</div>
		</footer>
	)
}

export { Footer }