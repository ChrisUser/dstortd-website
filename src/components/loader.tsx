import React, { useEffect } from "react"
import "../styles/global.sass"

const Loader: React.FC = () => {
  useEffect(() => {
    const loaderImage = document.getElementById("loaderImage")
    loaderImage.classList.add("float-up")
    setTimeout(() => {
      loaderImage.classList.add("squeeze-icon")
    }, 1700)
  }, [])

  return (
    <div className="loader-panel">
      <div id="loaderImage" className="loading-service-icon"></div>
    </div>
  )
}

export default Loader
