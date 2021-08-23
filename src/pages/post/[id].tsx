import {FC, ReactElement} from "react";
import {GetServerSideProps} from "next";
import {resolve, register} from "../../core/di/container-di";
import {GetPostUseCase} from "../../features/post/application/get-post-use-case";
import { Post } from "../../features/post/domain/post";
import {getParamId} from "../../core/params/get-params";
import {POST_REPOSITORY} from "../../core/di/types";
import {PostFsRepository} from "../../features/post/infrastructure/post-fs-repository";
import {parseStringToHTML} from "../../core/html-react-parser/html-react-parser";
import {PostImageComponent} from "../../features/components/post-image/post-image.component";
import styles from './[id].module.css';
import Image from "next/image";
import avatar from "../../../public/imgs/avatar/avatar.jpeg";


export interface Props {
    post: Post
}

export const getServerSideProps: GetServerSideProps<Props> = async({ query}) => {
    const id = getParamId( query );
    register(POST_REPOSITORY, PostFsRepository);
    const getPostUseCase = resolve(GetPostUseCase);
    const post: Post = await getPostUseCase.execute(id);
    return {
        props: {
            post
        }
    }
}

const PostPage: FC<Props> = ({ post }): ReactElement => {
    return (
        <div className={ styles.post }>
            <div className={ styles.image }>
                <PostImageComponent fileName={ post.id } />
            </div>
            <div className={ styles.frame}>
                <div>
                    <Image src={ avatar } alt='' layout="fill" objectFit="cover" className={ styles.avatar}/>
                </div>
            </div>
            <div className={ styles.content}>
                <h1 className={ styles.title }> { post.title } </h1>
                <div> { parseStringToHTML(post.content) } </div>
            </div>

        </div>

    )
}

export default PostPage;