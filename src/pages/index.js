import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Section from "../components/section"
import SectionDivider from "../components/section-divider"
import ProjectCard from "../components/project-card"
import ContactForm from "../components/contact-form"
import { BlackButton } from "../components/buttons"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <a id="header"></a>
    <Hero />
    <SectionDivider />
    <Section title="about me"
    >
      <a id="about"></a>
      <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
      </p>
      <BlackButton>
        download resume
      </BlackButton>
    </Section>
    <SectionDivider />
    <Section title="projects"
    >
      <a id="projects"></a>
      <ProjectCard />
    </Section>
    <SectionDivider />
    <Section>
      <a id="contact"></a>
      <ContactForm/>
    </Section>
  </Layout>
)

export default IndexPage
