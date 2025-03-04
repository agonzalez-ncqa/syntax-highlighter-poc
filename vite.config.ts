import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from "vite-plugin-fs";

// https://vite.dev/config/
export default defineConfig({
  server: { open: true },
  plugins: [react(), fs()],
});
