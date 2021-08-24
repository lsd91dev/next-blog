import {FC} from "react";
import Head from 'next/head';


interface Props {
    title: string,
    content: string,
}

export const HeadComponent: FC<Props> = ({ title, content }) => {
    return (
        <Head>
            <title>{ title }</title>
            <meta name="description" content={ content }/>
            <meta name="google" content="notranslate"/>
            <meta httpEquiv="content-type" content="text/html;charset=utf-8" />
        </Head>
    )
}