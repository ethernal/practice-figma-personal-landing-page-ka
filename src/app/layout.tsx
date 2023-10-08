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
					<body>
						<NextUIThemeProvider>
							<div className="flex justify-center flex-col items-center">
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
