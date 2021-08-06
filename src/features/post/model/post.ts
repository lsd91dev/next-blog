import { Post } from '../domain/post';

export class PostModel {
    static create(id: string, title: string, content: string): Post {
        return {
            id,
            title,
            content
        }
    }
}