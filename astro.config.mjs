import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'High-Quality Free LLM Courses',
    customCss: [
      './src/tailwind.css'
    ],
    social: {
      github: 'https://github.com/withastro/starlight'
    },
    sidebar: [{
      label: 'Courses',
      autogenerate: {
        directory: 'Courses'
      }
    }]
  }), tailwind({
    applyBaseStyles: false
  })]
});