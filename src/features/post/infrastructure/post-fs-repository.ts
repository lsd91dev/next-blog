import {PostRepository} from "../domain/post-repository";
import {Post} from "../domain/post";
import {injectable} from "tsyringe";
import {FileReader} from "../../../core/file-reader/file-reader";


@injectable()
export class PostFsRepository implements PostRepository {

    constructor(private readonly fileReader: FileReader){}
    async findById(id: string): Promise<Post> {
        const postFile = this.fileReader.readFile(`${id}.md`,'database/post');// TODO REFACTOR
        return Promise.resolve(postFile);
    }

    async find(): Promise<Post[]> {
        const posts = this.fileReader.readDirectory('database/post');
        return Promise.resolve(posts);
    }

}