import React from "react"

import {LandingPage, About, Work, Layout} from "@components"
import SEO from "../components/seo"
import "@styles/global.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Ryland Donovan" />
    <LandingPage />
    <About />
    <Work />
  </Layout>
)

export default IndexPage
