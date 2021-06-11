import React from "react"

const LandingPage = ({ landingPage, toggleLandingPage}) => {
  const hidePage = () => {
    toggleLandingPage(false)
  }
  return (
    <div 
      className={landingPage ? "page" : "hideLandingPage"} 
      onClick={hidePage}
    >
      <div 
        className="landingPage1 glitch"
        data-text="Brutal"
      >
      </div>
      <div 
        className="landingPage glitch"
        data-text="Фокус"
      >
      </div>
    </div>
  )
}

export default LandingPage