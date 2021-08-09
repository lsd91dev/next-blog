import {FC} from "react";
import {Post} from "../features/post/domain/post";
import {GetStaticProps} from "next";
import {GetPostsUseCase} from "../features/post/application/get-posts-use-case";
import {POST_REPOSITORY} from "../core/di/types";
import {PostFsRepository} from "../features/post/infrastructure/post-fs-repository";
import {register, resolve} from "../core/di/container-di";
import {HeadComponent} from "../core/components/head/head.component";
import {PostComponent} from "../features/post/delivery/post.component";
import styles from './index.module.css';
import {HeaderComponent} from "../core/components/header/header.component";

interface Props {
    posts: Post[]
}

const HeadType = {
    title: "Next Blog",
    content: "Created by a junior to everyone. A blog to share how step by step I learn and improve. Enjoy!"
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
            <HeadComponent {...HeadType}/>
            <div className={ styles.wrapper }>
                <HeaderComponent />
                <section> Here I present myself :) </section>
                <section>{ posts.map( (post: Post) => <PostComponent {...post} key={ post.id } />)}</section>
                <section> This is the sidebar </section>
            </div>
        </>
    )
}

export default HomePage;