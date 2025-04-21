import { defineConfig, transformWithEsbuild } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    {
      name: "treat-js-files-as-jsx",
      async transform(code, id) {
        if (!id.match(/src\/.*\.js$/)) return null;
        // Use the exposed transform from vite, instead of directly
        // transforming with esbuild
        return transformWithEsbuild(code, id, {
          loader: "jsx",
          jsx: "automatic",
        });
      },
    },
    react(),
    tailwindcss()
  ],
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  build: {
    sourcemap: false,
    modulePreload: true,
    outDir: "build",
    chunkSizeWarningLimit: 2000,
  },
  preview: {
    port: 8080,
    strictPort: true,
  },
  css: {
    preprocessorOptions: {
      less: {
        math: "always",
        javascriptEnabled: true,
        relativeUrls: true,
      },
    },
  },
  optimizeDeps: {
    force: true,
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
    include: ["@ant-design/icons"],
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
    open: true,
    watch: {
      usePolling: true,
    },
    hmr: { host: "0.0.0.0" },
  },
});
