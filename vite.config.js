import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // This will expose your server to the network
    port: 5173, // Ensure the port matches your dev server port
  },
})
