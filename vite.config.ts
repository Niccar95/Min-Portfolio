// vite.config.ts
import checker from "vite-plugin-checker";
export default {
  base: "/Min-Portfolio/",
  plugins: [
    checker({
      // e.g. use TypeScript check
      typescript: true,
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        projects: "projects.html",
      },
    },
  },
};
