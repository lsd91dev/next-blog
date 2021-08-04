import {PostRepository} from "../domain/post-repository";
import {Post} from "../domain/post";
import fs from 'fs';
import path from "path";

export class PostFsRepository implements PostRepository{

    private ROOT_DIRECTORY = path.join(process.cwd(), 'database/posts');

    findById(id: number): Promise<Post> {
        const post: Post = {
            id: id,
            title: 'Mock',
            date: new Date(1,2,1991),
            content: 'Mocking'
        }
        return Promise.resolve(post);
    }

    find(): Promise<Post[]> {

        const fileDirectory = fs.readdirSync(this.ROOT_DIRECTORY);
        fileDirectory.forEach( file => {
            console.log(file)
        })
        return Promise.resolve([]);
    }

}