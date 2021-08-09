import { ReactElement } from "react";
import Head from 'next/head';

export const HeadComponent = (): ReactElement => {
    return (
        <Head>
            <title>Next Blog</title>
            <meta name="description" content="Created by a junior to everyone. A blog to share how step by step I learn and improve. Enjoy! "/>
            <meta name="google" content="notranslate"/>
            <meta httpEquiv="content-type" content="text/html;charset=utf-8" />
        </Head>
    )
}