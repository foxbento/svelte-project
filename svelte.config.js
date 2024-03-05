import adapter from '@sveltejs/adapter-auto';
import sveltePreprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Use sveltePreprocess and vitePreprocess for preprocessing
	preprocess: [
		sveltePreprocess({ postcss: true }), // Enable sveltePreprocess with PostCSS for Tailwind
	],

	kit: {
		adapter: adapter(),
		alias: {
			// Define aliases
			'$lib/components': path.resolve('./src/lib/components'),
			'$lib/utils': path.resolve('./src/lib/utils'),
		}
	}
};

export default config;
