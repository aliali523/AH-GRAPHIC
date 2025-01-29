/** @type {import('tailwindcss').Config} */

export default {
  input: '/src/main.tsx',  // نقطة الدخول (entry point)
  output: {
    dir: 'dist',  // المكان الذي ستُوضع فيه الملفات المجمعة
    format: 'esm',  // نوع التنسيق
  },
  build: {
    rollupOptions: {
      external: ['/src/main.tsx'],  // إضافة الملف إلى قائمة الوحدات الخارجية
    }
  }
}

