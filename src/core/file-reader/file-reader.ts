import path from "path";
import fs from "fs";
import { Post } from "../../features/post/domain/post";
import { PostModel } from "../../features/post/model/post";
import { singleton } from "tsyringe";
import { Markdown } from "./markdown";

@singleton()
export class FileReader {

    constructor(private readonly markdown: Markdown){}
    private ROOT_DIRECTORY: string = '';
    private FILES_ROOT_DIRECTORY: string[] = [];

    readDirectory(pathFiles: string): Post[] {
        this.ROOT_DIRECTORY = path.join(process.cwd(), pathFiles);
        this.FILES_ROOT_DIRECTORY = fs.readdirSync(this.ROOT_DIRECTORY);
        return this.FILES_ROOT_DIRECTORY.map( (file) => {
            // const id = render.replace(/\.md$/, '')
            const content = this.readFile(file)
            const parsed = this.markdown.render(content);
            return PostModel.create('1','2',parsed)
        })
    }

    readFile(fileName: string, pathFile?: string, /*options: string = 'utf-8'*/): string{
        pathFile = pathFile || this.ROOT_DIRECTORY;

        if(pathFile === undefined ){ throw new Error('Path file is required') } // TODO refactor

        const fullPath = path.join(pathFile, fileName);
        return fs.readFileSync(fullPath, 'utf-8');
    }


}