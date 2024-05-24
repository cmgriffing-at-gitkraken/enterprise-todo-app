import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      colors: {
        primary: {
          50: "#F8FBFF",
          100: "#F1F7FF",
          200: "#DDEAFF",
          300: "#C8DEFF",
          400: "#9EC5FF",
          500: "#75ACFF",
          600: "#699BE6",
          700: "#466799",
          800: "#354D73",
          900: "#23344D",
        },
      }
    },
  },
  plugins: [],
} satisfies Config;
