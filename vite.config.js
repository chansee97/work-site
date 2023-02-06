import { defineConfig } from 'vite'
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue'
import unocss from 'unocss/vite'
import presetUno from '@unocss/preset-uno'

// 当前执行node命令时文件夹的地址（工作目录）
const rootPath = resolve(process.cwd());
const srcPath = `${rootPath}/src`;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), unocss({
    presets: [presetUno()],
    shortcuts: {
      'wh-full': 'w-full h-full',
      'flex-center': 'flex justify-center items-center',
      'flex-col-center': 'flex-center flex-col',
      'flex-x-center': 'flex justify-center',
      'flex-y-center': 'flex items-center',
    },
  }),],
  resolve: {
    alias: {
      '~': rootPath,
      '@': srcPath,
    },
  },
})
