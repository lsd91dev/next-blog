import {PostRepository} from "../domain/post-repository";
import {Post} from "../domain/post";
import {injectable} from "tsyringe";
import {FileReader} from "../../../core/file-reader/file-reader";


@injectable()
export class PostFsRepository implements PostRepository {

    constructor(private readonly fileReader: FileReader){}
    async findById(id: string): Promise<Post> {
        const post: Post = {
            id: id,
            title: 'Mock',
            content: 'Mocking'
        }
        return Promise.resolve(post);
    }

    async find(): Promise<Post[]> {
        const posts = this.fileReader.readDirectory('database/posts');
        return Promise.resolve(posts);
    }

}