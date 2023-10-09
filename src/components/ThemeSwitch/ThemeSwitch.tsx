import Cookie from 'js-cookie';
import * as React from 'react';

import { useThemeContext } from '@/context/theme/ThemeContext';
import { SwitchProps, useSwitch, VisuallyHidden } from '@nextui-org/react';

import { MoonIcon } from './MoonIcon';
import { SunIcon } from './SunIcon';

function ThemeSwitch(props: Prettify<SwitchProps>) {
	const { Component, slots, getBaseProps, getInputProps, getWrapperProps } =
		useSwitch(props);

	const { theme, setTheme } = useThemeContext();

	const handleThemeChange = () => {
		const nextTheme = theme === 'light' ? 'dark' : 'light';
		const root = document.documentElement;
		root.setAttribute('data-color-theme', nextTheme);
		root.classList.remove('light');
		root.classList.remove('dark');
		root.classList.add(nextTheme);
		Cookie.set('theme', nextTheme, { expires: 380 });
		setTheme(nextTheme);
	};

	return (
		<div className="flex flex-col gap-2">
			<Component {...getBaseProps()}>
				<VisuallyHidden>
					<input
						{...getInputProps()}
						onChange={handleThemeChange}
						value={theme}
						type="checkbox"
					/>
				</VisuallyHidden>
				<div
					{...getWrapperProps()}
					data-color-theme={theme}
					className={
						(slots.wrapper({
							class: [
								'w-8 h-8',
								'flex items-center justify-center',
								'rounded-lg bg-transparent hover:bg-theme-bg-dark',
								// this is Firefox fix for 1px wide checkbox - hide it behind the icon
								'[&_label_span]:-m-1',
							],
						}),
						slots.label({
							class: ['-m-1.5'],
						}))
					}
				>
					{theme === 'light' ? (
						<SunIcon className="text-theme-light-text-dark/70 w-6 h-6 aspect-square" />
					) : (
						<MoonIcon className="text-theme-dark-text-light w-6 h-6 aspect-square" />
					)}
				</div>
			</Component>
		</div>
	);
}

export default ThemeSwitch;
