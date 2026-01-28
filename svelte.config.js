import adapter from '@sveltejs/adapter-static';


const config = {
  kit: {
    adapter: adapter({
      pages: 'build', // Output directory for static pages
      assets: 'build', // Output directory for static assets
      fallback: null, // Can be 'index.html' for SPA behavior if needed
      precompress: false,
    }),
  }
};

export default config;