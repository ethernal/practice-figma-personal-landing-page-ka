import { SITE_TITLE } from '@/constants/constants';

export async function generateMetadata({ params, searchParams }) {
	const pageName = params?.page;

	return {
		title: pageName,
		name: `${pageName} • ${SITE_TITLE}`,
	};
}

async function SitePage({ params, searchParams }) {
	const pageName = params?.page;

	return (
		<>
			<h2>{pageName}</h2>
		</>
	);
}

export default SitePage;
