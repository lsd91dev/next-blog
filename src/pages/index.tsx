import {FC} from "react";
import {Post} from "../features/post/domain/post";
import {GetStaticProps} from "next";
import {GetPostsUseCase} from "../features/post/application/get-posts-use-case";
import {POST_REPOSITORY} from "../core/di/types";
import {PostFsRepository} from "../features/post/infrastructure/post-fs-repository";
import {register, resolve} from "../core/di/container-di";
import parse from 'html-react-parser';

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

const HTMLToReact = (html: string) => {
    return parse(html);
}

const HomePage : FC<Props> = ({ posts }) => {

    return (
        <>
            <h1> This is home </h1>
                { posts.map( post => <div key={post.id}> { HTMLToReact(post.content) }</div> )}
        </>
    )
}

export default HomePage;