import Link from "next/link";
import { Sansation } from "next/font/google"
import type { Metadata } from "next";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ContactForm } from "@/components/contact-form";

const sansation = Sansation({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-sansation', fallback: ['system-ui'] })

export const metadata: Metadata = {
  title: "About - Harry Ellis",
  description: "Learn more about Harry Ellis",
};

export default function ContactPage() {
  return (
		<div className="flex flex-col flex-1 items-center justify-center m-4 md:m-12">
			<div className="bg-muted rounded-2xl p-4 md:p-8 max-w-2xl">
				<div>
					<h1 className="text-center text-2xl md:text-4xl font-bold ">Get in touch!</h1>
					<p className={`text-center text-lg md:text-2xl mt-4 ${sansation.className}`}>
						Interested in collaboration, or have a question about one
						of my projects? Feel free to reach out.
					</p>
				</div>
				<div>
					<ContactForm />
				</div>
				<div className="flex justify-center items-center pt-6">
					<p className="pr-6">You can also find me here:</p>
					<div className="flex gap-4">
						<Link href="#">
							<FaLinkedin size={32} />
						</Link>
						<Link href="#">
							<FaGithub size={32} />
						</Link>
					</div>
				</div>
			</div>
		</div>
  );
}
