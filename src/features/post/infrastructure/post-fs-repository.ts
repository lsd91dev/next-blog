import {PostRepository} from "../domain/post-repository";
import {Post} from "../domain/post";
import {injectable} from "tsyringe";
import {FileMarkdownReader} from "../../../core/file-reader/file-markdown-reader";


@injectable()
export class PostFsRepository implements PostRepository {

    async findById(id: string): Promise<Post> {
        const post: Post = {
            id: id,
            title: 'Mock',
            content: 'Mocking'
        }
        return Promise.resolve(post);
    }

    async find(): Promise<Post[]> {
        const fileMarkdownReader = new FileMarkdownReader();
        fileMarkdownReader.setFilesDirectoryAndRead('database/posts');
        const posts = fileMarkdownReader.read();
        return Promise.resolve(posts);
    }

}