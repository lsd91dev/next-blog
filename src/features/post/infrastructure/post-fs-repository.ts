import {PostRepository} from "../domain/post-repository";
import {Post} from "../domain/post";
import fs from 'fs';
import path from "path";
import {injectable} from "tsyringe";
import MarkdownIt from "markdown-it";


@injectable()
export class PostFsRepository implements PostRepository {

    private ROOT_DIRECTORY = path.join(process.cwd(), 'database/posts');

    async findById(id: string): Promise<Post> {
        const post: Post = {
            id: id,
            title: 'Mock',
            content: 'Mocking'
        }
        return Promise.resolve(post);
    }

    async find(): Promise<Post[]> {
        const fileDirectory = fs.readdirSync(this.ROOT_DIRECTORY);
        const posts = fileDirectory.map( (file) => {
            const pathFile = path.join(this.ROOT_DIRECTORY, file)
            // const id = file.replace(/\.md$/, '')
            const content = fs.readFileSync(pathFile, 'utf-8');
            const markdownIt: MarkdownIt = MarkdownIt({
                html: true
            })
            const parsed = markdownIt.render(content);
            return {
                id: 'uno',
                title: 'dos',
                content: parsed
            }
        })
        return Promise.resolve(posts);
    }

}