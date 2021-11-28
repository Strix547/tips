import Document, { Html, Head, NextScript, Main } from 'next/document'
import { Fragment } from 'react'
import { ServerStyleSheet as StyledComponentSheets } from 'styled-components'
import { ServerStyleSheets as MaterialUiServerStyleSheets } from '@material-ui/core/styles'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const styledComponentSheet = new StyledComponentSheets()
    const materialUiSheets = new MaterialUiServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            styledComponentSheet.collectStyles(materialUiSheets.collect(<App {...props} />))
        })

      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: [
          <Fragment key="styles">
            {initialProps.styles}
            {materialUiSheets.getStyleElement()}
            {styledComponentSheet.getStyleElement()}
          </Fragment>
        ]
      }
    } finally {
      styledComponentSheet.seal()
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head />

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
