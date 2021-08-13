import "reflect-metadata"
import {container} from "tsyringe";
import {FileReader} from "./file-reader";
import dateFormat from "dateformat";

export {}

describe('file reader', () => {

    it('should do DI', () =>{
        const fileReader = container.resolve(FileReader)

        expect(fileReader).toBeInstanceOf(FileReader);
    })

    it('should return format dd/mm/yyyy if month is < October', () => {

        const parse = Date.parse("2021/8/12");
        const date = new Date(parse);

        const fullDate = dateFormat(date, "yyyy/mm/dd");

        expect(fullDate).toBe('2021/08/12');

    })

    it('should return format dd/mm/yyyy if month is >= October', () => {

        const parse = Date.parse("2021/10/12");
        const date = new Date(parse);

        const fullDate = dateFormat(date, "yyyy/mm/dd");

        expect(fullDate).toBe('2021/10/12');
    })


})