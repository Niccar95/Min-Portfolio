// vite.config.ts
import checker from 'vite-plugin-checker'
export default {
  base: "/",
  plugins: [
    checker({
      // e.g. use TypeScript check
      typescript: true,
    }),
  ],
}