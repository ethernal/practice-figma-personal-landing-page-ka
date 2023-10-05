'use client';
import * as React from 'react';

import Logo from '@/components/Logo';
import {
	Button,
	Divider,
	Link,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	VisuallyHidden,
} from '@nextui-org/react';

function NavigationMain() {
	return (
		<Navbar className="justify-between text-lg shadow-lg">
			<NavbarBrand>
				<Logo className="w-10 me-2 rounded-full" />
				<VisuallyHidden className="font-bold text-inherit">
					KuroiArt
				</VisuallyHidden>
			</NavbarBrand>
			<NavbarContent className="hidden sm:flex gap-12">
				<NavbarItem>
					<Link className="text-theme-white" href="#">
						Home
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link href="#" className="text-theme-white" aria-current="page">
						About me
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link className="text-theme-white" href="#">
						Works
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link href="#" className="text-theme-white">
						Blog
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Button
						as={Link}
						className="text-theme-white bg-theme-accent rounded-md shadow-lg px-12 py-3"
						href="#"
						variant="flat"
					>
						Get in Touch
					</Button>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
}

export default NavigationMain;
