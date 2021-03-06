import Document, { Html, Head, Main, NextScript } from 'next/document'
import dynamic from 'next/dynamic'

class MyDocument extends Document {
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return { ...initialProps }
  // }

  render() {
    return (
      <Html lang='ru'>
        <Head>

        <script type='text/javascript' src='/js/jquery-3.5.1.min.js'></script>
          {/* <script type='text/javascript' src='/js/slick.min.js'></script>
          <script type='text/javascript' src='/js/jquery.fancybox.min.js'></script>
          <script type='text/javascript' src='/js/stickykit.js'></script>
          <script type='text/javascript' src='/js/jquery.autocolumnlist.min.js'></script>
          <script type='text/javascript' src='/js/masonry.min.js'></script>
          <script type='text/javascript' src='/js/lazyYT.js'></script>
          <script type='text/javascript' src='/js/myjs.js'></script> */}
        </Head>
        <body>
          <Main />
          <NextScript />
          
        </body>
      </Html>
    )
  }
}

export default MyDocument
