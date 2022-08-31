/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color-1": "var(--orange)",
        "primary-color-2": "var(--pale-orange)",
        'dark-blue': ' hsl(220, 13%, 13%)',
        "dark-grayish-blue": " hsl(219, 9%, 45%)",
        "grayish-blue": "hsl(220, 14%, 75%)",
        "light-grayish-blue": "hsl(223, 64%, 98%)",
      },
    },
  },
  plugins: [],
}
