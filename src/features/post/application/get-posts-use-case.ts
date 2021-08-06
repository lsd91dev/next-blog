    import {inject, injectable} from "tsyringe";
    import {Post} from "../domain/post";
    import {PostRepository} from "../domain/post-repository";
    import {POST_REPOSITORY} from "../../../core/di/types";

    @injectable()
    export class GetPostsUseCase  {
        constructor(@inject(POST_REPOSITORY) private readonly postRepository: PostRepository){}

        execute(): Promise<Post[]> {
            return this.postRepository.find();
        }
    }

