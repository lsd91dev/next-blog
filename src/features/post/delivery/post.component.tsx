import {FC, ReactElement} from "react";
import {HTMLToReact} from "./post-parser";
import { Post } from "../domain/post";
import styles from './post.module.css';


export const PostComponent: FC<Post> = ({ title, content }) : ReactElement => {
    return (
        <article className={ styles.post }>
            <h2> { title } </h2>
            { HTMLToReact(content) }
        </article>
    )
}