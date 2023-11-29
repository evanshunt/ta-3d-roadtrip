import legacy from "@vitejs/plugin-legacy";

/**
 * @type {import('vite').UserConfig}
 */
const config = {
  plugins: [
    legacy({
      targets: ["defaults", "IE 11"],
      polyfills: [],
    }),
  ],
  build: {
    outDir: "./build",
    rollupOptions: {
      output: {
        manualChunks: false,
        inlineDynamicImports: true,
      },
    },
  },
};
