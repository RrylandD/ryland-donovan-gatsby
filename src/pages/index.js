import React from "react"

import {LandingPage, About, Work, Contact, Layout} from "@components"
import SEO from "../components/seo"
import "@styles/global.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Ryland Donovan" />
    <LandingPage />
    <About />
    <Work />
    <Contact />
  </Layout>
)

export default IndexPage
