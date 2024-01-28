import type iTechTag  from "./TechTag.interface.ts";

export default interface iProjectsItem {
    title: string,
    description?: string,
    link?: string,
    github?: string,
    gitlab?: string,
    image: string,
    tags: iTechTag[]
}