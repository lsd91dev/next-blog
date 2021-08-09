import {FC} from "react";
import {Post} from "../features/post/domain/post";
import {GetStaticProps} from "next";
import {GetPostsUseCase} from "../features/post/application/get-posts-use-case";
import {POST_REPOSITORY} from "../core/di/types";
import {PostFsRepository} from "../features/post/infrastructure/post-fs-repository";
import {register, resolve} from "../core/di/container-di";
import {HTMLToReact} from "../features/post/delivery/post-parser";
import {HeadComponent} from "../core/components/head/head.component";

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
            <HeadComponent />
            <h1> This is home </h1>
                { posts.map( post => <div key={ post.id } className="post"> { HTMLToReact(post.content) }</div> )}
        </>
    )
}

export default HomePage;