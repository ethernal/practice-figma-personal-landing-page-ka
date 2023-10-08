'use client';
import Link from 'next/link';
import * as React from 'react';
import { AiOutlineTwitter as TwitterIcon } from 'react-icons/ai';
import { BiLogoFacebook as FacebookIcon } from 'react-icons/bi';
import { FiGithub as GithubIcon } from 'react-icons/fi';

import {
	SITE_TITLE,
	SOCIAL_FB_HANDLE,
	SOCIAL_GH_HANDLE,
	SOCIAL_X_HANDLE,
} from '@/constants';
import { cn } from '@/utils/utils';

import Logo from '../Logo';

function Footer({ className }: { className?: string }) {
	return (
		<div
			className={cn(
				'bg-theme-bg-dark w-full py-16 px-6 text-theme-white font-bold text-lg flex flex-col sm:flex-row gap-8 sm:gap-8 justify-between items-center',
				className,
			)}
		>
			<span className="flex flex-row gap-2 items-center justify-center">
				<Logo className="rounded-full w-12 aspect-square" />
				<span>{SITE_TITLE}</span>
			</span>

			<span className="font-normal text-sm">
				&copy;Copyright 2021. All right reserved
			</span>

			<span className="font-normal text-normal flex gap-4 items-center">
				Connect with me:{' '}
				<div className="w-8 h-8 aspect-square bg-black/40 rounded-full flex justify-center items-center">
					<Link href={`https://facebook.com/${SOCIAL_FB_HANDLE}`}>
						<FacebookIcon className="text-theme-white text-xl aspect-square" />
					</Link>
				</div>
				<div className="w-8 h-8 aspect-square bg-black/40 rounded-full flex justify-center items-center">
					<Link href={`https://twitter.com/${SOCIAL_X_HANDLE}`}>
						<TwitterIcon className="text-theme-white text-xl aspect-square" />
					</Link>
				</div>
				<div className="w-8 h-8 aspect-square bg-black/40 rounded-full flex justify-center items-center">
					<Link href={`https://github.com/${SOCIAL_GH_HANDLE}`}>
						<GithubIcon className="text-theme-white text-normal aspect-square" />
					</Link>
				</div>
			</span>
		</div>
	);
}

export default Footer;
