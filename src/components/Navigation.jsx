import './Navigation.css';
import Todo from '../assets/to-do.svg';
import Skema from '../assets/skema.svg';
import Kontakt from '../assets/kontakt.svg';
import Hjaelp from '../assets/hjaelp.svg';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <nav className="main-navigation">
            <ul>
                <li>
                    
                    <NavLink to="/" className="nav-to-do">
                        <img src={Todo} className="nav-icon" alt="" />
                        <span>To-do</span>
                    </NavLink>
                    </li>
                <li>
                    <NavLink to="/skema" className="nav-skema">
                        <img src={Skema} className="nav-icon" alt="" />
                        <span>Skema</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/kontakt" className="nav-kontakt">
                        <img src={Kontakt} className="nav-icon" alt="" />
                        <span>Kontakt</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/hjaelp" className="nav-hjaelp">
                        <img src={Hjaelp} className="nav-icon" alt="" />
                        <span>Hjælp</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;