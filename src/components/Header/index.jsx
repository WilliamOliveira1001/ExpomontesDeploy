import logo from "../../assets/logobranca.png"
import { HeaderStyles } from "./style"
import { AiOutlineMenu } from "react-icons/ai"
import { MenuMobile } from "../HeaderMenuMobile"
import { useState } from "react"
import { ReactDimmer } from "react-dimmer";
import { Link } from "react-router-dom"



export const HeaderComponents = () => {

    const [isMenuOpen, setisMenuOpen] = useState(false)

    const handlemenu = () => {
        setisMenuOpen((prevState) => !prevState);
    }

    return (
        <>
            <HeaderStyles>
                <div className="bk-corda"></div>
                <div className="div-header">
                    <Link to="/">
                        <figure className="figure-img-logo">
                            <img src={logo} alt="" />
                        </figure>
                    </Link>

                    <button className="button-hamburguer-header" onClick={handlemenu}>
                        <AiOutlineMenu size={25} style={{ color: "#ffffff" }} />
                    </button>

                    <nav className="nav-header">
                        <ul className="ul-header">

                            <li className="li-header">
                                <Link to="/sobre">A Expomontes</Link>
                            </li>
                            <li className="li-header">
                                <Link to="/mapa">Mapa</Link>
                            </li>
                            <li className="li-header">
                                <Link to="/noticias">Notícias</Link>
                            </li>
                            <li className="li-header">
                                <Link to="/podcast">Podcast</Link>
                            </li>

                            <li className="li-header">
                                <Link to="/programacao">Programação</Link>
                            </li>

                            <li className="li-header">
                                <Link to="/rainhas">Rainhas da Expo</Link>
                            </li>

                        </ul>
                    </nav>

                    <div className="div-auxiliar-span">
                        <span className="li-header" id="area-cliente">
                            <a target="blanck" href="https://www.bilheteriadigital.com/expomontes-2023-passaporte-30-de-junho">
                                Ingressos
                            </a>
                        </span>
                    </div>

                </div>
            </HeaderStyles>

            <MenuMobile isMenuOpen={isMenuOpen} />

            <ReactDimmer
                isOpen={isMenuOpen}
                exitDimmer={setisMenuOpen}
                zIndex={100}
                blur={1.5}
            />

        </>
    )
}