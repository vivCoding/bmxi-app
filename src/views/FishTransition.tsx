import { faFish, faFishFins } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"

import { usePercentageSeen2, useYPercentageOnScreen } from "@/utils/hooks"
import {
  randomFromNormalDist,
  randomFromRange,
  randomIntFromRange,
} from "@/utils/math"
import { guidGenerator } from "@/utils/misc"

import type { IconDefinition } from "@fortawesome/free-solid-svg-icons"

const NUM_FISH = 200

const FISH_COLORS = [
  "rgb(96 165 250)",
  // "rgb(59 130 246)",
  // "rgb(37 99 235)",
  "rgb(30 64 175)",
  "rgb(30 58 138)",
  "rgb(23 37 84)",
  // "rgb(203 213 225)",
  // "rgb(148 163 184)",
  "rgb(100 116 139)",
  "rgb(71 85 105)",
  "rgb(51 65 85)",
  "rgb(30 41 59)",
]

type FishDataType = {
  key: string
  yPos: number
  xPosStart: number
  size: number
  color: string
  speed: number
  fishIcon: IconDefinition
}

export default function FishTransition() {
  const { percentage } = usePercentageSeen2("fish-section")
  const [fishData, setFishData] = useState<FishDataType[]>([])

  useEffect(() => {
    for (let i = 0; i < NUM_FISH; i++) {
      setFishData((prev) => [
        ...prev,
        {
          key: guidGenerator(),
          yPos: randomIntFromRange(-10, 110),
          xPosStart: randomIntFromRange(20, 80),
          // xPosStart: 20,
          size: randomIntFromRange(100, 300),
          speed: randomIntFromRange(200, 700),
          color: FISH_COLORS[randomIntFromRange(0, FISH_COLORS.length - 1)],
          fishIcon: randomFromRange() > 0.5 ? faFish : faFishFins,
        },
      ])
    }
    // const percentageCrowd = 0.7
    // for (let i = 0; i < NUM_FISH * ((1 - percentageCrowd) / 2); i++) {
    //   setFishData((prev) => [
    //     ...prev,
    //     {
    //       key: guidGenerator(),
    //       yPos: randomIntFromRange(-10, 110),
    //       xPosStart: randomIntFromRange(40, 80),
    //       size: randomIntFromRange(80, 200),
    //       color: FISH_COLORS[randomIntFromRange(0, FISH_COLORS.length - 1)],
    //       speed: randomIntFromRange(330, 400),
    //       fishIcon: randomFromRange() > 0.5 ? faFish : faFishFins,
    //     },
    //   ])
    // }
    // for (let i = 0; i < NUM_FISH * percentageCrowd; i++) {
    //   setFishData((prev) => [
    //     ...prev,
    //     {
    //       key: guidGenerator(),
    //       yPos: randomIntFromRange(-10, 110),
    //       xPosStart: randomIntFromRange(80, 160),
    //       size: randomIntFromRange(80, 200),
    //       speed: randomIntFromRange(330, 400),
    //       color: FISH_COLORS[randomIntFromRange(0, FISH_COLORS.length - 1)],
    //       fishIcon: randomFromRange() > 0.5 ? faFish : faFishFins,
    //     },
    //   ])
    // }
    // for (let i = 0; i < (NUM_FISH * (1 - percentageCrowd)) / 2; i++) {
    //   setFishData((prev) => [
    //     ...prev,
    //     {
    //       key: guidGenerator(),
    //       yPos: randomIntFromRange(-10, 110),
    //       xPosStart: randomIntFromRange(160, 200),
    //       size: randomIntFromRange(80, 200),
    //       speed: randomIntFromRange(330, 400),
    //       color: FISH_COLORS[randomIntFromRange(0, FISH_COLORS.length - 1)],
    //       fishIcon: randomFromRange() > 0.5 ? faFish : faFishFins,
    //     },
    //   ])
    // }
  }, [])

  return (
    <>
      <div
        id="fish-container"
        className="fixed left-0 top-0 z-50 h-screen w-screen"
        style={{
          display: percentage >= 1 ? "none" : "block",
        }}
      >
        {fishData.map((fish) => (
          <FontAwesomeIcon
            key={fish.key}
            color={fish.color}
            fontSize={fish.size}
            icon={fish.fishIcon}
            className="absolute block"
            style={{
              top: `${fish.yPos}%`,
              // left: `${fish.xPosStart}%`,
              left: `${-fish.xPosStart + ((percentage - 0.2) / 0.8) * fish.speed}%`,
              // transform: `translate3d(${-fish.xPosStart + percentage * 350}%, 0, 0)`,
            }}
          />
        ))}
      </div>

      <div id="fish-section" className="-z-50 w-screen">
        <div
          className="h-[50vh] w-screen bg-blue-300"
          style={{
            background:
              // "linear-gradient(to bottom, #93c5fd, #70aefc, #5196f9, #357df3, #2563eb)",
              "linear-gradient(to bottom, #93c5fd, #7ab5fd, #63a5fc, #4e94f9, #3b82f6)",
          }}
        />
        <div className="h-[100vh] w-screen bg-blue-500" />
      </div>
    </>
  )
}
