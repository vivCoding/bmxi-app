import Helmet from "@/components/Helmet"
import FishTransition from "@/views/FishTransition"
import Intro from "@/views/Intro"
import Misc from "@/views/Misc"
import Welcome from "@/views/Welcome"

export default function Home() {
  return (
    <>
      <Helmet />
      <Intro />
      <FishTransition />
      <Welcome />
      <Misc />
    </>
  )
}
