
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'anime-hero': {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(-50px)' 
          },
          '20%': {
            opacity: '1', 
            transform: 'translateY(-50px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          },
        },
        'hero-header': {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(50px)' 
          },
          '20%': {
            opacity: '1', 
            transform: 'translateY(50px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          },
        },
        'anime-fade': {
          '0%': { 
            opacity: '0' 
          },
          '100%': { 
            opacity: '1' 
          },
        },
        'pulse-border': {
          '0%': {
            'box-shadow': '0 0 0 1px rgba(215, 36, 96, 0.4)',
          },
          '70%': {
            'box-shadow': '0 0 0 5px rgba(164, 54, 12, 0.4)',
          },
          '100%': {
            'box-shadow': '0 0 0 2px rgba(	14, 212, 61, 0.4)',
          },
        },
        'anime-scale-up': {
          '0%': { 
            opacity: '0', 
            transform: 'scale(0)' 
          },
          '20%': {
            opacity: '1', 
            transform: 'scale(0)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'scale(1)' 
          },
        },
        'anime-rotate': {
          '0%': { 
            transform: 'rotate(0deg)' 
          },
          '100%': { 
            transform: 'rotate(360deg)' 
          },
        },
      },
      animation: {
        wiggle: 'wiggle 1.7s ease-in-out 1.2',
        hero: 'anime-hero 1.7s linear .5s',
        header: 'hero-header 1.7s linear .5s',
        fade: 'anime-fade 1.7s linear .5s',
        scale: 'anime-scale-up 1.7s linear .5s',
        pulsante: 'pulse-border 2s infinite',
        rotate: 'anime-rotate 1.7s linear 1.5s infinite',
      },
      colors: {
        dark: {
          'primary': '#1fb6ff',
          'secondary': '#7e5bef',
          'accent': '#ff49db',
          'neutral': '#ff7849',
          'green': '#13ce66',
          'yellow': '#ffc82c',
          'gray-dark': '#273444',
          'gray': '#8492a6',
          'gray-light': '#d3dce6',
        },
        light: {
          'blue': '#1fb6ff',
          'purple': '#7e5bef',
          'pink': '#ff49db',
          'orange': '#ff7849',
          'green': '#13ce66',
          'yellow': '#ffc82c',
          'gray-dark': '#273444',
          'gray': '#8492a6',
          'gray-light': '#d3dce6',

        },
        luxury: {
          'blue': '#1fb6ff',
          'purple': '#7e5bef',
          'pink': '#ff49db',
          'orange': '#ff7849',
          'green': '#13ce66',
          'yellow': '#ffc82c',
          'gray-dark': '#273444',
          'gray': '#8492a6',
          'gray-light': '#d3dce6',
        
        },
      },
    },
  },
  plugins: [],
}
