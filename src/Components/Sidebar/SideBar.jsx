import { NavLink } from 'react-router-dom'
import { Logo, Footer } from '../index'
import styles from './SideBar.module.css'
const SideBar = () => {
    return (
        <div className={styles.sidebar}>
            <NavLink to='/'>
                <Logo />
            </NavLink>
            <p>List of cities</p>
            <Footer />
        </div>
    )
}

export default SideBar