import { useSearchParams, useNavigate } from 'react-router-dom'
import styles from './Map.module.css'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import CityContext from '../../Context /CityContext';
import { useContext, useState } from 'react';

const Map = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams()
    const [mapPosition, setMapPosition] = useState([28.6139, 77.2088])
    console.log(searchParams)
    const lat = searchParams.get("lat")
    const lng = searchParams.get("lng")
    const { cities } = useContext(CityContext)

    return (
        <div className={styles.mapContainer} >
            <MapContainer className={styles.map} center={mapPosition} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {cities.map((city) => {
                    return <Marker position={[city.position.lat, city.position.lng]} key={city.id}>
                        <Popup>
                            <span>{city.emoji}</span> <span>{city.cityName}</span>
                        </Popup>
                    </Marker>
                })}
            </MapContainer>
        </div>
    )
}

export default Map