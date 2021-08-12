import 'reflect-metadata';
import {SimpleFileFactory} from "./simple-file-factory";


describe('Simple file factory', () => {
    it('should return the last part of string path', () => {
            const path_split = SimpleFileFactory.getPath('database/post/md');
            const result = 'md';
            expect(path_split).toStrictEqual(result);
    })
})