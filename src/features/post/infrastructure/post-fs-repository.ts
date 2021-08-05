import {PostRepository} from "../domain/post-repository";
import {Post} from "../domain/post";
import fs from 'fs';
import path from "path";
import {injectable} from "tsyringe";

@injectable()
export class PostFsRepository implements PostRepository {

    private ROOT_DIRECTORY = path.join(process.cwd(), 'database/posts');

    async findById(id: number): Promise<Post> {
        const post: Post = {
            id: id,
            title: 'Mock',
            content: 'Mocking'
        }
        return Promise.resolve(post);
    }

    async find(): Promise<Post[]> {
        const fileDirectory = fs.readdirSync(this.ROOT_DIRECTORY);
        fileDirectory.map( file => {
            const pathFile = path.join(this.ROOT_DIRECTORY, file)
            const content = fs.readFileSync(pathFile);
            console.log(content);
        })
        const posts_mocked : Post[] = [
            {
                id: 0,
                title: 'mock',
                content: 'mock',
            }
        ]
        return Promise.resolve(posts_mocked);
    }

}