/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		outputFileTracingIncludes: {
			'/*': ['./content/**/*'],
		},
	},
	webpack: (config, options) => {
		// Important: return the modified config
		config.module.rules.push({
			test: /\bcanvas\.node\b/,
			use: 'raw-loader',
		});
		return config;
	},
};

module.exports = nextConfig
