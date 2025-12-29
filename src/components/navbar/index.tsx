'use client';

import { Button } from '@/components/ui/button';
import { MobileNavMenu } from '@/components/mobile-navmenu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Bebas_Neue } from 'next/font/google';

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
});

function Navbar() {
	const pathname = usePathname();
	return (
		<nav className='flex items-center justify-between p-4 gap-4 sticky top-0 z-10 bg-background w-full border-b-4 border-accent/60'>
			<Link href="/">
				<h1 className={`text-5xl font-bold ${bebasNeue.className}`}>Harry Ellis</h1>
			</Link>

			{/* Desktop Navigation */}
			<div className="hidden md:flex items-center gap-4">
				<Button asChild variant="ghost" size="sm" className={pathname === '/' ? 'relative border-b-8 border-accent' : ''}>
					<Link href="/">Home</Link>
				</Button>
				<Button asChild variant="ghost" size="sm" className={pathname === '/projects' ? 'relative border-b-8 border-accent' : ''}>
					<Link href="/projects">Projects</Link>
				</Button>
				<Button asChild variant="ghost" size="sm" className={pathname === '/about' ? 'relative border-b-8 border-accent' : ''}>
					<Link href="/about">About</Link>
				</Button>
				<Button asChild variant="ghost" size="sm" className={pathname === '/contact' ? 'relative border-b-8 border-accent' : ''}>
					<Link href="/contact">Contact</Link>
				</Button>
			</div>

			{/* Mobile Navigation */}
			<div className="md:hidden">
				<MobileNavMenu />
			</div>
    </nav>
  );
}

export { Navbar };