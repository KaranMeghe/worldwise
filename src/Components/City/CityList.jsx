import styles from './City.module.css'
import { useContext } from 'react'
import CityContext from '../../Context /CityContext'
const CityList = () => {
    const { cities } = useContext(CityContext);
    console.log(cities)
    return (
        <ul style={styles.cityList}>List</ul>
    )
}

export default CityList