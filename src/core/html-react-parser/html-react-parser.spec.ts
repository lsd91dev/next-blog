import { getImageElement } from "./html-react-parser";

describe('parse string to html', () => {
    it('should get element image from string', () => {
        const html = '<p> Hello world </p> <img src="foo" />';

        const htmlWithoutImage = getImageElement(html);
        expect(htmlWithoutImage).toBe('<img src="foo"/>')
    })
})