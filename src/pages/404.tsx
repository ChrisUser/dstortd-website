import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage: React.FC = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="not-found-container">
      <div className="error-container">
        <div className="top-left-corner" />
        <h1 className="error-title gradient-text">404</h1>
        <div className="bottom-right-corner" />
      </div>
      <p>Oops, qui non c'è ciò che cerchi.</p>
      <Link className="anchor-link error-link" to="/">
        TORNA ALLA HOME
      </Link>
    </div>
  </Layout>
)

export default NotFoundPage
