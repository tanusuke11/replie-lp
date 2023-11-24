import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-svelte-components/vite';
import fs from 'fs';

export default defineConfig({
	plugins: [
		AutoImport({
			imports: ['svelte'],
			dirs: ['./src/@tools/**'],
			dts: './src/@types/auto-imports.d.ts',
			exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.svelte-kit[\\/]/]
		}),
		Components({
			dirs: ['src/components'],
			extensions: ['svelte'],
			dts: './src/@types/components.d.ts',
			exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.svelte-kit[\\/]/]
		}),
		sveltekit()
	],
	server: {
		https: {
			key: fs.readFileSync('./certificate/localhost-key.pem'),
			cert: fs.readFileSync('./certificate/localhost.pem')
		},
		watch: {
			ignored: ['**/components.d.ts', '**/auto-imports.d.ts']
		}
	}
});
