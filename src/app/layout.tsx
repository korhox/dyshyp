"use client";
import "../scss/global.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <title>DysHyp Reader</title>
            </head>
            <body className="flex flex-col">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}