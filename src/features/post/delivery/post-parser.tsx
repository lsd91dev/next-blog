import parse from "html-react-parser";

export const HTMLToReact = (html: string) => {
    return parse(html);
}