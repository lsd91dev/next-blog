import {FC, ReactElement} from "react";
import {parseStringToHTML} from "../../../core/html-react-parser/html-react-parser";
import {Post} from "../domain/post";
import styles from './post.module.css';
import Link from 'next/link';
import {useRouter} from "next/router";
import {PostImageComponent} from "../../components/post-image/post-image.component";

export const PostComponent: FC<Post> = ({id, title, content, createdAt}): ReactElement => {

    const router = useRouter();

    const handleClick = () => {
        router.push(`/post/${ id }`)
    }

    const nameMonth = (month: number) => {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]
        return months[month];
    }


    return (
        <article className={styles.post} onClick={ handleClick }>
            <div className={styles.image}>
                <PostImageComponent fileName={ id } />
            </div>
            <small className={ styles.date }> { ` ${ nameMonth(createdAt.getMonth() )} ${ createdAt.getDate() } ` }</small>
                <Link href={`/post/${encodeURIComponent(id)}`}><a className={styles.link}>{title}</a></Link>
            <div className={ styles.content }>
                { parseStringToHTML(content) }
            </div>
        </article>
    )

}