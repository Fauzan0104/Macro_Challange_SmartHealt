import type { Config } from "tailwindcss";

export default {
  
  darkMode: ["class"],
  content: [
    
    "./pages/**/*.{ts,js,jsx}",
    "./components/**/*.{ts,js,jsx}",
    "./app/**/*.{ts,js,jsx}",
    "./src/**/*.{ts,js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

   
    extend: {
      colors: {
        'health-primary': '#0D986A',
        'health-secondary': '#9DE4C5',
        'health-accent': '#F5F9F7',
        'health-text': '#2D3436',
        primary: {
          DEFAULT: "#0E8A5F",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#E8F5E9",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      keyframes: {
        "slide-in": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-out": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "slide-in": "slide-in 0.3s ease-out",
        "slide-out": "slide-out 0.3s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;