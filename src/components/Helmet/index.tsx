import Head from "next/head"

type HelmetProps = {
  title?: string
  description?: string
}

const DEFAULT_TITLE = "BoilerMake XI"
const DEFAULT_DESC =
  "BoilerMake is an annual, 36-hour hackathon at Purdue University that brings over 500 hackers from across the country under one roof for one incredible weekend."

const Helmet = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESC,
}: HelmetProps) => {
  return (
    <Head>
      <title key="title">{title}</title>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content="hackathon, Purdue" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      {/* TODO add url */}
      {/* <meta property="og:url" content="" /> */}
      <meta property="og:description" content={description} />
      <meta property="og:image" content="images/card.png" />

      <meta property="twitter:title" content={title} />
      {/* TODO add url */}
      {/* <meta property="twitter:url" content="" /> */}
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="images/card.png" />
      <meta name="twitter:card" content="summary_large_image" />

      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </Head>
  )
}

export default Helmet
