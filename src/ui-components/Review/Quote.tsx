import styled from 'styled'
import React from 'react'

const QuoteContainer = styled.div`
  padding: 24px;
  background: ${(props) => props.theme.palette.background.lightGray};
  border-radius: 8px;
  margin-bottom: 16px;
`
const Author = styled.p`
  margin: 16px 0 0;
`
export const Quote = ({ children, author = '' }) => {
  return (
    <QuoteContainer>
      {children}
      <Author>- {author}</Author>
    </QuoteContainer>
  )
}
