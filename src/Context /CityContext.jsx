import { createContext, useState, useEffect } from "react";

// Create new context 
const CityContext = createContext();

const BASE_URL = 'http://localhost:3002'

const CityProvider = ({ children }) => {
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

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

    const valueToShare = {
        cities, setCities, isLoading
    }

    return <CityContext.Provider value={valueToShare}>{children}</CityContext.Provider>
}

export { CityProvider };
export default CityContext;