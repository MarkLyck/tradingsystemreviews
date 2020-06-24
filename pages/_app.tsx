import App from 'next/app'
import React from 'react'
import Head from 'next/head'
import Router from 'next/router'
import Layout from 'lib/layout'
import '~/common/iconLibrary'
// Scroll to top on all route changes
Router.events.on('routeChangeComplete', () => {
  window.scrollTo(0, 0)
})

const _App = ({ Component, pageProps, apolloClient }) => (
  <>
    <Head>
      <title>Trading System Reviews - Weekly Stocktip Review</title>
    </Head>
    <Layout>
      <Component {...pageProps} apolloClient={apolloClient} />
    </Layout>
  </>
)

export default _App
