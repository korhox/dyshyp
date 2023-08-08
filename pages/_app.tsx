import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>DysHyp</title>
            </Head>
            <div className="app flex flex-col h-full">
                <Header />
                <Component {...pageProps} />
                <Footer />
            </div>
        </>
    );
}

export default MyApp;
