import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: sveltePreprocess({
		scss: {
			// We can use a path relative to the root because
			// svelte-preprocess automatically adds it to `includePaths`
			// if none is defined.
			prependData: `
			@import 'src/styles/animate.scss';
			@import 'src/styles/base.scss';
			@import 'src/styles/index.scss';
			@import 'src/styles/reset.scss';
			@import 'src/styles/utility.scss';
			`
		}
	}),
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			$utils: path.resolve('./src/utils'),
			$components: path.resolve('./src/components')
		}
	}
};

export default config;
