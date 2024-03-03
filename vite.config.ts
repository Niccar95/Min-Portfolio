// vite.config.ts
import checker from "vite-plugin-checker";

export default {
  base: "/Min-Portfolio/",
  plugins: [
    checker({
      typescript: true,
    }),
  ],
  build: {
    //assetsDir: "assets",
    rollupOptions: {
      input: {
        main: "index.html",
        projects: "projects.html",
      },
    },
  },
};
