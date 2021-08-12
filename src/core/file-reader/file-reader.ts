import path from "path";
import fs from "fs";
import { Post } from "../../features/post/domain/post";
import { singleton } from "tsyringe";
import { Markdown } from "./markdown";
import { fileNameFormatted, replaceExtensionByBlank} from "../format-file-name/format-file-name";
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

        try {
            const fullPath = path.join(pathFile, fileName);
            const content = fs.readFileSync(fullPath, 'utf-8');
            const id: string = replaceExtensionByBlank(fileName);
            const title: string = fileNameFormatted(fileName);
            const parsed: string = this.file.render(content);
            return PostJSON.create(id, title, parsed);
        } catch(error: any) {
            throw new Error('File does not exist') // TODO refactor
        }

    }

    fileBirthday(){
        const birthday: Date = fs.statSync('database/post/test.md').birthtime;

        const year = birthday.getFullYear();
        const month = ( birthday.getMonth() + 1);
        const day = birthday.getDate();


        return `${ year }/ ${ month < 10 ? `0${month}` : month } / ${ day }`;
    }
}