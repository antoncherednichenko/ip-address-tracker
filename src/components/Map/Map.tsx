import { useEffect, useState } from "react"
import { YMaps, Map, Placemark } from "react-yandex-maps"
import { useAppSelector } from "../../hooks"

import s from './Map.module.scss'

interface IdefaultMapSate {
    center: number[]
    zoom: number
}

interface IMapProps {
    markerPosition: number[]
}

const AppMap = ({ markerPosition =[] }: IMapProps) => {

    
    const [mapState, setMapState] = useState<IdefaultMapSate>({ center: [55.75, 37.57], zoom: 10 })

    useEffect(() => {
        setMapState({ ...mapState, center: markerPosition })
    }, [markerPosition])

    

    return (
        <section className={s['map-container']}> 
            <YMaps>
            <Map 
                state={mapState}
                width="100%"
                height="70vh" 
            >
                <Placemark geometry={markerPosition} />
            </Map>
            </YMaps>
        </section>
    )
}

export default AppMap