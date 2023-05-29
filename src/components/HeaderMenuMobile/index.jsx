import logo from "../../assets/logobranca.png"
import { StyledMenuHeader } from "./style";
import { Link } from "react-router-dom"


export const MenuMobile = ({ isMenuOpen }) => {
    return (
        <StyledMenuHeader>
            <div className={`app-menu ${isMenuOpen ? "menu-open" : ""}`}>

                <nav className="nav-descktop">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                    <ul className="ul-nav">

                        <li>
                            <Link to="/sobre">A Expomontes</Link>
                        </li>

                        <li>
                            <Link to="/mapa">Mapa</Link>
                        </li>

                        <li>
                            <Link to="/noticias">Notícias</Link>
                        </li>

                        <li>
                            <Link to="/podcast">Podcast</Link>
                        </li>

                        <li>
                            <Link to="/programacao">Programação</Link>
                        </li>

                        <li>
                            <Link to="/rainhas">Rainhas da Expo</Link>
                        </li>
                        
                        <a href="https://www.bilheteriadigital.com/expomontes-2023-passaporte-30-de-junho">
                            <li id="area-cliente">
                                <Link to="/expositores">Ingressos</Link>
                            </li>
                        </a>

                    </ul>
                </nav>
            </div>

        </StyledMenuHeader>
    );
}