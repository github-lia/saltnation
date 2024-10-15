import type { Config } from 'tailwindcss';
import aspectRatio from '@tailwindcss/aspect-ratio';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brandOrange: '#FF7800',
        brandLightOrange: '#FFAF00',
        brandWhite: '#FFFFFF',
        brandBlack: '#000000',
      },
      fontFamily: {
        heading: ['var(--font-montserrat)', 'Montserrat', 'sans-serif'],
        body: ['var(--font-roboto)', 'Roboto', 'sans-serif'],
      },
      backgroundColor: {
        'primary': '#000000',
      },
      textColor: {
        'primary': '#FFFFFF',
      },
    },
  },
  plugins: [
    aspectRatio,
  ],
};

export default config;
