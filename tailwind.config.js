/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'electric-blue': '#00D4FF',
        'brand-purple': '#A78BFA',
        'brand-bg-start': '#0A0A0A',
        'brand-bg-end': '#111111'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Orbitron', 'Rajdhani', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #00D4FF 0%, #A78BFA 100%)'
      },
      boxShadow: {
        glow: '0 0 24px rgba(0, 212, 255, 0.25)',
        'panel-glow': '0 0 30px rgba(167, 139, 250, 0.16), 0 0 24px rgba(0, 212, 255, 0.14)'
      }
    }
  },
  plugins: []
}
