export type Project = {
    title: string,
    url: string,
    superflex?: boolean,
    shortDescription: string,
    tags: Array<{
        text: string,
        link?: string
    }>,
    description: string,
    imageSrc: string | Array<string | {type: string, source: string, poster?: string}>,
    height?: string,
    width?: string,
    marginLeft?: string,
    allowScroll?: boolean
}