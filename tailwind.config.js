/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          50: "#f8f9fa",
          100: "#e9ecef",
          200: "#dde2e6",
          300: "#d1d5db",
          400: "#b2bec3",
          500: "#8d99ae",
          600: "#637378",
          700: "#495057",
          800: "#374151",
          900: "#1f2937",
        },
        brand: {
          orange: "#ea580c",
          navy: "#1e3a5f",
        },
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        xl: "1rem",
        "2xl": "1.5rem",
        "inline": "0.375rem",
      },
      fontSize: {
        display: ["2.5rem", { lineHeight: "1.1", fontWeight: "700" }],
        displayMobile: ["2rem", { lineHeight: "1.2", fontWeight: "700" }],
      },
      spacing: {
        "9": "2.25rem",
        "10": "2.5rem",
        "11": "2.75rem",
        "12": "3rem",
        "13": "3.25rem",
        "14": "3.5rem",
        "15": "3.75rem",
        "16": "3.75rem",
        "18": "3.75rem",
        "20": "5rem",
        "24": "6rem",
        "30": "7.5rem",
        "32": "7.5rem",
        "36": "9rem",
        "360": "9px",
        "72": "18px",
        "96": "24px",
      },
    },
  },
  plugins: [],
};