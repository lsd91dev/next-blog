import parse from "html-react-parser";
import { ReactElement } from "react";

export const HTMLToReact = (html: string): string | ReactElement | ReactElement[] =>  {
    return parse(html);
}