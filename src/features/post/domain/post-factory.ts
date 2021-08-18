import {Post} from "./post";

export class PostFactory {
    id: string;
    title: string;
    content: string;
    createdAt: Date;

    private constructor(_id: string, _title: string, _content: string, _createdAt: Date) {
        this.id = _id;
        this.title = _title;
        this.content = _content;
        this.createdAt = _createdAt;
    }

    static create(id: string, title: string, content: string, createdAt: Date): Post {
        return new PostFactory(id, title, content, createdAt);
    }

    static toPlainObject(post: Post): Post{
        return {
            id: post.id,
            title: post.title,
            content: post.content,
            createdAt: post.createdAt
        }
    }


}
