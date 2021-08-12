import MarkdownIt from "markdown-it";
import { File } from "./file";

export class Markdown implements File {

    render(content: string): string {
        const markdownIt: MarkdownIt = MarkdownIt({ html: true });
        return markdownIt.render(content)
    }
}