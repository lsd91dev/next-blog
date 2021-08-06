import path from "path";
import fs from "fs";
import MarkdownIt from "markdown-it";
import {Post} from "../../features/post/domain/post";

export class FileMarkdownReader {

    private ROOT_DIRECTORY: string = '';
    private FILES_ROOT_DIRECTORY: string[] = [];

    read(): Post[] {
        return this.FILES_ROOT_DIRECTORY.map( (file) => {
            // const id = file.replace(/\.md$/, '')
            const content = FileMarkdownReader.readFile(this.ROOT_DIRECTORY, file)
            const markdownIt = FileMarkdownReader.setMarkdownItConfiguration();
            const parsed = markdownIt.render(content);
            return {
                id: 'uno',
                title: 'dos',
                content: parsed
            }
        })
    }

    setFilesDirectoryAndRead(pathFiles: string): void {
        this.ROOT_DIRECTORY = path.join(process.cwd(), pathFiles);
        this.readDirectory();
    }

    private static readFile(pathFile: string, fileName: string, options: string = 'utf-8'): string{
        const fullPath = path.join(pathFile, fileName);
        console.log(options)
        return fs.readFileSync(fullPath, 'utf-8');
    }

    readDirectory(): void {
        this.FILES_ROOT_DIRECTORY = fs.readdirSync(this.ROOT_DIRECTORY);
    }


    private static setMarkdownItConfiguration() {
        const markdownIt: MarkdownIt = MarkdownIt({ html: true });
        return markdownIt;
    }

}