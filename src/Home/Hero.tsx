import React from 'react'
import styled from 'styled'

const Container = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Logo = styled.img`
  height: auto;
  width: 100%;
  max-width: 800px;
  margin-bottom: 40px;
  text-align: center;
`

const Hero = () => {
  return (
    <Container>
      <Logo src="/static/images/Logo.png" alt="Trading System Reviews" />
      <h4>
        Hi! My name is Michael and I've tried a lot of trading systems! Turns out, most of them are complete scams!
        That's why I created Trading System Reviews to help you figure out what systems are worth your time and money.
      </h4>
    </Container>
  )
}

export default Hero
