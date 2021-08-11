export function fileNameFormatted(fileName: string): string{
    const fileNameWithoutExtension = replaceExtensionByBlank(fileName);
    return replaceDashesByBlanks(fileNameWithoutExtension);
}

export function replaceDashesByBlanks(chain: string): string {
    return chain.replaceAll("-", ' ')
}

export function replaceExtensionByBlank(chain: string): string {
    return chain.replace(/\.md$/, '')
}