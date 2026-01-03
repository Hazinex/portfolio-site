'use client';

import { ParticleBackground } from "@/components/ui/particles";
import FramerTypewriter from "@/components/ui/typewriter";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Sansation } from "next/font/google";
import { useState } from "react";

const sansation = Sansation({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-sansation', fallback: ['system-ui'] })

export default function Home() {
  const [particles, setParticles] = useState(true)

  return (
    <>
      {particles && <ParticleBackground />}
      <section className="flex flex-col flex-1 items-center justify-center m-4">
        <FramerTypewriter text="Hello, I'm Harry" highlightWord="Harry" />
        <div className="flex flex-col pt-8 text-center">
          <p className={`${sansation.className} text-3xl animate-fly-up [animation-delay:2.5s] opacity-0`}>Project Engineer at the Virtual Engineering Centre</p>
          <p className={`${sansation.className} text-lg animate-fly-up [animation-delay:2.5s] opacity-0`}>Passionate about technology since my childhood, so I made my hobby my job.</p>
        </div>
        <div className="flex gap-2 pt-8 pb-4 md:pb-0">
          <Button asChild variant="outline" size="sm" className="w-20 animate-fly-up [animation-delay:2.75s] opacity-0">
            <Link href="/projects">Projects</Link>
          </Button>
          <Button asChild variant="outline" size="sm" className="w-20 animate-fly-up [animation-delay:2.75s] opacity-0">
            <Link href="/about">About</Link>
          </Button>
          <Button asChild variant="outline" size="sm" className="w-20 animate-fly-up [animation-delay:2.75s] opacity-0">
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </section>
      <Button variant="outline" size="sm" className="absolute hidden md:inline-flex m-4 w-40" onClick={() => setParticles(!particles)}>
        {particles ? "Disable Particles" : "Enable Particles"}
      </Button>
    </>
  );
}
