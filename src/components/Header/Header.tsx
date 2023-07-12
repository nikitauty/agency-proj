import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";


export const Header: FunctionComponent = () => {
    return (
        <header>
            <NavLink to="/">Продажа</NavLink>
            <NavLink to="/">Аренда</NavLink>
            <NavLink to="/">Новостройки</NavLink>
            <NavLink to="/">Виллы</NavLink>
            <NavLink to="/">Сервисы</NavLink>
            <NavLink to="/">Компания</NavLink>
            <div className="header__location">

            </div>
            <div className="header__language">

            </div>
            <div className="header__valut">

            </div>
            <div className="header__saved">

            </div>
            <NavLink to="/">WhatsApp</NavLink>
            <NavLink to="/">Telegram</NavLink>
            <button>Call</button>
        </header>
    );
};