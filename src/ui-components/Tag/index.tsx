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
  background-color: ${(props: any) => (props.variant === 'filled' ? props.backgroundColor : 'white')};
  border: ${(props: any) => (props.variant !== 'filled' ? `2px solid ${props.backgroundColor}` : 'none')};
  color: ${(props) => (props.variant !== 'filled' ? props.backgroundColor : props.color)};
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 14px;
  line-height: 1;

  display: inline-flex;
`

export const Tag = ({ type = 'excellent', variant = 'filled', icon, children }) => {
  let color = theme.palette.scale[type].color
  let backgroundColor = theme.palette.scale[type].background
  // if (variant === 'hollow') backgroundColor = theme.palette.white

  return (
    <Container className="tag" variant={variant} color={color} backgroundColor={backgroundColor}>
      <IconContainer>{icon}</IconContainer>
      <Text>{children}</Text>
    </Container>
  )
}

export const TagsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 16px;

  .tag {
    margin-right: 8px;
    margin-bottom: 8px;
  }
`
