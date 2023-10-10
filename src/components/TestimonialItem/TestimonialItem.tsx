'use client';
import * as React from 'react';
import { PiQuotes as QuoteIcon } from 'react-icons/pi';

import { Image } from '@nextui-org/react';

type TestimonialType = {
	src: string;
	name: string;
	position: string;
	testimonial: string;
};

type TestimonialItemProps = {
	profile: Prettify<TestimonialType>;
};

function TestimonialItem({ profile }: TestimonialItemProps) {
	const { src, name, position, testimonial } = profile;

	return (
		<div className="grid grid-rows-[1fr_2fr] gap-4 bg-white dark:bg-black/40 px-4 py-4">
			<header className="flex justify-between">
				<div className="flex gap-3">
					<Image
						src={src} //"/profile/profile-photo.png"
						alt={name}
						className="rounded-full w-12 aspect-square"
					/>
					<div className="grid grid-cols-1 gap-1 [&>*]:p-0 [&>*]:m-0">
						<div>
							<p className="text-lg">{name}</p>
							<p className="text-sm text-theme-light-text-gray dark:text-theme-dark-text-gray">
								{position}
							</p>
						</div>
					</div>
				</div>
				<span className="text-3xl">
					<QuoteIcon />
				</span>
			</header>
			<section className="flex items-start">
				<p>{testimonial}</p>
			</section>
		</div>
	);
}

export default TestimonialItem;
