'use client';
import * as React from 'react';

import { cn } from '@/utils/utils';
import { Divider } from '@nextui-org/react';

import ContentWrapper from '../ContentWrapper';
import TestimonialItem from '../TestimonialItem';

function TestimonialsSection({ className }: { className?: string }) {
	return (
		<ContentWrapper className={cn('p-10', className)}>
			<span className="flex justify-center flex-col items-center pb-12">
				<h2 className="text-3xl  pb-4">What my clients say</h2>
				<Divider className="bg-theme-accent w-40 h-0.5" />
			</span>
			<div className="grid grid-cols-2 gap-20 pb-10">
				<TestimonialItem />
				<TestimonialItem />
			</div>
			<div className="flex justify-center gap-4 pb-20">
				<span className="rounded-full bg-theme-accent w-3 aspect-square"></span>
				<span className="rounded-full bg-theme-inactive w-3 aspect-square"></span>
				<span className="rounded-full bg-theme-inactive w-3 aspect-square"></span>
				<span className="rounded-full bg-theme-inactive w-3 aspect-square"></span>
			</div>
		</ContentWrapper>
	);
}

export default TestimonialsSection;
