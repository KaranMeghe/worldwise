import styles from './CountryList.module.css'
import { useContext } from 'react'
import { CountryItem } from '../index'
import CityContext from '../../Context /CityContext'
import { Message, Spinner } from '../index'


const CountryList = () => {
    const { cities, isLoading } = useContext(CityContext);
    if (isLoading) {
        return <Spinner />
    }
    if (!cities.length) {
        return <Message message="Add your first city by clicking on the map" />
    }
    // const countries = cities.reduce((arr, city) => {
    //     if (!arr.map((el) => el.city).includes(city.country)) {
    //         return [...arr, { country: city.country, emoji: city.emoji }]
    //     } else return arr
    // }, [])



    const countries = cities.reduce((arr, city) => {
        const countryExist = arr.map((el) => {
            return el.country
        }).includes(city.country);

        if (!countryExist) {
            return [...arr, { country: city.country, emoji: city.emoji }];
        } else return arr;

    }, []);


    return (
        <ul className={styles.countryList}>
            {countries.map((country) => {
                return <CountryItem country={country} key={country.id} />
            })}
        </ul>
    )
}

export default CountryList