import path from "path";
import fs from "fs";
import { Post } from "../../features/post/domain/post";
import { singleton } from "tsyringe";
import { fileNameFormatted, replaceExtensionByBlank } from "../format-file-name/format-file-name";
import {PostJSON} from "../../features/post/domain/post-json";
import {SimpleFileFactory} from "../simple-file-factory/simple-file-factory";
import dateFormat from "dateformat";

@singleton()
export class FileReader {

    private FILE_ROOT_DIRECTORY: string = '';
    private FILES_ROOT_DIRECTORY: string[] = [];

    readDirectory(pathFiles: string): Post[] {
        this.FILE_ROOT_DIRECTORY = path.join(process.cwd(), pathFiles);
        this.FILES_ROOT_DIRECTORY = fs.readdirSync(this.FILE_ROOT_DIRECTORY);
        return this.FILES_ROOT_DIRECTORY.map( (fileName) => {
            return this.readFile(fileName)
        }).sort((a, b ) => this.sortByNewestDate(a, b))
    }

    readFile(fileName: string, pathFile?: string): Post {
        pathFile = pathFile || this.FILE_ROOT_DIRECTORY;

        if(pathFile === undefined){ throw new Error('Path file is required') } // TODO refactor

        try {
            const fullPath = path.join(pathFile, fileName);

            const file = SimpleFileFactory.createFile(pathFile);

            // TODO refactor
            const id = this.getFileId(fileName);
            const title = this.getFileName(fileName);
            const content = this.getFileContent(fullPath);
            const createdAt: string = this.getFileBirthday(pathFile, fileName);
            const parsed: string = file.render(content);

            // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

            // TODO refactor
            return PostJSON.create(id, title, parsed, createdAt);

        } catch(error: any) {
            throw new Error('File does not exist') // TODO refactor
        }

    }

    // TODO Refactor

    sortByNewestDate(a: Post, b: Post): number {
        if(a.createdAt > b.createdAt){ return -1; }
        if(a.createdAt < b.createdAt){ return 1 }
        return 0;
    }

    getFileBirthday(pathFile: string, fileName: string): string{
        const birthday: Date = fs.statSync(`${ pathFile }/${fileName}`).birthtime;
        return dateFormat(birthday, "yyyy/mm/dd");
    }

    getFileName(fileName: string): string {
        return fileNameFormatted(fileName);
    }

    getFileId(fileName: string): string {
        return replaceExtensionByBlank(fileName);
    }

    getFileContent(fullPath: string): string{
        return fs.readFileSync(fullPath, 'utf-8');

    }

    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

}