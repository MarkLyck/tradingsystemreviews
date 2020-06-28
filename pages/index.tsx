import Head from 'next/head'
import styled from 'styled'
import Home from '~/Home'

const Container = styled.div`
  height: 100%;
`

export default function MainPage() {
  return (
    <Container>
      <Head>
        <title>Trading System Reviews</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home />
    </Container>
  )
}
