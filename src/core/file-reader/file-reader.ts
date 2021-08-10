import path from "path";
import fs from "fs";
import { Post } from "../../features/post/domain/post";
import { singleton } from "tsyringe";
import { Markdown } from "./markdown";
import { getId } from "../id/get-id";
import {PostJSON} from "../../features/post/domain/post-json";

@singleton()
export class FileReader {

    constructor(private readonly file: Markdown){ }
    private ROOT_DIRECTORY: string = '';
    private FILES_ROOT_DIRECTORY: string[] = [];

    readDirectory(pathFiles: string): Post[] {
        this.ROOT_DIRECTORY = path.join(process.cwd(), pathFiles);
        this.FILES_ROOT_DIRECTORY = fs.readdirSync(this.ROOT_DIRECTORY);
        return this.FILES_ROOT_DIRECTORY.map( (fileName) => {
            return this.readFile(fileName)
        })
    }

    readFile(fileName: string, pathFile?: string, /*options: string = 'utf-8'*/): Post {
        pathFile = pathFile || this.ROOT_DIRECTORY;
        if(pathFile === undefined ){ throw new Error('Path file is required') } // TODO refactor
        const fullPath = path.join(pathFile, fileName);
        const content = fs.readFileSync(fullPath, 'utf-8');
        const id: string = getId(fileName);
        const parsed: string = this.file.render(content);
        return PostJSON.create(id, id, parsed);
    }

}