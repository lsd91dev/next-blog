import "reflect-metadata"
import {container} from "tsyringe";
import {FileReader} from "./file-reader";

export {}

describe('file reader', () => {

    it('should do DI', () =>{
        const fileReader = container.resolve(FileReader)

        expect(fileReader).toBeInstanceOf(FileReader);
    })

    it('should return format dd/mm/yyyy if month is < October', () => {

        const parse = Date.parse("2021/8/12");
        const date = new Date(parse);

        const year = date.getFullYear();
        let month = ( date.getMonth() + 1);
        let day = date.getDate();

        let fullDate =  `${ year }/${ month < 10 ? `0${month}` : month }/${ day }`;

        expect(fullDate).toBe('2021/08/12');

    })

    it('should return format dd/mm/yyyy if month is >= October', () => {

        const parse = Date.parse("2021/10/12");
        const date = new Date(parse);

        const year = date.getFullYear();
        const month = ( date.getMonth() + 1);
        const day = date.getDate();

        const fullDate = `${ year }/${ month < 10 ? `0${month}` : month }/${ day }`;

        expect(fullDate).toBe('2021/10/12');
    })


})