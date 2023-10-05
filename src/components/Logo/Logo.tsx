import * as React from 'react';

import { cn } from '@/utils/utils';
import { Image } from '@nextui-org/react';

function Logo({ className }: { className?: string }) {
	return (
		<Image
			src="/logo/logo.jpg"
			alt="KuroiArt personal site"
			width={150}
			className={cn(className)}
		/>
	);
}

export default Logo;
