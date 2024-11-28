import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
export default <Partial<Config>>{
  content: ['./components/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './nuxt.config.{js,ts}', './app.vue'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        sans: ["Syne", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          light: '#AE7DDD',
          DEFAULT: process.env.PRIMARY_COLOR || '#7F54B2',
          dark: '#754fa3',
        },
        // Brand Colors
        brand: {
          dark1: '#1A1C1C',
          dark2: '#0c1417',
          dark3: '#11181d',
          dark4: '#020816',
          green: '#46d39e',
          gold: '#CFA560',
       },
      },
      aspectRatio: {
        '9/8': '1 / 1.125',
      },
      screens: {
        '2xl': '1400px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
