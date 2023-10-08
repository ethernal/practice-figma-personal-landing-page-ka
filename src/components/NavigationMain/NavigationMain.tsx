'use client';

import Logo from '@/components/Logo';
import {
    Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, VisuallyHidden
} from '@nextui-org/react';

import CTAButton from '../CTAButton';

function NavigationMain() {
	return (
		<Navbar className="justify-between shadow-lg ">
			<NavbarBrand>
				<Logo className="w-10 me-2 rounded-full min-w-[50px]" />
				<VisuallyHidden className="font-bold text-inherit">
					KuroiArt
				</VisuallyHidden>
			</NavbarBrand>
			<NavbarContent className="hidden sm:flex lg:gap-16 md:gap-12 gap-4 text-[clamp(0.825rem,-0.875rem+3vw,2.5rem)] transition-all duration-150">
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
					<CTAButton>Get in Touch</CTAButton>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
}

export default NavigationMain;
