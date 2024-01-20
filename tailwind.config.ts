import defaultTheme from "tailwindcss/defaultTheme"
import plugin from "tailwindcss/plugin"

import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        // sans: ["Sniglet", ...defaultTheme.fontFamily.sans],
        // sans: ["Radio Canada Variable", ...defaultTheme.fontFamily.sans],
        sans: ["Lexend", ...defaultTheme.fontFamily.sans],
        // sans: ["Inter", ...defaultTheme.fontFamily.sans],
        fish: ["LostFish", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        // "dive-in": "dive-in forwards",
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "animation-delay": (value) => {
            return {
              // override 'animation' property using !important
              "animation-delay": `${value} !important`,
            }
          },
        },
        {
          // use transitionDelay values as default values
          values: theme("transitionDelay"),
        }
      )
      matchUtilities(
        {
          "animation-duration": (value) => {
            return {
              // override 'animation' property using !important
              "animation-duration": `${value} !important`,
            }
          },
        },
        {
          // use transitionDelay values as default values
          values: theme("transitionDelay"),
        }
      )
    }),
  ],
}

export default config
