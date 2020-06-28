import React from 'react'
import styled from 'styled'
import Reviews from './Reviews'
import Hero from './Hero'
import Footer from './Footer'

const Container = styled.div`
  background: ${(props) => props.theme.palette.background.lightGray};
  width: 100%;
  height: 100%;
  padding: 32px;
`

const Content = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`

const Home = () => {
  return (
    <Container>
      <Content>
        <Hero />
        <Reviews />
        <Footer />
      </Content>
    </Container>
  )
}

export default Home
