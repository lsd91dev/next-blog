import {File} from '../file/file';
import {MarkdownPost} from "../file/markdown-post";

export class FileFactory {

    static createFile(_fullPath:string): File {
            return new MarkdownPost();
    }
}