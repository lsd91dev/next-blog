import {File} from '../file/file';
import {Markdown} from "../file/markdown";
import {singleton} from "tsyringe";

@singleton()
export class SimpleFileFactory {

    static createFile(fullPath:string): File {
        const path = SimpleFileFactory.getLastPath(fullPath); // TODO Refactor
        if(path.includes('md')){
            return new Markdown();
        }else {
            return new Markdown();
        }
    }

    static getLastPath(path:string): string{
        const lastPath = path.split('/');
        return lastPath.slice(-1)[0];
    }
}