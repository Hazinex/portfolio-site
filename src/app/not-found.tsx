'use client';

import { useRouter } from 'next/navigation'
import { Sansation } from 'next/font/google'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react';

const sansation = Sansation({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-sansation', fallback: ['system-ui'] })
 
export default function NotFound() {
	const router = useRouter();
  return (
    <div className='flex flex-col items-center justify-center m-4'>
			<p className={`text-9xl md:text-[20em] text-shadow-[0_10px_10px_rgb(0_0_0/0.25)] text-shadow-accent ${sansation.className}`}>404</p>
      <h1 className={`text-4xl text-center font-bold ${sansation.className}`}>Page Not Found</h1>
      <p className='mt-4 text-center'>Sorry the page you are looking for does not exist...</p>
			<Button variant="outline" className="mt-6" onClick={() => router.back()}>
				<ArrowLeft />
      	Go Back
			</Button>		
    </div>
  )
}

{/* Add an animated black background with grey splotches */}