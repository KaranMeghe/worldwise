import { useSearchParams, useNavigate } from 'react-router-dom'
import styles from './Map.module.css'
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvent } from 'react-leaflet'
import CityContext from '../../Context /CityContext';
import { useContext, useEffect, useState } from 'react';
import { useGeolocation } from '../../hooks/useGeoLocation';
import { Button } from '../index'

function ChangeCenter({ position }) {
    const map = useMap();
    map.setView(position);
    return null;
}

function DetactClick() {
    const navigate = useNavigate();
    useMapEvent({ click: (e) => navigate(`form?Lat=${e.latlng.lat}&lng=${e.latlng.lng}`) })
}

const Map = () => {

    const [searchParams] = useSearchParams();
    const [mapPosition, setMapPosition] = useState([28.6139, 77.2088]);

    const mapLat = searchParams.get("lat");
    const mapLng = searchParams.get("lng");

    const { cities } = useContext(CityContext);
    const { isLoading: isLoadingPosition, position: geoLocationPosition, getPosition } = useGeolocation()

    useEffect(() => {
        if (mapLat && mapLng) {
            return setMapPosition([mapLat, mapLng])
        };
    }, [mapLat, mapLng])

    useEffect(() => {
        if (geoLocationPosition) {
            setMapPosition([geoLocationPosition.lat, geoLocationPosition.lng])
        }
    }, [geoLocationPosition])

    return (
        <div className={styles.mapContainer} >
            {!geoLocationPosition && <Button Button type='position' onClick={getPosition}>
                {isLoadingPosition ? "Loading...." : "Use your position"}
            </Button>}
            <MapContainer className={styles.map} center={mapPosition} zoom={8} scrollWheelZoom={true}>
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
                <ChangeCenter position={mapPosition} />
                <DetactClick />
            </MapContainer>
        </div >
    )
}




export default Map