import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 font-sans text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-7 md:pt-12 text-justify break-all`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={3}>
      <Hero offset={0}>
        <BigTitle>
          Hi, <br /> I'm Bahador! :)
        </BigTitle>
        <Subtitle>
          Full Stack Software Brewer
          <br /> Toronto, ON.
        </Subtitle>
      </Hero>
      <About offset={1}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Bahador Izadpanah profile picture" />
          <AboutSub>
            As a seasoned software engineer with over a decade of experience in software development, I excel in
            crafting exceptional web and mobile applications.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          Passionate about technology, I am interested in a wide range of topics, including Internet of Things (IoT),
          cloud computing, and UI/UX design and accessibility. Continuously learning, I try to stay current with
          advancements in these areas. In my personal life, I find balance and inspiration by exploring my passion for
          music, outdoor activities, and reading, which keeps me motivated and engaged in my professional endeavors.
        </AboutDesc>
      </About>
      <Contact offset={2}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:hi@baiz.ca">Hi</a> or find me on:
            <a href="https://github.com/bahaaador"> GitHub</a>,<a href="https://twitter.com/bahaaador"> nvmTwitter</a>{' '}
            or
            <a href="https://stackoverflow.com/users/1312222/bahador-izadpanah"> StackOverflow</a>.
          </ContactText>
        </Inner>
        <Footer>
          &copy; {new Date().getFullYear()} Bahador I.
          <br />
          Template Made by <a href="https://www.lekoarts.de">LekoArts</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
