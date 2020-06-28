import React from 'react'
import { css, Global } from '@emotion/core'
import cssReset from './cssReset'
import typography from './typography'

// Add global styles
export const globalStyles = css`
  * {
    box-sizing: border-box;
  }
  body {
    color: #1d2b3d;
  }

  #__next {
    height: 100%;
    > div {
      height: 100%;
    }
  }

  ${cssReset}
  ${typography}
`

const GlobalStyles = () => <Global styles={globalStyles} />

export default GlobalStyles
