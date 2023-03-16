import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/COMP2411_Assignment_02/',
  plugins: [react()],
})
