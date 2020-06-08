import React from "react"

import Layout from "../components/layout"
import Section from "../components/section"
import SectionDivider from "../components/section-divider"
import ProjectCard from "../components/project-card"
import ContactForm from "../components/contact-form"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <a id="header"></a>
      <SEO title="Home" />
      <SectionDivider />
      <a id="about"></a>
      <Section title="About Me"
      >
        <Image />
        <p>
          I am a full-stack web developer with a background in marketing and a passion for design. 
          I fell in love with coding in 2019 and decided it was time to try and change my career. 
          I attended a 9-weeks bootcamp in London. 
          I enjoy working on projects from start to finish and I am looking for the right opportunity to improve my skills and learn more.
        </p>
      </Section>
      <SectionDivider />
      <a id="projects"></a>
      <Section title="Projects"
      >
        <p className="txt-align-center">
            Here’s a selection of some recent web development projects.
            <br/> 
            For more web design work you can visit me on <span><a href="https://dribbble.com/Franci_Vago" target="_blank" className="text-color: #000">Dribbble.</a></span>
        </p>
        
        <ProjectCard 
          title="Guide Me"
          text="Final project of the bootcamp. Me and my team built this mobile-first web app in less than 2 weeks. It is based on the idea I pitched to help travellers create and share guided itineraries to find out more information about the places they are visiting."
          wLink="http://www.guide-me.live/"
          gLink="https://github.com/paullecomte07/guide_me"
        />
        <ProjectCard 
          title="Borrow My Cactus"
          text="First team project of the bootcamp. This marketplace website allows users to earn money by taking care of other people's plants while they are on holiday."
          wLink="https://borrow-cactus.herokuapp.com/"
          gLink="https://github.com/francesca-vago/borrow-my-cactus"
        />
        <ProjectCard />
        {/* <BlackButton>
          Check them out
        </BlackButton> */}
      </Section>
      <SectionDivider />
      <a id="contact"></a>
      <Section>
        <ContactForm/>
      </Section>
    </Layout>
  )
    
}

export default IndexPage
