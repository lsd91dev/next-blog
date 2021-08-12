import {Post} from "./post";

export class PostJSON {
    static create(id: string, title: string, content: string, createdAt: string){
        const post: Readonly<Post> = {
            id,
            title,
            content,
            createdAt,
        }
        return post
    }
}