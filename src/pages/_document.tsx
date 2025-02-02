import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
        <link rel="shortcut icon" href="/favicon.ico"/>
        <link href="https://fonts.googleapis.com/css2?family=Annie+Use+Your+Telescope&display=swap" rel="stylesheet" />
        <link href="https://emoji-css.afeld.me/emoji.css" rel="stylesheet" />
        <script type="text/javascript" src="/jquery-3.7.1.slim.min.js"></script>
        <script type="text/javascript" src="/memeAnimate.js"></script>

        <meta property="og:title" content="#RUdown" />
        <meta property="og:type" content="article" />
        <meta property="og:description" content="#RUdown introduces  Token, a digital currency with a heart. By investing in  Token, you support not just innovative blockchain technology but contribute to a vital cause. Our cryptocurrency is designed to be user-friendly, secure, and transparent, with a vision to create a more inclusive financial ecosystem. Every transaction with  Tokenis a step towards raising awareness and support for individuals with Down syndrome." />
        <meta property="og:image" content="/img/social_image.jpg" />
        <meta property="og:url" content="https://rudown.com" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="rudown.com" />
        <meta property="twitter:url" content="https://rudown.com" />
        <meta name="twitter:title" content="#RUdown" />
        <meta name="twitter:description" content="#RUdown introduces  Token, a digital currency with a heart. By investing in  Token, you support not just innovative blockchain technology but contribute to a vital cause. Our cryptocurrency is designed to be user-friendly, secure, and transparent, with a vision to create a more inclusive financial ecosystem. Every transaction with  Tokenis a step towards raising awareness and support for individuals with Down syndrome." />
        <meta name="twitter:image" content="https://rudown.com/img/social_image.jpg" />


        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
