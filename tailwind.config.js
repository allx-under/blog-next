/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url(https://img.freepik.com/free-photo/office-table-with-cup-coffee-keyboard-notepad_1220-4584.jpg?w=1800&t=st=1686732973~exp=1686733573~hmac=744db9c05d943c7693bd95671a5f1c74290d46bb36dac86ec833021dcffb7f37)",
      },
    },
  },
  plugins: [],
};
