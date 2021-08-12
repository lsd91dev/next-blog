import {PostRepository} from "../domain/post-repository";
import {Post} from "../domain/post";
import {injectable} from "tsyringe";
import {FileReader} from "../../../core/file-reader/file-reader";



@injectable()
export class PostFsRepository implements PostRepository {

    FILE_SYSTEM_DATABASE_MD = process.env.FILE_SYSTEM_DATABASE_MD || 'database/post/md';

    constructor(private readonly fileReader: FileReader){}
    async findById(id: string): Promise<Post> {
        const postFile = this.fileReader.readFile(`${id}.md`,this.FILE_SYSTEM_DATABASE_MD);// TODO REFACTOR
        return Promise.resolve(postFile);
    }

    async find(): Promise<Post[]> {
        const posts = this.fileReader.readDirectory(this.FILE_SYSTEM_DATABASE_MD);
        return Promise.resolve(posts);
    }

}