import { createContext, useState, useEffect } from "react";

// Create new context 
const CityContext = createContext();

const BASE_URL = 'http://localhost:3002'

const CityProvider = ({ children }) => {
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentCity, setCurrentCity] = useState({})

    // Fetch Cities Data
    useEffect(() => {
        const fetchCities = async () => {
            try {
                setIsLoading(true)
                const res = await fetch(`${BASE_URL}/cities`);
                const data = await res.json();
                setCities(data)
                console.log(cities)
            } catch {
                alert("There was an error at loading time")
            } finally {
                setIsLoading(false)
            }
        }
        fetchCities()
    }, [])

    // Fetch Individual City data

    const fetchCity = async (id) => {
        try {
            setIsLoading(true)
            const res = await fetch(`${BASE_URL}/cities/${id}`);
            const data = await res.json();
            setCurrentCity(data);
        } catch {
            alert("Failed to get data")
        } finally {
            setIsLoading(false)
        }
    }

    // Delete City from list
    const deleteCity = (id) => {
        const updatedCities = cities && cities.filter((city) => {
            return city.id !== id
        })

        setCities(updatedCities);
    }


    const valueToShare = {
        cities, setCities, isLoading, currentCity, fetchCity, deleteCity
    }

    return <CityContext.Provider value={valueToShare}>{children}</CityContext.Provider>
}

export { CityProvider };
export default CityContext;