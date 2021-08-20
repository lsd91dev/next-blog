import {PostRepository} from "../domain/post-repository";
import {PostFactory} from "../domain/post-factory";
import {injectable} from "tsyringe";
import {FileReader} from "../../../core/file-reader/file-reader";
import path from "path";
import fs from "fs";
import {MarkdownPost} from "../../../core/file/markdown-post";
import {sortPostByNewestDate} from "../../../core/utils/sort-post-by-newest-date";
import {Post} from "../domain/post";


@injectable()
export class PostFsRepository implements PostRepository {

    FILE_SYSTEM_DATABASE_MD = process.env.FILE_SYSTEM_DATABASE_MD || 'database/post/md';
    FILE_ROOT_DIRECTORY = path.join(process.cwd(), this.FILE_SYSTEM_DATABASE_MD);

    constructor(private readonly fileReader: FileReader) {}

    async findById(id: string): Promise<Post> {
        const fileName = `${ id }.md`;
        const title = MarkdownPost.getFileName(fileName);
        const content = this.fileReader.execute(fileName, this.FILE_ROOT_DIRECTORY);
        const createdAt = MarkdownPost.getFileBirthday(this.FILE_ROOT_DIRECTORY, fileName);
        const post = PostFactory.create(id, title, content, createdAt);
        const serialize = PostFactory.toPlainObject(post);
        return Promise.resolve(serialize);
    }

    async find(): Promise<Post[]> {
            const posts = fs.readdirSync(this.FILE_ROOT_DIRECTORY).map( (fileName) => {
                const id = MarkdownPost.getFileId(fileName);
                const title = MarkdownPost.getFileName(fileName);
                const createdAt = MarkdownPost.getFileBirthday(this.FILE_ROOT_DIRECTORY, fileName);
                const content = this.fileReader.execute(fileName, this.FILE_ROOT_DIRECTORY);
                return PostFactory.create(id, title, content, createdAt);
            })
        return Promise.resolve(posts);
    }

    async findAllByNewestDate(): Promise<Post[]> {
        const posts = await this.find();
        posts.sort((a: Post, b: Post) => sortPostByNewestDate(a, b))
        const serialized = posts.map( post => PostFactory.toPlainObject(post));
        return Promise.resolve(serialized);
    }

}
