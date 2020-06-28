import React from 'react'
import styled from 'styled'
import { ReviewContainer } from './index'

const Status = styled.p`
  text-align: center;
`

const InProgress = ({ title }) => (
  <ReviewContainer>
    <h1>{title} Review</h1>
    <Status>This review is in progress</Status>
  </ReviewContainer>
)
export default InProgress
