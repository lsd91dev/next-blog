import {inject, injectable} from "tsyringe";
import {POST_REPOSITORY} from "../../../core/di/types";
import {PostRepository} from "../domain/post-repository";
import {Post} from "../domain/post-factory";

@injectable()
export class GetPostUseCase {
   constructor(@inject(POST_REPOSITORY) private readonly postRepository: PostRepository){}

    execute(id: string): Promise<Post> {
        return this.postRepository.findById(id);
    }
}