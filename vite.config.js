import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/AI-Cultural-Storyteller/' // change if your repo name is different
})
