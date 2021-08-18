import {FC, ReactElement} from "react";
import {parseStringToHTML} from "../../../core/html-react-parser/html-react-parser";
import {Post} from "../domain/post";
import styles from './post.module.css';
import Image from 'next/image';
import Link from 'next/link';
import image from '../../../../public/imgs/posts/default.jpg'
import {useRouter} from "next/router";

export const PostComponent: FC<Post> = ({id, title, content, createdAt}): ReactElement => {

    const router = useRouter();
    const handleClick = () => {
        router.push(`/post/${ id }`)
    }


    return (
        <article className={styles.post} onClick={ handleClick }>
            <div className={styles.image}>
                <Image src={image} objectFit="cover" layout="fill" alt=''/>
            </div>
            <small> {createdAt.toDateString()}</small>
            <Link href={`/post/${encodeURIComponent(id)}`}><a className={styles.title}>{title}</a></Link>
            {parseStringToHTML(content)}
        </article>
    )

}