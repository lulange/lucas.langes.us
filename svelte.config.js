import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
  kit: {
    adapter: adapter({
      pages: 'build', // Output directory for static pages
      assets: 'build', // Output directory for static assets
      fallback: null, // Can be 'index.html' for SPA behavior if needed
      precompress: false
    }),
    prerender: {
      default: true // Prerender all pages by default
    }
  }
};

export default config;