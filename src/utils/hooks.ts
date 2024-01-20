import { useEffect, useState } from "react"

import { clampValue } from "./math"

/** Tracks how much percentage an element is on screen. Returns number between [0, 1]
 *
 * Ex. If half of element is viewable on screen, returns 0.5.
 */
export function usePercentageSeen(elemId: string) {
  const [percentageSeen, setPercentageSeen] = useState(0)

  const onChange = () => {
    const element = document.getElementById(elemId)
    if (!element) return

    // Get the relevant measurements and positions
    const viewportHeight = window.innerHeight
    const scrollPosition = window.scrollY
    const elementOffsetTop = element.offsetTop
    const elementHeight = element.offsetHeight

    // calculate y positions of the screen edges
    const topEdge = scrollPosition
    const bottomEdge = scrollPosition + viewportHeight
    // check if element is already past the top screen edge
    const overTopEdge = elementOffsetTop < topEdge

    // calculate the percentage on screen
    // NOTE we divide by min(elementHeight, viewportHeight).
    // That way, if element is larger than screen, will return 100% when element covers entire screen
    const calcPercentage =
      (overTopEdge
        ? elementOffsetTop + elementHeight - topEdge
        : bottomEdge - elementOffsetTop) /
      Math.min(elementHeight, viewportHeight)
    // Restrict the range to between 0 and 1
    const percentage = clampValue(0, 1, calcPercentage)
    setPercentageSeen(percentage)
  }

  const handleScroll = () => {
    onChange()
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elemId])

  return { percentageSeen }
}

/** Tracks an element's y position on screen, converted to a percentage based on screen height. Returns number between [0, 1].
 *
 * By default, uses bottom edge as the element's y position. Can use top edge instead
 *
 * Ex. if bottom edge of element is in middle of screen, returns 0.5.
 */
export function useYPercentageOnScreen(elemId: string, useTopEdge = false) {
  const [percentage, setPercentage] = useState(0)

  const onChange = () => {
    const element = document.getElementById(elemId)
    if (!element) return

    // Get the relevant measurements and positions
    const viewportHeight = window.innerHeight
    const scrollPos = window.scrollY
    const elementPos = useTopEdge
      ? element.offsetTop
      : element.offsetTop + element.offsetHeight

    // calculate scroll position y where the element is just at the bottom edge of screen
    const trigger = elementPos - viewportHeight
    // now calculate the element's position y on screen, and get percentage y
    // also restrict range to between 0 and 1
    const percentage = clampValue(0, 1, (scrollPos - trigger) / viewportHeight)
    setPercentage(percentage)
  }

  const handleScroll = () => {
    onChange()
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elemId])

  return { percentage }
}

/** Tracks scroll y position, both real value and percentage of page. Percentage is between [0, 1]
 */
export function useScrollPosition() {
  const [yPos, setYPos] = useState(0)
  const [yPercentage, setYPercentage] = useState(0)

  const handleScroll = () => {
    const yPos = window.scrollY
    const yPercentage =
      document.documentElement.scrollTop /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight)
    setYPos(yPos)
    setYPercentage(yPercentage)
  }

  useEffect(() => {
    setYPos(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return { yPos, yPercentage }
}

/**
 * https://stackoverflow.com/questions/20223243/js-get-percentage-of-an-element-in-viewport
 *
 */
export function usePercentageSeen2(elemId: string) {
  const [percentageSeen, setPercentage] = useState(0)

  const getPercentageSeen = () => {
    // TODO figure out how to get elem once
    const elem = document.getElementById(elemId)
    if (!elem) return
    // Get the relevant measurements and positions
    const viewportHeight = window.innerHeight
    const scrollTop = window.scrollY
    const elementOffsetTop = elem.offsetTop
    const elementHeight = elem.offsetHeight

    // Calculate percentage of the element that's been seen
    const distance = scrollTop + viewportHeight - elementOffsetTop
    const percentage = distance / ((viewportHeight + elementHeight) / 100)

    // Restrict the range to between 0 and 100
    setPercentage(Math.min(100, Math.max(0, percentage)) / 100)
  }

  const handleScroll = () => {
    getPercentageSeen()
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elemId])

  return { percentage: percentageSeen }
}
