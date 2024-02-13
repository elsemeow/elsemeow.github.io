const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "*.html",
    "_includes/**/*.html",
    "_layouts/**/*.html",
    "assets/js/**/*.js"
  ],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "90rem"
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        mono: ["JetBrains Mono", ...defaultTheme.fontFamily.mono]
      },
      backgroundImage: {
        "pattern": "url(/assets/images/pattern.png)",
        "leafs": "url(/assets/images/leafs.svg)"
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: "#fff",
              "text-decoration": "none",
              "border-bottom": "1px solid #38bdf8",
              "&:hover": { "border-bottom-width": "2px" }
            },
            img: {
              "border-radius": "8px"
            },
            code: {
              "color": "#e2e8f0",
              "background-color": "#1e293b",
              "border-radius": "0.375rem",
              "padding": "2px 6px",
              "border": "1px solid #ffffff1a"
            }
          }
        }
      },
      keyframes: {
        scroll: {
          "0%": { "background-position": "center 0" },
          "100%": { "background-position": "center 300%" }
        }
      },
      animation: {
        scroll: "scroll 3s linear infinite",
      }
    }
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography")
  ]
};
