import React from 'react'
import styled from 'styled'
import theme from '~/common/theme'

const IconContainer = styled.div`
  margin-right: 8px;
  line-height: 1;
`

const Text = styled.span`
  white-space: nowrap;
`

const Container = styled.div`
  background-color: ${(props: any) => props.backgroundColor};
  border: 1px solid ${(props) => props.color};
  color: ${(props) => props.color};
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 14px;
  line-height: 1;

  display: inline-flex;
`

export const Tag = ({ type = 'excellent', variant = 'filled', icon, children }) => {
  let color = theme.palette.scale.excellent.color
  let backgroundColor = theme.palette.scale.excellent.background
  if (type === 'bad') {
    color = theme.palette.scale.worst.color
    backgroundColor = theme.palette.scale.worst.background
  }
  if (variant === 'hollow') backgroundColor = theme.palette.white

  return (
    <Container className="tag" color={color} backgroundColor={backgroundColor}>
      <IconContainer>{icon}</IconContainer>
      <Text>{children}</Text>
    </Container>
  )
}

export const TagsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .tag {
    margin-right: 8px;
    margin-bottom: 8px;
  }
`
