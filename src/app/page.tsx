import AboutMeSection from '@/components/AboutMeSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
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
			<NavigationMain className="w-full bg-theme-light-background-light dark:bg-theme-dark-background-light" />
			<div className="w-full max-w-7xl">
				<HeroSection className="dark:bg-theme-dark-background-light" />
				<AboutMeSection className="bg-theme-light-background-light text-theme-light-text-light dark:bg-theme-dark-background-dark" />
				<WorkedForSection className="dark:bg-theme-dark-background-gray" />
				<RecentWorkSection className="bg-theme-light-background-light dark:bg-theme-dark-background-dark" />
				<TestimonialsSection className="dark:bg-theme-dark-background-gray" />
				<ContactSection className="bg-theme-light-background-light dark:bg-theme-dark-background-light" />
			</div>
			<Footer className="bg-theme-dark-background-gray text-theme-white" />
		</>
	);
}

export default Home;
