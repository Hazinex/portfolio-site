import Link from "next/link";
import { Sansation } from "next/font/google"
import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const sansation = Sansation({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-sansation', fallback: ['system-ui'] })

export const metadata: Metadata = {
  title: "About - Harry Ellis",
  description: "Learn more about Harry Ellis",
};

export default function ContactPage() {
  return (
		<div className="flex items-center justify-center max-w-7xl mx-auto min-h-screen">
			<section className="flex flex-col m-6 p-6 bg-muted rounded-2xl">

				<div>
					<h1 className="text-center text-4xl font-bold ">Get in touch!</h1>
					<p className={`text-center text-2xl mt-4 ${sansation.className}`}>
						Interested in collaboration, or have a question about one
						of my projects? Feel free to reach out.
					</p>
				</div>

				<div>
					<div className="flex justify-center pt-6 pb-2">
						<p>The best way to reach me is by email</p>
					</div>
					<div className="flex justify-center gap-8">
						<div className="flex flex:row items-center gap-2">
							<Mail className="w-5 h-5" />
							<Link
								href="mailto:contact@magnifyb.com"
								className="underline"
							>
								harry.ellis3@outlook.com
							</Link>
						</div>
						<div className="flex items-center gap-2">
							<Phone className="w-5 h-5" />
							<Link href="tel:+447985123327" className="underline">
								07985 123327
							</Link>
						</div>
					</div>
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
			</section>
		</div>

  );
}
