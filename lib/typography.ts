import { css } from '@emotion/core'

const typography = css`
  h1 {
    font-size: 60px;
    line-height: 72px;
    margin-top: 80px;
    margin-bottom: 64px;
    text-align: center;
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    letter-spacing: -0.2px;
  }

  h3,
  h4,
  h5,
  h6,
  p {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    line-height: 1.5;
  }

  h2 {
    text-align: center;
    font-size: 40px;
    line-height: 46px;
    font-weight: 700;
  }

  h4 {
    text-align: center;
    margin-bottom: 24px;
  }

  p {
    margin-bottom: 16px;
  }

  b {
    font-weight: bold;
  }
`

export default typography
