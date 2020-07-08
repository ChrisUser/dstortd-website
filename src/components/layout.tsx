import React from "react"
import Header from "./header"
import ".././styles/global.sass"

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer>
        dstortd {new Date().getFullYear()}{" "}
        <a
          className="anchor-link"
          target="_blank"
          href="https://www.instagram.com/dstortd.studio/"
        >
          INSTAGRAM
        </a>
      </footer>
    </>
  )
}

export default Layout
