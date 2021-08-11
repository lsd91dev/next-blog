
import { removeDash, getId } from "./get-id";

describe('remove dash', () => {
    it('should replace string with middle dash (-) by blanks', () => {
        const stringWithDashes: string = 'name-with-dash';
        const dashesReplacedByBlanks: string = removeDash(stringWithDashes);

        expect(dashesReplacedByBlanks).toBe('name with dash')
    })

    it('should replace string with middle dash (-) by blanks and remove .md extension', () => {
        const stringWithDashesAndMdExtension: string = 'name-with-dash.md';
        const dashesReplacedByBlanksAndRemovedMd: string = getId(stringWithDashesAndMdExtension);

        expect(dashesReplacedByBlanksAndRemovedMd).toBe('name with dash');
    })
})