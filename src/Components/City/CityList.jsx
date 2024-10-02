import styles from './City.module.css'
import { useContext } from 'react'
import CityContext from '../../Context /CityContext'
import { CityItem, Spinner } from '../index';
const CityList = () => {
    const { cities, isLoading } = useContext(CityContext);
    if (isLoading) {
        return <Spinner />
    }
    return (
        <ul style={styles.cityList}>
            {cities.map((city) => {
                return <CityItem city={city} key={city.id} />
            })}
        </ul>
    )
}

export default CityList