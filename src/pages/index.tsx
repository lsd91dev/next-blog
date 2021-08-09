import {FC} from "react";
import {Post} from "../features/post/domain/post";
import {GetStaticProps} from "next";
import {GetPostsUseCase} from "../features/post/application/get-posts-use-case";
import {POST_REPOSITORY} from "../core/di/types";
import {PostFsRepository} from "../features/post/infrastructure/post-fs-repository";
import {register, resolve} from "../core/di/container-di";
import {HTMLToReact} from "../features/post/delivery/post-parser";
import Head from 'next/head'

export interface Props {
    posts: Post[]
}
export const getStaticProps: GetStaticProps = async() => {
    register(POST_REPOSITORY, PostFsRepository);
    const getPostsUseCase = resolve(GetPostsUseCase);
    const posts: Post[] = await getPostsUseCase.execute();
    return {
        props: {
            posts,
        },
    }
}

const HomePage : FC<Props> = ({ posts }) => {

    return (
        <>
            <Head>
                <title> Next Blog</title>
                <meta name="description" content="Created by a junior to everyone. A blog to share how step by step I learn and improve. Enjoy! "/>
                <meta name="google" content="notranslate"/>
                <meta httpEquiv="content-type" content="text/html;charset=utf-8" />
            </Head>
            <h1> This is home </h1>
                { posts.map( post => <div key={post.id}> { HTMLToReact(post.content) }</div> )}
        </>
    )
}

export default HomePage;