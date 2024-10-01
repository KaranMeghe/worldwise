import { SideBar, Map } from "../Components";
import { CityProvider } from "../Context /CityContext";
import styles from './AppLayout.module.css';

const AppLayout = () => {
  return (
    <div className={styles.app}>
      <CityProvider>
        <SideBar />
      </CityProvider>

      <Map />
    </div>
  )
}

export default AppLayout