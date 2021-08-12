import path from "path";
import fs from "fs";
import { Post } from "../../features/post/domain/post";
import { singleton } from "tsyringe";
import { fileNameFormatted, replaceExtensionByBlank } from "../format-file-name/format-file-name";
import {PostJSON} from "../../features/post/domain/post-json";
import {SimpleFileFactory} from "../simple-file-factory/simple-file-factory";

@singleton()
export class FileReader {

    private FILE_ROOT_DIRECTORY: string = '';
    private FILES_ROOT_DIRECTORY: string[] = [];

    readDirectory(pathFiles: string): Post[] {
        this.FILE_ROOT_DIRECTORY = path.join(process.cwd(), pathFiles);
        this.FILES_ROOT_DIRECTORY = fs.readdirSync(this.FILE_ROOT_DIRECTORY);
        return this.FILES_ROOT_DIRECTORY.map( (fileName) => {
            return this.readFile(fileName)
        })
    }

    readFile(fileName: string, pathFile?: string, /*options: string = 'utf-8'*/): Post {
        pathFile = pathFile || this.FILE_ROOT_DIRECTORY;

        if(pathFile === undefined ){ throw new Error('Path file is required') } // TODO refactor

        try {
            const fullPath = path.join(pathFile, fileName);
            const content = fs.readFileSync(fullPath, 'utf-8');

            // TODO refactor
            const id: string = replaceExtensionByBlank(fileName);
            const title: string = fileNameFormatted(fileName);
            const file = SimpleFileFactory.createFile(pathFile);
            const parsed: string = file.render(content);
            const createdAt: string = this.fileBirthday(pathFile, fileName);
            return PostJSON.create(id, title, parsed, createdAt);
        } catch(error: any) {
            throw new Error('File does not exist') // TODO refactor
        }

    }

    // TODO Refactor
    orderByOldDate() {

    }

    fileBirthday(pathFile: string, fileName: string){
        const birthday: Date = fs.statSync(`${ pathFile }/${fileName}`).birthtime;

        const year = birthday.getFullYear();
        const month = ( birthday.getMonth() + 1);
        const day = birthday.getDate();


        return `${ year }/${ month < 10 ? `0${month}` : month }/${ day }`;
    }
}