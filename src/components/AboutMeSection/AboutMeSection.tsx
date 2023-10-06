'use client';

import { Divider, Image } from '@nextui-org/react';

function AboutMeSection() {
	return (
		<div className="bg-theme-bg-dark p-10 w-full grid grid-cols-1 gap-4 md:grid-cols-2 text-theme-white ">
			<section className="flex justify-center items-center">
				<Image
					src="/profile/about-skills.png"
					width={250}
					alt="html, javascript, react, css"
				/>
			</section>
			<section className="flex flex-col gap-4">
				<h2 className="text-3xl">About me</h2>
				<Divider className="bg-theme-accent [&>p]:text-lg" />
				<p>
					My passion for building websites started since 2013 and since then i
					have helped companies around the world build amazing websites and
					products that create real value for the business and users.
				</p>
				<p>
					I enjoy solving problems with clean scalable solutions and I also have
					a genuine passion for inspiring design.
				</p>
				<p>
					I am a fullstack developer focusing on core frontend and backend
					technologies which include HTML, CSS, Javascript, React and other core
					languages
				</p>
			</section>
		</div>
	);
}

export default AboutMeSection;
