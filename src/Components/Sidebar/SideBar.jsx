import { NavLink } from 'react-router-dom'
import { Logo, Footer, AppNav } from '../index'
import styles from './SideBar.module.css'
import { Outlet } from 'react-router-dom'
const SideBar = () => {
    return (
        <div className={styles.sidebar}>
            <NavLink to='/'>
                <Logo />
            </NavLink>
            <AppNav />
            <Outlet />
            <Footer />
        </div>
    )
}

export default SideBar