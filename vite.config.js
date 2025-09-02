// import { defineConfig } from 'vite'
// import tailwindcss from '@tailwindcss/vite'
// export default defineConfig({
//   plugins: [
//     tailwindcss(),
//   ],
// })


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [react(),tailwindcss()],
  // [tailwindcss()],
  base: "./",   // 👈 this makes assets relative instead of absolute
});
