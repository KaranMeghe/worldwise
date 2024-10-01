import { SideBar, Map } from "../Components";
import styles from './AppLayout.module.css';

const AppLayout = () => {
  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
    </div>
  )
}

export default AppLayout