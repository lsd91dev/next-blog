import 'reflect-metadata';
import {FileFactory} from "./file-factory";
import {MarkdownPost} from "../file/markdown-post";


describe('Simple file factory', () => {
    it('should return the last part of string path', () => {
            const file = FileFactory.createFile('database/post/md');
            expect(file).toBeInstanceOf(MarkdownPost);
    })
})