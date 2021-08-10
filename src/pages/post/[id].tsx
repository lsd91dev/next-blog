import {FC, ReactElement} from "react";
import {GetServerSideProps} from "next";
import {resolve, register} from "../../core/di/container-di";
import {GetPostUseCase} from "../../features/post/application/get-post-use-case";
import { Post } from "../../features/post/domain/post";
import {getParamId} from "../../core/params/get-params";
import {POST_REPOSITORY} from "../../core/di/types";
import {PostFsRepository} from "../../features/post/infrastructure/post-fs-repository";

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
        <h1> { post.title } </h1>
    )
}

export default PostPage;