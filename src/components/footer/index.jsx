import logo from "../../assets/logoverde.png"
import { AiOutlineMail } from "react-icons/ai"
import { FaPhoneAlt } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa"
import { FaMapPin } from "react-icons/fa"
import { AiOutlineInstagram } from "react-icons/ai"
import { AiOutlineFacebook } from "react-icons/ai"
import { AiOutlineYoutube } from "react-icons/ai"
import { AiOutlineLinkedin } from "react-icons/ai"
import { SlSocialSpotify } from "react-icons/sl"
import { StyledFooter } from "./style"
import { Link } from "react-router-dom"

export const FooterComponents = () => {
    return (
        <>
            <StyledFooter>
                <div className="div-containaer-footer">
                    <div className="div1-footer">
                        <figure>
                            <img src={logo} alt="" />
                        </figure>
                        <h2>
                            Semeando inovação, colhendo futuro!
                        </h2>
                        <ul className="ul-div1">
                            <li>
                                <AiOutlineMail style={{ color: "#000000" }} />
                                <p>sociedaderural@gmail.com</p>
                            </li>
                            <li>
                                <FaPhoneAlt style={{ color: "#000000" }} />
                                <p>3251-2036</p>
                            </li>
                            <li>
                                <FaWhatsapp style={{ color: "#000000" }} />
                                <p>(38) 99805-9416</p>
                            </li>
                            <li>
                                <FaMapPin style={{ color: "#000000" }} />
                                Montes Claros
                            </li>
                        </ul>
                    </div>

                    <div className="div2-footer">
                        <h3>Menu</h3>
                        <Link to="/noticias"> <p>Notícias</p></Link>
                        <Link to="/podcast"> <p>PodCast</p></Link>
                        <Link to="/mapa"> <p>Mapa</p></Link>
                        <Link to="/programacao"> <p>Programação</p></Link>
                    </div>

                    <div className="div3-footer">
                        <h3>
                            Midias sociais
                        </h3>
                        <div className="div3-midiasocial">
                            <a href="https://www.instagram.com/sociedaderural/" target="Black"><AiOutlineInstagram size={35} style={{ color: "#111111a4" }}></AiOutlineInstagram></a>
                            <a href="https://www.facebook.com/sociedaderural/" target="Black"><AiOutlineFacebook size={33} style={{ color: "#181818a9" }}></AiOutlineFacebook></a>
                            <a href="https://www.linkedin.com/company/sociedade-rural-de-montes-claros/about/"><AiOutlineLinkedin size={33} style={{ color: "#181818a9" }}></AiOutlineLinkedin></a>
                            <a href="https://open.spotify.com/show/5d1dIq6Zt4KzSa9YLnh1J5?si=7711ee8ab27f4934"><SlSocialSpotify size={28} style={{ color: "#181818a9" }}></SlSocialSpotify></a>
                            <a href="https://www.youtube.com/@SociedadeRuraldeMontesClaros"><AiOutlineYoutube size={35} style={{ color: "#181818a9" }}> </AiOutlineYoutube></a>
                        </div>
                        <a href="https://www.bilheteriadigital.com/expomontes-2023-passaporte-30-de-junho" target="Black">
                            <button>
                                Expomontes
                            </button>
                        </a>
                    </div>
                </div>
                <div className="rodape-footer">@Expomontes - Desenvolvido por Smartix</div>
            </StyledFooter>
        </>
    )
}