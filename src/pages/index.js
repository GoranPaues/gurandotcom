import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Guran.com"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `database`, `oracle`, `sql`, `postgresql`, `postgres`, `tips`]}
        />
        <img style={{ margin: 0 }} src="./GoranPaues.jpg" alt="Gatsby Scene" />
        <h1>
          Göran Paues - Database Developer
        </h1>
        <p>
          Hi, welcome to my page! More information coming shortly.{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </p>
      </Layout>
    )
  }
}

export default IndexPage
