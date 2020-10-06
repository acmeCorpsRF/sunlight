import Document, {Html, Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps}
    }

    render() {
        return (
            <Html>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="description" content="Sunlight"/>
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap"
                      rel="stylesheet"/>
            </Head>
            <body>
            <div className="container">
                <Main/>
                <NextScript/>
            </div>
            </body>
            </Html>
        )
    }
}