import React from 'react';

import { SITE_TITLE } from '@/constants/constants';

export const metadata = {
	title: SITE_TITLE,
	description:
		"Sebastian's thoughts on software development and all things life related.",
};

async function Home() {
	return (
		<div>
			<h1>Hello Traveler</h1>
			<p>Sebastian, take this, it's dangerous to go alone.</p>
		</div>
	);
}

export default Home;
