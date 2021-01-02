import React from "react"
import About from "../components/About"
import Booking from "../components/Booking"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Service from "../components/Service"
import Opening from "../components/Opening"
import Menu from "../components/Menu"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <Booking />
    <Service />
    <Opening />
    <Menu />
  </Layout>
)

export default IndexPage
