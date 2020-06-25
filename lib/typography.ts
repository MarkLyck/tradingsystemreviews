import { css } from '@emotion/core'
import theme from '~/common/theme'

const typography = css`
  h1 {
    font-size: 60px;
    line-height: 72px;
    margin-top: 80px;
    margin-bottom: 64px;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    letter-spacing: -0.2px;
  }

  h3,
  h4,
  h5,
  h6,
  p,
  div {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    line-height: 2;
  }

  h2 {
    text-align: center;
    font-size: 40px;
    line-height: 46px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  h4 {
    text-align: center;
    margin-bottom: 24px;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0.4px;
    color: ${theme.palette.typography.subtitle};
  }

  p {
    margin-bottom: 16px;
  }

  b {
    font-weight: bold;
  }
`

export default typography
