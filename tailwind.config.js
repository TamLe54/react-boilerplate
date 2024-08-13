/** @type {import('tailwindcss').Config} */
import tailwindAnimate from 'tailwindcss-animate';
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        primary: ["'Montserrat', sans-serif"],
      },
      fontSize: {
        xs: ['10px', '18px'],
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['18px', '28px'],
        xl: ['20px', '30px'],
      },
      colors: {
        primary: {
          DEFAULT: 'hsl(var(--primary)',
          foreground: 'hsl(var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: '(var(--secondary)',
          foreground: '(var(--secondary-foreground)',
        },
        accent: {
          DEFAULT: '(var(--accent)',
          foreground: '(var(--accent-foreground)',
        },
        background: '(var(--background)',
        foreground: '(var(--foreground)',
        muted: {
          DEFAULT: '(var(--muted)',
          foreground: '(var(--muted-foreground)',
        },
        destructive: {
          DEFAULT: '(var(--destructive)',
          foreground: '(var(--destructive-foreground)',
        },
        card: {
          DEFAULT: '(var(--card)',
          foreground: '(var(--card-foreground)',
        },
        popover: {
          DEFAULT: '(var(--popover)',
          foreground: '(var(--popover-foreground)',
        },
        border: '(var(--border)',
        input: '(var(--input)',
        ring: '(var(--ring)',
        radius: '(var(--radius)',
      },
    },
  },
  plugins: [tailwindAnimate],
};
