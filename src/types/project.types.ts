export type Project = {
    title: string,
    url: string,
    shortDescription: string,
    tags: Array<{
        text: string,
        link?: string
    }>,
    description: string,
    imageSrc: string,
    height?: string,
    width?: string,
    marginLeft?: string,
    allowScroll?: boolean
}