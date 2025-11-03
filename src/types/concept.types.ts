export type Concept = {
    title: string,
    gif: string,
    shortDescription: string,
    tags: Array<{
        text: string,
        link?: string
    }>,
    description: string,
    thumbnail: string | Array<string | {type: string, source: string, poster?: string}>,
    height?: string,
    width?: string,
    marginLeft?: string,
    allowScroll?: boolean
}