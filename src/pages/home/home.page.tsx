import { ReactElement } from "react";
import {GetPostsUseCase} from "../../features/post/application/get-posts-use-case";
import {GetStaticProps} from "next";
import {containerDi} from "../../core/di/container-di";


const HomePage = (): ReactElement  => {
    return (
        <>
            <h1> This is home </h1>
        </>
    )
}

export const getStaticProps: GetStaticProps = async() => {

    const getPostsUseCase = containerDi(GetPostsUseCase);
    const posts = await getPostsUseCase.getPosts();
    return {
        props: {
            posts
        },
    }

}

export default HomePage;