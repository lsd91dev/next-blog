import MarkdownIt from "markdown-it";
import { Render } from "../render/render";

export class Markdown implements Render {

    render(content: string): string {
        const markdownIt: MarkdownIt = MarkdownIt({ html: true });
        return markdownIt.render(content)
    }

}