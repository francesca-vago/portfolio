import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Section from "../components/section"
import ProjectCard from "../components/project-card"
import ContactForm from "../components/contact-form"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <a id="header"></a>
    <Hero />
    <Section title="About"
    >
      <a id="about"></a>
      This is the about section content
    </Section>
    <Section title="Projects"
    >
      <a id="projects"></a>
      <ProjectCard />
    </Section>
    <Section title="Contact"
    >
      <a id="contact"></a>
      <ContactForm/>
    </Section>
  </Layout>
)

export default IndexPage
