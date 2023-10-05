'use client';

import NextImage from 'next/image';
import * as React from 'react';

import { Image } from '@nextui-org/react';

function HeroSection() {
	return (
		<div className="flex justify-center">
			<div className="grid grid-cols-2">
				<section className="py-10">
					<h2 className="text-4xl text-theme-white font-bold pb-4">
						Create your games in{' '}
						<span className="text-theme-accent">less than 12days</span>
					</h2>
					<p className="text-theme-white">
						Hey, I’m Rafał Pieczyński. A board game developer with 4 years
						experience designing great games like &ldquo;Frostpunk Board Game",
						Apex Board Game or "Don't Starve Board Game" and others are in the
						making! I can design games that are fun to play and highly
						repayable!
					</p>
				</section>
				<section className="relative">
					<Image
						src={`/profile/profile-photo.png`}
						removeWrapper={true}
						alt="My profile"
						width={150}
						height={250}
						className="absolute left-1/4 bottom-0"
						as={NextImage}
					/>
					<div className="absolute w-32 aspect-square bg-[#293241] bottom-10 rounded-full left-1/4"></div>
				</section>
			</div>
		</div>
	);
}

export default HeroSection;