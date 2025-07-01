import { defineConfig } from 'vite'
import tailwind from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwind(),       // подключаем Tailwind-плагин
  ],
  root: 'src',        // корнем проекта будет папка src
  build: {
    outDir: '../dist',// собранные файлы уйдут в /dist
    emptyOutDir: true
  }
})
