import { Analytics as VercelAnalytics } from "@vercel/analytics/react"

// TODO choose one font
import "@fontsource/sniglet"
import "@fontsource-variable/radio-canada"
import "@fontsource-variable/lexend"
import "@fontsource-variable/inter"

import "@fortawesome/fontawesome-svg-core/styles.css"
import "@/styles/animations/dives.css"
import "@/styles/animations/fadeIns.css"
import "@/styles/globals.css"

import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <VercelAnalytics />
    </>
  )
}
