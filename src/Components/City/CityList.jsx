import styles from './City.module.css'
import { useContext } from 'react'
import CityContext from '../../Context /CityContext'
import { CityItem, Message, Spinner } from '../index';
const CityList = () => {
    const { cities, isLoading } = useContext(CityContext);
    if (isLoading) {
        return <Spinner />
    }
    if (!cities.length) {
        return <Message message="Add your first city by clicking on the map" />
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