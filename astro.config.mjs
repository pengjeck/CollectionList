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
      label: 'Google',
      autogenerate: {
        directory: 'Google'
      }
    },
    {
      label: 'Amazon',
      autogenerate: {
        directory: 'Amazon'
      }
    },
    {
      label: 'HuggingFace',
      autogenerate: {
        directory: 'HuggingFace'
      }
    },
    {
      label: 'Microsoft',
      autogenerate: {
        directory: 'Microsoft'
      }
    },
    {
      label: 'OpenAI',
      autogenerate: {
        directory: 'OpenAI'
      }
    }
    ]
  }), tailwind({
    applyBaseStyles: false
  })]
});