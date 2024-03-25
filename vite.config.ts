import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// import reactRefresh from '@vitejs/plugin-react-refresh'
import importToCDN, { autoComplete } from 'vite-plugin-cdn-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    importToCDN({
        modules: [
            autoComplete('react'),
            autoComplete('react-dom')
        ],
    }),
    react(),
],
  build: {
    rollupOptions: {
      external: ["react", "react-router", "react-router-dom"],
      output: {
        globals: {
          react: "React",
          "react-router": "ReactRouter",
          "react-router-dom": "ReactRouterDOM",
        },
      }
    }
  }
})
