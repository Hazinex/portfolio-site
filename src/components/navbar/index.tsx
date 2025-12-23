import { Button } from '@/components/ui/button';
import { MobileNavMenu } from '@/components/mobile-navmenu';
import Link from 'next/link';

import { Bebas_Neue } from 'next/font/google';

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
});

function Navbar() {
	return (
		<nav className='flex items-center justify-between p-4 gap-4 sticky top-0 z-10 bg-background w-full'>
			<h1 className={`text-5xl font-bold ${bebasNeue.className}`}>Harry Ellis</h1>

			{/* Desktop Navigation */}
			<div className="hidden md:flex items-center gap-4">
				<Button variant="ghost" size="sm">
					<Link href="/">Home</Link>
				</Button>
				<Button variant="ghost" size="sm">
					<Link href="/about">About</Link>
				</Button>
				<Button variant="ghost" size="sm">
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