import React from 'react'
import styled from 'styled'

const Container = styled.div`
  background: lightgray;
  padding: 24px;
  margin-bottom: 60px;
`

export const Disclaimer = ({ children }) => {
  return <Container>{children}</Container>
}
