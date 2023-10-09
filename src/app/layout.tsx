import '@/app/globals.css';

import { cookies } from 'next/headers';
import { ReactNode } from 'react';

import MotionPreferencesConfig from '@/components/MotionPreferencesConfig/MotionPreferencesConfig';
import { NextUIThemeProvider } from '@/context/nextui/NextUIThemeProvider';
import ThemeProvider from '@/context/theme/ThemeContext';
import ColorThemeType from '@/types/ColorThemeType';

function RootLayout({ children }: { children: ReactNode }) {
	const savedThemeCookie = cookies().get('theme');
	const savedTheme: ColorThemeType = (savedThemeCookie?.value ??
		'light') as ColorThemeType;

	return (
		<ThemeProvider initialTheme={savedTheme}>
			<MotionPreferencesConfig>
				<html lang="en" className={savedTheme}>
					<body className="selection:bg-theme-accent selection:text-theme-light-black dark:selection:text-theme-dark-white">
						<NextUIThemeProvider>
							<div
								className="flex justify-center flex-col items-center
							 text-theme-light-text-light bg-theme-light-background-dark
							  dark:bg-theme-dark-background-light dark:text-theme-dark-text-light"
							>
								{children}
							</div>
						</NextUIThemeProvider>
					</body>
				</html>
			</MotionPreferencesConfig>
		</ThemeProvider>
	);
}

export default RootLayout;
