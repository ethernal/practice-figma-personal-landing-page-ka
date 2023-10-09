import * as React from 'react';

import { cn } from '@/utils/utils';

function ContentWrapper({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<div
			className={cn(
				'px-10 py-10 text-theme-light-black dark:text-theme-dark-text-light',
				className,
			)}
		>
			{children}
		</div>
	);
}

export default ContentWrapper;
