export function getId(fileName: string): string{
    const fileNameWithoutDashes = removeDash(fileName);
    return fileNameWithoutDashes.replace(/\.md$/, '')
}

export function removeDash(chain: string): string {
    return chain.replaceAll("-", ' ')
}