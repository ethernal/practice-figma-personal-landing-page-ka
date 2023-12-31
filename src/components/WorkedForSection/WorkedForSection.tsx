'use client';

import * as React from 'react';

import { cn } from '@/utils/utils';
import { Divider, Image } from '@nextui-org/react';

import ContentWrapper from '../ContentWrapper';

function WorkedForSection({ className }: { className?: string }) {
	return (
		<ContentWrapper className={cn(className)}>
			<section className="flex justify-center items-center gap-1 flex-col">
				<h2 className=" text-2xl pb-4">Companies I have worked for</h2>
				<Divider className="bg-theme-accent w-32 h-0.5 mb-12" />
			</section>
			<section className="flex gap-10 px-32 pb-16 justify-center items-baseline flex-wrap md:flex-nowrap">
				<Image
					src="/logo/google.png"
					alt="Google"
					radius="none"
					height={20}
					className="min-w-[5vw]"
				/>
				<Image
					src="/logo/bolt.png"
					alt="Bolt"
					radius="none"
					height={20}
					className="min-w-[5vw]"
				/>
				<Image
					src="/logo/amazon.png"
					alt="Amazon"
					radius="none"
					height={20}
					className="min-w-[5vw]"
				/>
				<Image
					src="/logo/paypal.png"
					alt="PayPal"
					radius="none"
					height={20}
					className="min-w-[5vw]"
				/>
				<Image
					src="/logo/netflix.png"
					alt="Netflix"
					radius="none"
					height={40}
					className="min-w-[5vw]"
				/>
			</section>
		</ContentWrapper>
	);
}

export default WorkedForSection;
