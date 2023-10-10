'use client';

import { useState } from 'react';
import { RxHamburgerMenu as MobileMenuIcon } from 'react-icons/rx';

import Logo from '@/components/Logo';
import { NAVIGATION_ITEMS } from '@/constants';
import { cn } from '@/utils/utils';
import {
	Button,
	Link,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	VisuallyHidden,
} from '@nextui-org/react';

import CTAButton from '../CTAButton';
import ThemeSwitch from '../ThemeSwitch';

function NavigationMain({ className }: { className?: string }) {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<Navbar
			className={cn('justify-between shadow-lg', className)}
			maxWidth="full"
			isMenuOpen={menuOpen}
		>
			<NavbarBrand>
				<Logo className="w-10 me-2 rounded-full min-w-[50px]" />
				<VisuallyHidden className="font-bold text-inherit">
					KuroiArt
				</VisuallyHidden>
			</NavbarBrand>
			<NavbarContent className="sm:hidden" justify="end">
				<Button
					isIconOnly
					color="inherit"
					aria-label="toggle menu"
					onClick={() => setMenuOpen((value) => !value)}
				>
					<MobileMenuIcon className="w-10 h-10" />
				</Button>
			</NavbarContent>
			<NavbarContent className="hidden sm:flex lg:gap-16 md:gap-12 gap-4 text-[clamp(0.825rem,-0.875rem+3vw,2.5rem)] transition-all duration-150">
				{NAVIGATION_ITEMS.map((item) => (
					<NavbarItem key={item.label.replaceAll(' ', '-')}>
						<Link
							href={item.href}
							className="text-theme-light-text-dark dark:text-theme-dark-text-light"
						>
							{item.label}
						</Link>
					</NavbarItem>
				))}

				<NavbarItem>
					<CTAButton>Get in Touch</CTAButton>
				</NavbarItem>
				<NavbarItem>
					<ThemeSwitch />
				</NavbarItem>
			</NavbarContent>

			<NavbarMenu>
				{NAVIGATION_ITEMS.map((item) => (
					<NavbarMenuItem
						key={item.label.replaceAll(' ', '-')}
						className="flex justify-center py-4"
					>
						<Link
							href={item.href}
							className="text-theme-light-text-dark dark:text-theme-dark-text-light"
						>
							{item.label}
						</Link>
					</NavbarMenuItem>
				))}
				<NavbarMenuItem className="flex justify-center py-4">
					<ThemeSwitch />
				</NavbarMenuItem>
			</NavbarMenu>
		</Navbar>
	);
}

export default NavigationMain;
