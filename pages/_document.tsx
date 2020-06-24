import Document, { Head, Main, NextScript } from 'next/document'
import { extractCritical } from 'emotion-server'

const DESCRIPTION = `Trading system reviews`

export default class FSDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const page = renderPage()
    const styles = extractCritical(page.html)
    return { ...page, ...styles }
  }

  constructor(props) {
    super(props)
    const { __NEXT_DATA__, ids } = props
    if (ids) {
      __NEXT_DATA__.ids = ids
    }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/static/favicon/site.webmanifest" />
          <link rel="mask-icon" href="/static/favicon/safari-pinned-tab.svg" color="#0066e8" />
          <link rel="shortcut icon" href="/static/favicon/favicon.ico" />
          <meta name="msapplication-TileColor" content="#0066e8" />
          <meta name="msapplication-config" content="/static/favicon/browserconfig.xml" />
          <meta name="theme-color" content="#ffffff" />

          <meta property="og:title" content="Trading System Reviews - Gain an unfair investing advantage" />
          <meta property="og:site_name" content="Trading System Reviews - Gain an unfair investing advantage" />
          <meta name="description" content={DESCRIPTION} />
          <meta property="og:description" content={DESCRIPTION} />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_us" />
          <meta property="og:url" content="https://tradingsystemreviews.com" />
          <meta property="og:image" content="https://tradingsystemreviews.com/static/og_image.jpg" />

          <link rel="manifest" href="/static/manifest.json" />
          <link rel="preconnect" href="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" />
          {/* @ts-ignore */}
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
        </Head>
        <body>
          <Main />
          <NextScript />

          {/* webfont loader */}
          <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              WebFont.load({
                google: {
                  families: ['Poppins:300,400,500,600,700', 'Playfair Display:700'],
                  text: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789,. $@*"!?/~+-%()'
                }
              });
             `,
            }}
          />
        </body>
      </html>
    )
  }
}
