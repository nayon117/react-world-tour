/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#e8ffaf",
        
"secondary": "#e559a6",
        
"accent": "#ead19f",
        
"neutral": "#1b161d",
        
"base-100": "#f0f2f4",
        
"info": "#7face6",
        
"success": "#70e6c2",
        
"warning": "#d4a408",
        
"error": "#f25f7f",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
