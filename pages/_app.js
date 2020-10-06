import '../assets/css/global.scss';
import Head from 'next/head';

export default function App({Component, pageProps}) {
    return (
        <>
        <Head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="description" content="Sunlight"/>
            <title>Sunlight</title>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap"
                  rel="stylesheet"/>
        </Head>
        <Component {...pageProps} />
        </>
    )
}