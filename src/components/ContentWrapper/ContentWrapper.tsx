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
		<div className={cn('px-10 text-theme-white', className)}>{children}</div>
	);
}

export default ContentWrapper;
