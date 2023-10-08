'use client';
import * as React from 'react';
import { PiQuotes as QuoteIcon } from 'react-icons/pi';

import { Image } from '@nextui-org/react';

function TestimonialItem() {
	return (
		<div className="grid grid-rows-[1fr_2fr] gap-4 bg-black/40 px-4 py-4">
			<header className="flex justify-between">
				<div className="flex gap-3">
					<Image
						src="/profile/profile-photo.png"
						alt="My profile"
						className="rounded-full w-12 aspect-square"
					/>
					<div className="grid grid-cols-1 gap-1 [&>*]:p-0 [&>*]:m-0">
						<div>
							<p className="text-lg">Full name</p>
							<p className="text-sm text-theme-white/60">Position</p>
						</div>
					</div>
				</div>
				<span className="text-3xl">
					<QuoteIcon />
				</span>
			</header>
			<section>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
					aperiam, corrupti quam reiciendis dolorum, deleniti qui repellat magni
					cupiditate sint neque.
				</p>
			</section>
		</div>
	);
}

export default TestimonialItem;
