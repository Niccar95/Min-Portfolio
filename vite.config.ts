// vite.config.ts
import checker from 'vite-plugin-checker'
import SassPlugin from 'vite-plugin-sass';
export default {
  base: '/Min-Portfolio/',
  plugins: [
    checker({
      // e.g. use TypeScript check
      typescript: true,
    }),
    SassPlugin(),
  ],
}