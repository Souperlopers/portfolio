export type NavigationItems = {
    title: string
    id?: string ,
    href?: string,
}

export type HeaderData = {
    isHero?: boolean
    navList: NavigationItems[]
}