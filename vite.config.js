import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // لاستيراد path

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // تعيين alias لـ @ للإشارة إلى مجلد src
    },
  },
  build: {
    chunkSizeWarningLimit: 600, // قيمة أكبر مثل 600 كيلوبايت
  },
});
