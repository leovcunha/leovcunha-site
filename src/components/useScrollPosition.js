import React from "react"

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = React.useState(0)

  React.useEffect(() => {
    console.log(window.scrollY)
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return [scrollPosition, setScrollPosition]
}

export default useScrollPosition
