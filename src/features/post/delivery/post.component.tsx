import {FC, ReactElement} from "react";
import {HTMLToReact} from "./post-parser";
import { Post } from "../domain/post";
import styles from './post.module.css';
import Image from 'next/image';
import post1 from '../../../../public/imgs/posts/post1.jpeg'



export const PostComponent: FC<Post> = ({ title, content }) : ReactElement => {
    return (
        <article className={ styles.post }>
            <div className={ styles.image }>
                <Image src={ post1 } objectFit="cover" layout="fill" alt=''/>
            </div>
            <h2 className={ styles.title }> { title } </h2>

            { HTMLToReact(content) }
        </article>
    )
}