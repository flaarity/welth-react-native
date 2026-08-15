/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "brand-bg": "#1A1D26",
        "brand-body": "#FAFAF7",
        "brand-text-muted": "#8A8D96",
        "brand-text-secondary": "#5C5F66",
        "brand-coral": "#FF6B6B",
        "brand-blue": "#4A9EFF",
      },
    },
  },
  plugins: [],
};
