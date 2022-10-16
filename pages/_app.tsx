import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Script from "next/script";
import Link from "next/link";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>DysHyp</title>
                <link rel="stylesheet" type="text/css" href="https://cdn.bittivirta.fi/css/fonts/font-package.css" />
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
