import { motion } from "framer-motion"
import { HeaderComponents } from "../../components/Header"
import { StyledMap } from "./style"
import { FooterComponents } from "../../components/footer"
import { StyledComponetTituloSecond } from "../../components/StyledTituloSecund/style"
import { HeadllineCarroucel } from "../../components/BannerCarroucel"
import { StyledComponetPatro } from "../../components/PapelDeParede/style"
import identidade from "../../assets/identidade.png"


export const MapaPages = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}>

            <HeaderComponents />

            <HeadllineCarroucel />

            <StyledComponetPatro>
                <div className="container-data-espera">
                    <div className="bk-corda"></div>
                    <figure>
                        <img className="img-identidade" src={identidade} alt="" />
                    </figure>

                    <StyledMap className="container-map">

                        <StyledComponetTituloSecond className="h2-components">
                            <div></div>
                            <h2>Mapa do Evento</h2>
                        </StyledComponetTituloSecond>
                        <div className="div-container-mapa">
                            <figure>
                          
                                    <img src="https://i.ibb.co/3z0x20S/mapaExpo.png" alt="" />
                              
                            </figure>
                            <div className="div-text-mapa">
                                <h2>
                                    Pensando em uma melhor experiência para você!
                                </h2>
                                <p>
                                    A disposição de estandes, palco, bares e setores foram minimamente pensados para oferecer a melhor experiência para o nosso público.
                                </p>
                                <div className="div-button-mapa">
                                    <button>
                                        <a href="https://goo.gl/maps/9G73PoPP5KRMoN4b8" target="black">
                                            <h4>Google Maps</h4>
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </StyledMap>
                </div>

            </StyledComponetPatro>

            <FooterComponents />
        </motion.div>
    )
}