import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect } from "react"

import { useYPercentageOnScreen } from "@/utils/hooks"

export default function Intro() {
  const { percentage } = useYPercentageOnScreen("intro-section")

  // useEffect(() => {
  //   console.log(percentage)
  // }, [percentage])

  return (
    <>
      <div id="intro-section" className="-z-20 h-screen w-screen bg-blue-300">
        <div
          // className="fixed left-0 top-0"
          style={{
            // transform: `translate3d(0, -${percentage * 100}%, 0)`,
            opacity: `${percentage > 0.4 ? 1 - (percentage - 0.4) / 0.2 : 1}`,
          }}
        >
          <div className="flex flex-col justify-center px-10 sm:px-20">
            <div className="mt-14 sm:mt-20">
              <h1 className="text-7xl font-bold text-blue-700 sm:text-9xl xl:text-[12rem]">
                <span className="text-animate animate-dive-in">Dive</span>{" "}
                <span
                  className="text-animate animate-dive-in-alt"
                  style={{
                    animationDelay: "0.3s, 1.3s, 4.3s",
                  }}
                >
                  into
                </span>
              </h1>
              <h1 className="mt-10 text-4xl text-blue-400 sm:text-7xl xl:text-8xl">
                <span
                  className="animate-fade-in-up text-animate"
                  style={{ animationDelay: "1.5s, 2s" }}
                >
                  the
                </span>{" "}
                <span
                  className="animate-fade-in-up text-animate"
                  style={{ animationDelay: "1.9s, 2.4s" }}
                >
                  best
                </span>{" "}
                <span
                  className="animate-fade-in-up text-animate"
                  style={{ animationDelay: "2.35s, 2.85s" }}
                >
                  hackathon
                </span>{" "}
                <span
                  className="animate-ever text-animate ml-2 font-extrabold"
                  style={{ animationDelay: "2.75s, 3.25s" }}
                >
                  ever
                </span>
                <span
                  className="animate-arrow text-animate ml-8 mt-2 xl:inline-block"
                  style={{ animationDelay: "3.15s, 3.55s" }}
                >
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    className="h-10 align-middle sm:h-16 xl:h-20"
                  />
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
