import React from "react"
import Header from "./header"
import ".././styles/global.sass"

interface Props {
  children?: any
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer>
        dstortd {new Date().getFullYear()}{" "}
        <a
          className="anchor-link"
          target="_blank"
          href=""
        >
          INSTAGRAM
        </a>
      </footer>
    </>
  )
}

export default Layout
