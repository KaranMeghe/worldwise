import styles from './CityItem.module.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CityContext from '../../Context /CityContext';

const CityItem = ({ city }) => {
    const formatDate = (date) =>
        new Intl.DateTimeFormat("en", {
            day: "numeric",
            month: "long",
            year: "numeric",
        }).format(new Date(date));

    const { currentCity, deleteCity } = useContext(CityContext)
    const { cityName, emoji, date, id, position } = city
    return (
        <li className={styles.cityItemFlex} >
            <Link to={`${id}?lat=${position.lat}&lng=${position.lng}`} className={`${styles.cityItem} ${currentCity.id === id ? styles['cityItem--active'] : ''}`}>
                <span className={styles.emoji}>{emoji}</span>
                <h3 className={styles.name}>{cityName}</h3>
                <time className={styles.date}>{formatDate(date)}</time>
                <button className={styles.deleteBtn} onClick={() => deleteCity(id)}>&times;</button>
            </Link>
        </li >
    )
}

export default CityItem