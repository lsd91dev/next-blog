import MarkdownIt from "markdown-it";
import {File} from "./file";
import fs from "fs";
import {fileNameFormatted, replaceExtensionByBlank} from "../format-file-name/format-file-name";

export class MarkdownPost implements File {

    render(content: string): string {
        const markdownIt: MarkdownIt = MarkdownIt({ html: true });
        return markdownIt.render(content)
    }

    static getFileBirthday(pathFile: string, fileName: string): Date{
        return fs.statSync(`${ pathFile }/${fileName}`).birthtime;
    }

    static getFileName(fileName: string): string {
        return fileNameFormatted(fileName);
    }

    static getFileId(fileName: string): string {
        return replaceExtensionByBlank(fileName);
    }
}