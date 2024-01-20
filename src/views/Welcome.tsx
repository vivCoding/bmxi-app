import { faDiscord } from "@fortawesome/free-brands-svg-icons"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useRef } from "react"

import { usePercentageSeen2, useYPercentageOnScreen } from "@/utils/hooks"
import { clampValue } from "@/utils/math"

export default function Welcome() {
  const { percentage } = usePercentageSeen2("fish-section")

  const welcomeTo = useRef<HTMLHeadingElement>(null)
  const boilermakeTitle = useRef<HTMLHeadingElement>(null)
  const underTheSea = useRef<HTMLHeadingElement>(null)
  const links = useRef<HTMLDivElement>(null)

  // useEffect(() => {
  //   console.log("got", percentage)
  // }, [percentage])

  useEffect(() => {
    if (percentage < 1) return
    // when we see the full thing, start animating
  }, [percentage])

  return (
    <>
      <div
        id="welcome-title-section"
        className="relative h-[200vh] w-screen bg-blue-500"
      >
        <div className="fixed left-0 top-0 z-10 h-screen w-screen">
          <div
            className="absolute left-1/2 top-1/2 z-10 h-screen w-screen -translate-x-1/2 -translate-y-1/2 "
            style={{
              opacity: (percentage - 0.38) / 0.1,
            }}
          >
            <div
              className="flex h-full w-full flex-col items-center justify-center text-center text-blue-200"
              style={{
                scale: `${((percentage - 0.5) / 0.5) * 20 + 80}%`,
              }}
            >
              <div>
                <h1 className="font-fish text-6xl">Welcome to</h1>
                <h1 className="font-fish text-9xl">Boilermake XI</h1>
                {/* <h6 className="font-fish text-5xl">Under the Sea</h6> */}
              </div>
              {/* <div className="flex flex-row items-center justify-center space-x-4 text-xl text-blue-300">
                <a
                  href="https://discord.com/invite/MsxN7nVPQh"
                  className="font-fish"
                >
                  Discord
                  <FontAwesomeIcon className="ml-1" icon={faDiscord} />
                </a>
                <a
                  href="https://boilermake-xi.devpost.com/"
                  className="font-fish"
                >
                  Devpost
                  <FontAwesomeIcon className="ml-1" icon={faArrowRight} />
                </a>
              </div> */}
            </div>
          </div>
          <div
            className="fixed bottom-0 w-full"
            style={{
              opacity: (percentage - 0.38) / 0.1,
            }}
          >
            <svg
              className="translate-y-[10%]"
              viewBox="0 0 900 600"
              width="100%"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
            >
              <path
                d="M0 518L16.7 514.8C33.3 511.7 66.7 505.3 100 496.7C133.3 488 166.7 477 200 472.2C233.3 467.3 266.7 468.7 300 477.7C333.3 486.7 366.7 503.3 400 496.8C433.3 490.3 466.7 460.7 500 449.7C533.3 438.7 566.7 446.3 600 453.8C633.3 461.3 666.7 468.7 700 472.3C733.3 476 766.7 476 800 474.7C833.3 473.3 866.7 470.7 883.3 469.3L900 468L900 601L883.3 601C866.7 601 833.3 601 800 601C766.7 601 733.3 601 700 601C666.7 601 633.3 601 600 601C566.7 601 533.3 601 500 601C466.7 601 433.3 601 400 601C366.7 601 333.3 601 300 601C266.7 601 233.3 601 200 601C166.7 601 133.3 601 100 601C66.7 601 33.3 601 16.7 601L0 601Z"
                fill="#f7ce9b"
                strokeLinecap="round"
                strokeLinejoin="miter"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}
