'use client';

import NextImage from 'next/image';
import * as React from 'react';

import { Image } from '@nextui-org/react';

import ContentWrapper from '../ContentWrapper';
import GetInTouchButton from '../GetInTouchButton';

function HeroSection() {
	return (
		<ContentWrapper>
			<div className="flex justify-center">
				<div className="grid grid-cols-2">
					<section className="flex flex-col gap-10 py-10">
						<h2 className="text-4xl text-theme-white font-bold">
							Create your games in{' '}
							<span className="text-theme-accent">less than 12days</span>
						</h2>
						<p className="text-theme-white">
							Hey, I’m Rafał Pieczyński. A board game developer with 4 years
							experience designing great games like &ldquo;Frostpunk Board
							Game", Apex Board Game or "Don't Starve Board Game" and others are
							in the making! I can design games that are fun to play and highly
							repayable!
						</p>
						<GetInTouchButton className="px-10 py-2 flex-1 self-start" />
					</section>
					<section className="grid grid-rows-1 grid-cols-1 self-end justify-self-center">
						<Image
							src={`/profile/profile-photo.png`}
							removeWrapper={true}
							alt="My profile"
							width={250}
							height={450}
							className="row-start-1 row-end-2 col-start-1 col-end-1"
							as={NextImage}
						/>
						<div className="w-56 aspect-square -mt-8 bg-[#293241]/[0.5] rounded-full row-start-1 row-end-1 col-start-1 col-end-1"></div>
					</section>
				</div>
			</div>
		</ContentWrapper>
	);
}

export default HeroSection;
