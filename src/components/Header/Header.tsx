import { NavLink } from 'react-router-dom';
import location from '../../assets/images/location.svg';
import logo from '../../assets/images/logo.png';
import saved from '../../assets/images/saved.svg';
import wapp from '../../assets/images/wapp.svg';
import telegram from '../../assets/images/telegram.svg';
import call from '../../assets/images/phone.svg';
import styles from './style/Header.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <NavLink to="/" className={styles.nav}>Продажа</NavLink>
            <NavLink to="/1" className={styles.nav}>Аренда</NavLink>
            <NavLink to="/2" className={styles.nav}>Новостройки</NavLink>
            <NavLink to="/3" className={styles.nav}>Виллы</NavLink>
            <NavLink to="/4" className={styles.nav}>Сервисы</NavLink>
            <NavLink to="/about" className={styles.nav}>Компания</NavLink>
            <div className={styles.city}>
                <img src={location} alt="location" />
                <p>Дубай</p>
            </div>
            <select name="language" id="select-lang">
                <option value="Ру">Ру</option>
                <option value="En">En</option>
            </select>
            <select name="valute" id="select-valute">
                <option value="$">$, Доллар</option>
                <option value="P">P, Рубль</option>
            </select>
            <div className={styles.saved}>
                <img src={saved} alt="saved" />
            </div>
            <div className={styles.contacts}>
                <a href="https://www.whatsapp.com">
                    <img src={wapp} alt="WhatsApp" />
                </a>
                <a href="https://web.telegram.org/a/">
                    <img src={telegram} alt="Telegram" />
                </a>
                <img src={call} alt="Call" />
            </div>
        </header>
    );
};