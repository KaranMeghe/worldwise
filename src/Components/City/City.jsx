import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import styles from "./City.module.css";
import { useEffect } from "react";
import { useContext } from "react";
import CityContext from "../../Context /CityContext";
import { Spinner } from '../index'
import { Button } from '../index'

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  const { id } = useParams();
  const { currentCity, fetchCity, isLoading } = useContext(CityContext)
  const [searchParams, setSearchParams] = useSearchParams()
  const lat = searchParams.get("lat")
  const lng = searchParams.get("lng")

  const navigate = useNavigate()

  useEffect(() => {
    fetchCity(id);
  }, [id])

  const { cityName, emoji, date, notes } = currentCity;


  if (isLoading) return <Spinner />

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div className={styles.citybtn}>
        <Button type="primary" >Add</Button>
        <Button type="back" className={styles.back} onClick={(e) => { e.preventDefault(); navigate(-1); }}>&larr; Back</Button>
      </div>

      <p>position lat {lat} , lng {lng}</p>
    </div >
  );
}

export default City;
