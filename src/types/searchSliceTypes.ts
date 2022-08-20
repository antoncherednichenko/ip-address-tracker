export interface ILocation {
    country?: string
    region?: string
    city?: string
    lat?: number
    lng?: number
    postalCode?: string
    timezone?: string
    geonameId?: number
}

export interface IAs {
    asn: string
    name: string
    route: string
    domain: string
    type: string
    
}

export interface IProxy {
    proxy: string
    vpn: string
    tor: string
}

export interface ISearchResult {
    ip: string,
    location: ILocation
    domains: string[]
    as: IAs
    isp: string,
    proxy: IProxy

}

export interface ISearchState {
    searchResult: ISearchResult | null
    isLoading: boolean
}