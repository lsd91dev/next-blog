import { FC } from "react";
import { Post } from "../features/post/domain/post";
import { GetStaticProps } from "next";
import { GetPostsUseCase } from "../features/post/application/get-posts-use-case";
import { POST_REPOSITORY } from "../core/di/types";
import { PostFsRepository } from "../features/post/infrastructure/post-fs-repository";
import { resolve, register } from "../core/di/container-di";

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

const createMarkup = (rawHTML: string) => {
    return {__html: rawHTML}
}

const HomePage : FC<Props> = ({ posts }) => {

    return (
        <>
            <h1> This is home </h1>
            <ul>
                { posts.map( post => <div dangerouslySetInnerHTML={ createMarkup(post.content)} key={post.id}/> )}
            </ul>
        </>
    )
}

export default HomePage;