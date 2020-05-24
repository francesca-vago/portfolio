import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Section from "../components/section"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Section title="About"
    >
      This is the about section content
    </Section>
    <Section title="Projects"
    >
      This is the projects section content
    </Section>
    <Section title="Contact"
    >
      This is the contact section content
    </Section>
  </Layout>
)

export default IndexPage
