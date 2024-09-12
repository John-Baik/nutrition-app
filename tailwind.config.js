/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        young: ["Young-Serif", "sans-serif"],
        "outfit-variable": ["Outfit-Variable", "sans-serif"],
        "outfit-black": ["Outfit-Black", "sans-serif"],
        "outfit-bold": ["Outfit-Bold", "sans-serif"],
        "outfit-extra-bold": ["Outfit-ExtraBold", "sans-serif"],
        "outfit-extra-light": ["Outfit-ExtraLight", "sans-serif"],
        "outfit-light": ["Outfit-Light", "sans-serif"],
        "outfit-medium": ["Outfit-Medium", "sans-serif"],
        "outfit-regular": ["Outfit-Regular", "sans-serif"],
        "outfit-semi-bold": ["Outfit-SemiBold", "sans-serif"],
        "outfit-thin": ["Outfit-Thin", "sans-serif"],
      },
    },
  },
  plugins: [],
};
