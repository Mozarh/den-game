import styles from './Header.module.css'
import {  NavLink } from 'react-router';

const Header = () => {
    return (
        <header className={styles.header}>
            <NavLink to='/' className={styles.header__logo}>DenGame</NavLink>

            <nav className={styles.header__nav}>
                <NavLink to='/' className={styles.header__link}>Главная</NavLink>
                <NavLink to='/collection' className={styles.header__link}>Коллекция игр</NavLink>
                <NavLink to='/discover' className={styles.header__link}>Найти игры</NavLink>
            </nav>
        </header>
    )
}

export default Header