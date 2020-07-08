import React from "react"
import CustomImage from "./customImage"
import scrollTo from "gatsby-plugin-smoothscroll"

const Header: React.FC = () => {
  return (
    <header>
      <div className="text-logo-container">
        <CustomImage fileName={"title.png"} />
      </div>
      <button
        onClick={() => scrollTo("#contactsContainer")}
        className="header-button"
      >
        CONTATTACI
      </button>
    </header>
  )
}

export default Header
