'use client';

import * as React from 'react';

import { cn } from '@/utils/utils';
import { Divider, Image } from '@nextui-org/react';

function WorkedForSection({ className }: { className?: string }) {
	return (
		<div className={cn(className)}>
			<section className="flex justify-center items-center gap-1 py-12 flex-col">
				<h2 className="text-theme-white text-2xl">
					Companies I have worked for
				</h2>
				<Divider className="bg-theme-accent w-32" />
			</section>
			<section className="flex gap-10 px-32 pb-16 justify-center items-baseline">
				<Image src="/logo/google.png" alt="Google" radius="none" height={20} />
				<Image src="/logo/bolt.png" alt="Bolt" radius="none" height={20} />
				<Image src="/logo/amazon.png" alt="Amazon" radius="none" height={20} />
				<Image src="/logo/paypal.png" alt="PayPal" radius="none" height={20} />
				<Image
					src="/logo/netflix.png"
					alt="Netflix"
					radius="none"
					height={40}
				/>
			</section>
		</div>
	);
}

export default WorkedForSection;
