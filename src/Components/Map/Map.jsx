import { useSearchParams, useNavigate } from 'react-router-dom'
import styles from './Map.module.css'

const Map = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams()
    console.log(searchParams)
    const lat = searchParams.get("lat")
    const lng = searchParams.get("lng")
    return (
        <div className={styles.mapContainer} onClick={() => navigate('form')}>Map position - Lat: {lat}, Lng:{lng}
            <button onClick={() => setSearchParams({ lat: 40, lng: -90 })}>Change</button>
        </div>
    )
}

export default Map