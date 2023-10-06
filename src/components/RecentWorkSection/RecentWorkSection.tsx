'use client';
import * as React from 'react';

import { cn } from '@/utils/utils';
import { Card, CardFooter, Divider, Image } from '@nextui-org/react';

import PortfolioItem from '../PortfolioItem';

function RecentWorkSection({ className }: { className?: string }) {
	return (
		<>
			<section className={cn('py-12 px-10', className)}>
				<h2 className="text-theme-white text-2xl pb-4">My Recent Works</h2>
				<Divider className="bg-theme-accent mb-10 w-40" />
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
					<PortfolioItem
						title="E-commerce Landing Page"
						srcImage="/work/work-1.png"
						daysToComplete={11}
					/>
					<PortfolioItem
						title="Basketball Studio"
						srcImage="/work/work-2.png"
						daysToComplete={9}
					/>
					<PortfolioItem
						title="Perfume Company Site"
						srcImage="/work/work-3.png"
						daysToComplete={10}
					/>
					<PortfolioItem
						title="Health Care Site"
						srcImage="/work/work-4.png"
						daysToComplete={11}
					/>
					<PortfolioItem
						title="Real Estate"
						srcImage="/work/work-5.png"
						daysToComplete={7}
					/>
					<PortfolioItem
						title="Bank Wallet"
						srcImage="/work/work-6.png"
						daysToComplete={5}
					/>
				</div>
				<section className="flex justify-center pt-10">
					<button
						type="button"
						className="px-14 py-3 border border-theme-accent font-bold text-theme-accent rounded-sm"
					>
						See More
					</button>
				</section>
			</section>
		</>
	);
}

export default RecentWorkSection;
