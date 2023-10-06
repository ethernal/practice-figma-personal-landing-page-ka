import * as React from 'react';

import { Image } from '@nextui-org/react';

/* extract all data from component below and change it into props */
type PortfolioItemProps = {
	title: string;
	srcImage: string;
	daysToComplete: number;
};

function PortfolioItem({
	title,
	srcImage,
	daysToComplete,
}: PortfolioItemProps) {
	return (
		<div className="grid content-between">
			<h3 className="text-theme-white text-medium pb-4">{title}</h3>
			<div className="grid">
				<Image
					src={srcImage}
					alt={title}
					radius="sm"
					removeWrapper={true}
					className="z-0 w-full h-full object-cover col-start-1 row-start-1"
				/>
				<div className="z-10 bg-theme-badge-dark text-theme-white px-[4%] py-[2%] rounded-sm col-start-1 row-start-1 justify-self-end self-end min-w-max">
					<span className="text-[clamp(0.825rem,-0.875rem+3vw,2.5rem)]">
						{daysToComplete > 1
							? `${daysToComplete} days`
							: `${daysToComplete} day`}
					</span>
				</div>
			</div>
		</div>
	);
}

export default PortfolioItem;
