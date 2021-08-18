import {FC} from "react";
import {Post} from "../features/post/domain/post";
import {GetStaticProps} from "next";
import {POST_REPOSITORY} from "../core/di/types";
import {PostFsRepository} from "../features/post/infrastructure/post-fs-repository";
import {register, resolve} from "../core/di/container-di";
import {HeadComponent} from "../core/components/head/head.component";
import {PostComponent} from "../features/post/delivery/post.component";
import styles from './index.module.css';
import {HeaderComponent} from "../core/components/header/header.component";
import {CardProfileComponent} from "../features/card-profile/delivery/card-profile.component";
import {GetPostsByNewestDateUseCase} from "../features/post/application/get-posts-by-newest-date-use-case";

interface Props {
    posts: Post[]
}

const headMetaContent = {
    title: "Next Blog",
    content: "Created by a junior to everyone. A blog to share how step by step I learn and improve. Enjoy!"
}

export const getStaticProps: GetStaticProps = async() => {
    register(POST_REPOSITORY, PostFsRepository);
    const getPostsByNewestDateUseCase = resolve(GetPostsByNewestDateUseCase);
    const posts: Post[] = await getPostsByNewestDateUseCase.execute();
    return {
        props: {
            posts,
        },
    }
}

const HomePage : FC<Props> = ({ posts }) => {

    return (
        <>
            <HeadComponent {...headMetaContent } />
            <div className={ styles.wrapper }>
                <HeaderComponent />
                <CardProfileComponent />
                <section className={ styles.main }>
                    <h3 className={ styles.title }> Recent posts </h3>
                    <section className={ styles.post }>
                        { posts.map( (post: Post) => <PostComponent {...post} key={ post.id } />)}

                    </section>
                </section>
                <section> This is the sidebar </section>
            </div>
        </>
    )
}

export default HomePage;