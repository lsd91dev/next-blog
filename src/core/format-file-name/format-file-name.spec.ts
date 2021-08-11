
import { replaceDashesByBlanks, replaceExtensionByBlank, fileNameFormatted } from "./format-file-name";

describe('remove dash', () => {
    it('should replace string with middle dash (-) by blanks', () => {
        const stringWithDashes: string = 'name-with-dash';
        const stringReplaced: string = replaceDashesByBlanks(stringWithDashes);

        expect(stringReplaced).toBe('name with dash')
    })

    it('should remove file extension .md from file name', () => {
        const stringWithBlanks: string = 'name-with-blanks.md';
        const stringReplaced: string = replaceExtensionByBlank(stringWithBlanks);

        expect(stringReplaced).toBe('name-with-blanks');
    })

    it('should replace string with middle dash (-) by blanks and remove .md extension', () => {
        const stringWithDashesAndMdExtension: string = 'name-with-dash.md';
        const dashesReplacedByBlanksAndRemovedMd: string = fileNameFormatted(stringWithDashesAndMdExtension);

        expect(dashesReplacedByBlanksAndRemovedMd).toBe('name with dash');

    })

})