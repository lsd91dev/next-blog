import parse from "html-react-parser";
import { ReactElement } from "react";

export const parseStringToHTML = (html: string): string | ReactElement | ReactElement[] =>  {
    return parse(html);
}