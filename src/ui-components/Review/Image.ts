import styled from 'styled'

export const Image = styled.img`
  display: block;
  width: auto;
  height: auto;
  max-height: ${(props: any) => (props.size === 'large' ? '800px' : '600px')};
  max-width: 1200px;
  margin: 24px auto;
`
