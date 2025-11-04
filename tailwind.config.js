/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        primary: "var(--color-primary)",
        "primary-foreground": "var(--color-primary-foreground)",
        accent: "var(--color-accent)",
        "accent-foreground": "var(--color-accent-foreground)",
        border: "var(--color-border)",
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [],
};
