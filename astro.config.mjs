import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '精品大模型课程',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'HuggingFace',
					autogenerate: { directory: 'HuggingFace' },
				},
				{
					label: 'OpenAI',
					autogenerate: { directory: 'OpenAI' },
				},
				{
					label: 'Google',
					autogenerate: { directory: 'Google' }
				}
			],
		}),
	],
});
