import './Navigation.css';
import Todo from '../assets/to-do.svg';
import Skema from '../assets/skema.svg';
import Kontakt from '../assets/kontakt.svg';
import Hjaelp from '../assets/hjaelp.svg';

function Navigation() {
    return (
        <nav className="main-navigation">
            <ul>
                <li>
                    <a href="#" class="nav-to-do">
                        <img src={Todo} class="nav-icon" alt="" />
                        <span>To-do</span>
                    </a></li>
                <li>
                    <a href="#" class="nav-skema">
                        <img src={Skema} class="nav-icon" alt="" />
                        <span>Skema</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-kontakt">
                        <img src={Kontakt} class="nav-icon" alt="" />
                        <span>Kontakt</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-hjaelp">
                        <img src={Hjaelp} class="nav-icon" alt="" />
                        <span>Hjælp</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;