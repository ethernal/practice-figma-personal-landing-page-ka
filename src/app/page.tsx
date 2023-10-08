import React from 'react';

import AboutMeSection from '@/components/AboutMeSection';
import ContactSection from '@/components/ContactSection';
import ContentWrapper from '@/components/ContentWrapper';
import HeroSection from '@/components/HeroSection';
import NavigationMain from '@/components/NavigationMain';
import RecentWorkSection from '@/components/RecentWorkSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import WorkedForSection from '@/components/WorkedForSection';
import { SITE_TITLE } from '@/constants/constants';

export const metadata = {
	title: SITE_TITLE,
	description:
		"Sebastian's thoughts on software development and all things life related.",
};

async function Home() {
	return (
		<>
			<NavigationMain className="w-full" />
			<div className="w-full max-w-7xl">
				<HeroSection />
				<AboutMeSection />
				<WorkedForSection className="bg-theme-bg-gray-dark" />
				<RecentWorkSection className="bg-theme-bg-dark" />
				<TestimonialsSection />
				<ContactSection />
			</div>
		</>
	);
}

export default Home;
