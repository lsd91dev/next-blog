import {inject, injectable} from "tsyringe";
import {PostRepository} from "../domain/post-repository";
import {POST_REPOSITORY} from "../../../core/di/types";
import {Post} from "../domain/post";

@injectable()
export class GetPostsByNewestDateUseCase  {
    constructor(@inject(POST_REPOSITORY) private readonly postRepository: PostRepository){}

    execute(): Promise<Post[]> {
        return this.postRepository.findAllByNewestDate();
    }
}

