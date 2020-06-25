import React from 'react'
import styled from 'styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Container = styled.div`
  background: ${(props) => props.theme.palette.background.lightGray};
  padding: 24px;
  margin-bottom: 60px;
  border-radius: 8px;

  p:last-of-type {
    margin-bottom: 0;
  }
`

const Title = styled.h6`
  font-weight: 600;

  svg {
    margin-left: 8px;
  }
`

const Content = styled.div``

export const Disclaimer = ({ children }) => {
  return (
    <Container>
      <Title>
        Disclaimer
        <FontAwesomeIcon icon={['far', 'info-circle']} />
      </Title>
      <Content>{children}</Content>
    </Container>
  )
}
