/// <reference types="vitest" />
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: '.vitest/setup.ts',
    include: ['**/*.test.{ts,tsx}'],
    coverage: {
      provider: 'istanbul',
      include: ['src/components/**/*', 'src/hooks/**/*', 'src/utils/**/*', 'src/pages/**/*', 'src/contexts/**/*'],
    },
  },
});
