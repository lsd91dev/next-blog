import parse from "html-react-parser";
import { Element } from 'domhandler/lib/node';
import Image from "next/image";
import {ReactElement} from "react";

type ParserTypes = string | ReactElement | ReactElement[];

export const parseStringToHTML = (html: string): ParserTypes =>  {
    return parse(html);
}

export const getImageElement = (html:string): ParserTypes | boolean => {

    return parse(html, {
        replace: domNode => {
            if(domNode instanceof Element){
                if(domNode.name === 'img'){
                    return <Image src={domNode.attribs.src} />
                }
            }
        },
    });
}
