'use client';

import NextImage from 'next/image';
import * as React from 'react';

import { cn } from '@/utils/utils';
import { Image } from '@nextui-org/react';

import ContentWrapper from '../ContentWrapper';
import CTAButton from '../CTAButton';

function HeroSection({ className }: { className?: string }) {
	return (
		<ContentWrapper className={cn('flex justify-center py-0 pt-10', className)}>
			<div className="grid grid-cols-2">
				<section className="flex flex-col gap-10 py-10">
					<h2 className="text-4xl font-bold">
						Create your games in{' '}
						<span className="text-theme-accent">less than 12days</span>
					</h2>
					<p className="">
						Hey, I’m Rafał Pieczyński. A board game developer with 4 years
						experience designing great games like &ldquo;Frostpunk Board Game",
						Apex Board Game or "Don't Starve Board Game" and others are in the
						making! I can design games that are fun to play and highly
						repayable!
					</p>
					<CTAButton className="px-10 py-2 flex-1 self-start">
						Get in Touch
					</CTAButton>
				</section>
				<section className="grid grid-rows-1 grid-cols-1 self-end justify-self-center">
					<Image
						src={`/profile/profile-photo.png`}
						removeWrapper={true}
						alt="My profile"
						width={250}
						height={450}
						className="row-start-1 row-end-2 col-start-1 col-end-1 self-end pointer-events-none"
						as={NextImage}
					/>
					<div className="w-40 xs:w-48 sm:w-56 justify-self-center aspect-square -mt-8 bg-[#293241]/[0.5] rounded-full row-start-1 row-end-1 col-start-1 col-end-1"></div>
				</section>
			</div>
		</ContentWrapper>
	);
}

export default HeroSection;
