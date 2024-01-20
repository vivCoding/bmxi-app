import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Intro() {
  return (
    <>
      <div className="h-screen bg-blue-300">
        <div className="flex flex-col justify-center px-20">
          <div className="mt-14">
            <h1 className="text-[12rem] font-bold text-blue-700">
              <span className="text-animate animate-dive-in">Dive</span>{" "}
              <span className="text-animate animate-dive-in-alt">into</span>
            </h1>
            <h1 className="mt-16 text-8xl text-blue-400">
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
                className="animate-ever text-animate font-extrabold"
                style={{ animationDelay: "2.75s, 3.25s" }}
              >
                ever
              </span>
              <span
                className="animate-arrow text-animate ml-8"
                style={{ animationDelay: "3.15s, 3.55s" }}
              >
                <FontAwesomeIcon
                  icon={faArrowDown}
                  className="h-20 align-middle"
                />
              </span>
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}
