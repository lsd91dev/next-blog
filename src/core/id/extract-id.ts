export function extractId(fileName: string): string{
    return fileName.replace(/\.md$/, '')
}