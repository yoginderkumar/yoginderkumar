const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    mode: "jit",
    content: ["./src/**/*.html", "./src/**/*.njk", "./src/**/*.md"],
    theme: {
        colors: {
          transparent: "transparent",
          currentColor: "currentColor",
          white: "#ffffff",
          black: "#0a0a0a",
          dark: {
            100: "#1a1a1a",
            500: "#0f0f0f",
            900: "#050505",
          },
          gray: {
            100: "#2a2a2a",
            500: "#3e3e3e",
            700: "#555555",
            900: "#121212",
          },
          blue: {
            500: "#3282b8", // Accent color for minimal highlights
          },
          cyan: {
            500: "#0e7490",
          },
          red: {
            500: "#d32f2f",
          },
          green: {
            500: "#388e3c",
          },
        },
        container: {
          center: true,
          padding: "1rem",
          screens: {
            xs: "375px",
            sm: defaultTheme.screens["sm"],
            md: defaultTheme.screens["md"],
            lg: defaultTheme.screens["lg"],
            xl: defaultTheme.screens["xl"],
          },
        },
        screens: {
          xs: "320px",
          ...defaultTheme.screens,
        },
        extend: {
          fontFamily: {
            sans: ["Inter", "sans-serif"], // Minimalist sans-serif font
          },
          fontSize: {
            base: "16px",
            lg: "18px",
            xl: "24px",
            "2xl": "32px",
          },
          lineHeight: {
            relaxed: "1.75",
            snug: "1.4",
          },
          spacing: {
            18: "4.5rem",
          },
        //   borderRadius: {
        //     DEFAULT: "8px", // Softer rounded corners
        //     ...defaultTheme.borderRadius
        //   },
        },
      },
    plugins: [require("@tailwindcss/typography")],
  };