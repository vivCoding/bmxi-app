import Helmet from "@/components/Helmet"
import FishTransition from "@/views/FishTransition"
import Intro from "@/views/Intro"
import Welcome from "@/views/Welcome"

export default function Home() {
  return (
    <>
      <Helmet />
      <Intro />
      <FishTransition />
      <Welcome />
    </>
  )
}
