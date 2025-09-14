module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'glass-900': 'rgba(255,255,255,0.04)'
      },
      backgroundImage: {
        'dark-grad':
          'linear-gradient(135deg, #0f172a 0%, #0b1220 35%, #0b1328 60%, #071428 100%)'
      }
    }
  },
  plugins: []
}
