import path from 'node:path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    lib: {
      entry: {
        button: path.resolve(__dirname, 'src/components/ui/button.tsx'),
      },
      name: 'ui'
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src'),
    },
  },
})
