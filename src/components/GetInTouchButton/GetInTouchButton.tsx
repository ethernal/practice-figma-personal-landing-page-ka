import * as React from 'react';

import { cn } from '@/utils/utils';
import { Button, Link } from '@nextui-org/react';

function GetInTouchButton({ className }: { className?: string }) {
	return (
		<Button
			as={Link}
			className={cn(
				'text-theme-white bg-theme-accent rounded-md shadow-lg px-10 py-3 text-[clamp(0.825rem,-0.875rem+3vw,2.5rem)]',
				className,
			)}
			href="#"
			variant="flat"
		>
			Get in Touch
		</Button>
	);
}

export default GetInTouchButton;
