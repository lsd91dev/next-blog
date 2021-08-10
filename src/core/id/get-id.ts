export function getId(fileName: string): string{
    return fileName.replace(/\.md$/, '')
}