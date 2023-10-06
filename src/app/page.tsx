import React from 'react';

import AboutMeSection from '@/components/AboutMeSection';
import HeroSection from '@/components/HeroSection';
import NavigationMain from '@/components/NavigationMain';
import RecentWorkSection from '@/components/RecentWorkSection';
import WorkedForSection from '@/components/WorkedForSection';
import { SITE_TITLE } from '@/constants/constants';

export const metadata = {
	title: SITE_TITLE,
	description:
		"Sebastian's thoughts on software development and all things life related.",
};

async function Home() {
	return (
		<div className="w-4/5 max-w-7xl">
			<NavigationMain />
			<HeroSection />
			<AboutMeSection />
			<WorkedForSection className="bg-theme-bg-gray-dark" />
			<RecentWorkSection className="bg-theme-bg-dark" />
		</div>
	);
}

export default Home;
