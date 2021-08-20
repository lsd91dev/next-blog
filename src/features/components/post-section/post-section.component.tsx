import styles from "../../../pages/index.module.css";
import {Post} from "../../post/domain/post";
import {PostComponent} from "../../post/delivery/post.component";
import {FC} from "react";

interface Props {
    posts: Post[],
    filterPosts: Post[],
    query: string
}

export const PostSectionComponent: FC<Props> = ({ posts, filterPosts, query}) => {

    return (
        <section className={styles.main}>
            <h3 className={styles.title}> Recent posts </h3>
            <section className={styles.post}>
                { (!filterPosts.length || !query.length) ? posts.map((post: Post) => <PostComponent {...post} key={post.id}/>)
                    : filterPosts.map((post: Post) => <PostComponent {...post} key={post.id}/>)
                }
            </section>
        </section>
    )
}