'use client';
import * as React from 'react';

import { Divider } from '@nextui-org/react';

import ContentWrapper from '../ContentWrapper';
import CTAButton from '../CTAButton/CTAButton';

function ContactSection({ className }: { className?: string }) {
	return (
		<ContentWrapper>
			<div className="pt-12 pb-6 text-3xl flex flex-col gap-4">
				<h2>Tell me about your project</h2>
				<Divider className="bg-theme-accent w-72" />
			</div>
			<div>
				<form className="flex flex-col gap-4 pb-10">
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						<input
							type="text"
							placeholder="Name"
							className="p-3 bg-black/40 placeholder:text-theme-white/30 text-theme-white rounded-sm focus:outline-theme-accent focus:outline-2"
						/>
						<input
							type="text"
							placeholder="Email Address"
							className="p-3 bg-black/40 placeholder:text-theme-white/30 text-theme-white rounded-sm outline-theme-accent"
						/>
					</div>
					<textarea
						placeholder="Message description"
						className="p-3 bg-black/40 placeholder:text-theme-white/30 text-theme-white rounded-sm col-span-1 outline-theme-accent"
						// ignore this error - this is available in Chrome 120
						style={{ formSizing: 'content' }}
					/>
					<CTAButton className="py-3 px-12 text-base min-w-min self-start ">
						Send
					</CTAButton>
				</form>
			</div>
		</ContentWrapper>
	);
}

export default ContactSection;
