import styles from './CityItem.module.css';

const CityItem = ({ city }) => {
    return (
        <li>{city.cityName}</li>
    )
}

export default CityItem