import path from "path";
import fs from "fs";
import {singleton} from "tsyringe";
import {FileFactory} from "../file-factory/file-factory";

@singleton()
export class FileReader {

    execute(fileName: string, pathFile: string): string {
        try {
            const fullPath = path.join(pathFile, fileName);
            const file = FileFactory.createFile(pathFile);
            const content = this.getFileContent(fullPath);
            const renderedContent = file.render(content);
            console.log(renderedContent);
            return renderedContent
        } catch(error: any) {
            throw new Error('File does not exist') // TODO refactor
        }

    }

    private getFileContent(fullPath: string): string{
        return fs.readFileSync(fullPath, 'utf-8');

    }
}