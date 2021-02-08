import React from 'react'
import Head from 'next/head'

import GamerLogo from '../assets/gamer.svg'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>React Setup</title>
      </Head>

      <GamerLogo />
      <h1>ReactJS Structure</h1>
      <p>A ReactJS + Next.js structure.</p>
    </Container>
  )
}

export default Home
