import {FC, ReactElement} from "react";
import {parseStringToHTML} from "../../../core/html-react-parser/html-react-parser";
import { Post } from "../domain/post";
import styles from './post.module.css';
import Image from 'next/image';
import Link from 'next/link';
import post1 from '../../../../public/imgs/posts/post1.jpeg'



export const PostComponent: FC<Post> = ({ title, content }) : ReactElement => {
    return (
        <article className={ styles.post }>
            <div className={ styles.image }>
                <Image src={ post1 } objectFit="cover" layout="fill" alt=''/>
            </div>
            <Link href={`/post/${ encodeURIComponent(title)}`} ><a className={ styles.title }>{ title }</a></Link>
            { parseStringToHTML(content) }
        </article>
    )
}