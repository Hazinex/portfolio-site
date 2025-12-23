'use client';

import { ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";

function MobileNavMenu() {

	const [open, setOpen] = useState(false);

	return (
		<div className="flex flex-col items-center justify-center">
			<Button variant="outline" size="icon" className="mb-2" onClick={() => setOpen(true)}>
				<Menu />
			</Button>

			{/* Openable Menu */}
			<div className={
				`fixed top-0 right-0 h-full w-full bg-background z-50
				transform transition-transform duration-300 ease-in-out
				${open ? 'translate-x-0' : 'translate-x-full'}`
			}>

				{/* Close Button */}
				<div className="flex justify-end">
					<Button variant="outline" size="icon" className="m-4" onClick={() => setOpen(false)}>
						<ChevronDown />
					</Button>
				</div>

				{/* Menu Items */}
				<div className="flex flex-col gap-2">
					<Button className="w-full" variant="ghost" size="sm">
						<Link href="/">Home</Link>
					</Button>
					<Button className="w-full" variant="ghost" size="sm">
						<Link href="/about">About</Link>
					</Button>
					<Button className="w-full" variant="ghost" size="sm">
						<Link href="/contact">Contact</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}

export { MobileNavMenu };