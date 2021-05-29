import Document, {Html, Head, Main, NextScript} from 'next/document'
export default class MyDocument extends Document{
    render(){
        return(
            <Html>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="description" content="This is my card, created with Next.js" />
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}