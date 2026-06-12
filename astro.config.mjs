import vercel from '@astrojs/vercel/static';
export default defineConfig({
  output: 'static',   // o 'server' si necesitas SSR
  adapter: vercel(),
});