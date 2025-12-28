import { ParticleBackground } from "@/components/ui/particles";
import FramerTypewriter from "@/components/ui/typewriter";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Sansation } from "next/font/google";

const sansation = Sansation({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-sansation', fallback: ['system-ui'] })

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <section className="flex flex-col flex-1 items-center justify-center m-4">
        <FramerTypewriter text="Hello, I'm Harry" highlightWord="Harry" />
        <div className="flex flex-col pt-8 text-center">
          <p className={`${sansation.className} text-3xl`}>Project Engineer at the Virtual Engineering Centre</p>
          <p className={`${sansation.className} text-lg`}>Passionate about technology since my childhood, made my hobby my job.</p>
        </div>
        <div className="flex gap-2 pt-8">
          <Button asChild variant="outline" size="sm" className="w-20">
            <Link href="/projects">Projects</Link>
          </Button>
          <Button asChild variant="outline" size="sm" className="w-20">
            <Link href="/about">About</Link>
          </Button>
          <Button asChild variant="outline" size="sm" className="w-20">
            <Link href="/contact">Contact</Link>
          </Button>

        </div>
      </section>
    </>
  );
}
