/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
    
      boxShadow: {
      '5xl' : '-3px 2px 15px 4px #bababa'
      },
      backgroundColor : {
          'color1' :'var(--toogle_bg-1)',
          'color2' : 'var(--bg-colr2)',
      },
      backgroundImage :{
        'drk' : 'var(--bg_img-1)',
        'logo' : 'var(--bg-logo)'
        
      },
      textColor :{
        'wToD' : 'var(--txt-colr1)',
      },
      
    
  }
  },
  plugins: [],
}