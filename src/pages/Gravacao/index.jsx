import { motion } from "framer-motion"
import { StyledPageGravacao } from "./style"
import { HeaderComponents } from "../../components/Header"
import { FooterComponents } from "../../components/footer"
import { StyledComponentsTituloMain } from "../../components/StyledTituloMain/style"
import { HeadllineCarroucel } from "../../components/BannerCarroucel"
import { StyledComponetPatro } from "../../components/PapelDeParede/style"

import identidade from "../../assets/identidade.png"

export const GravacaoPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}>
            <StyledPageGravacao>

                <HeaderComponents />

                <HeadllineCarroucel />

                <StyledComponetPatro>
                    <div className="container-data-espera">
                        <div className="bk-corda"></div>
                        <figure>
                            <img className="img-identidade" src={identidade} alt="" />
                        </figure>
                        <StyledComponentsTituloMain className="div-text-gravacao">
                            <h2>Expomontes gravada 2022!</h2>
                            <div></div>
                        </StyledComponentsTituloMain>

                        <div className="container-gravacao">
                            <div className="div-container-diasGravacao">
                                <div className="dia1">
                                    <div className="container-text-iframe">
                                        <h2>
                                            Dia 30
                                        </h2>
                                    </div>
                                    <div className="div-iframes">
                                        <iframe width="400" height="230" src="https://www.youtube.com/embed/ci1nkmy69mU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>

                            <div className="div-container-diasGravacao">
                                <div className="dia1">
                                    <div className="container-text-iframe">
                                        <h2>
                                            Dia 01
                                        </h2>
                                    </div>
                                    <div className="div-iframes">
                                        <iframe width="400" height="230" src="https://www.youtube.com/embed/gey3_4AVaG8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        <iframe width="400" height="230" src="https://www.youtube.com/embed/JxKeygqM7BY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>

                            <div className="div-container-diasGravacao">
                                <div className="dia1">
                                    <div className="container-text-iframe">
                                        <h2>
                                            Dia 02
                                        </h2>
                                    </div>
                                    <div className="div-iframes">
                                        <iframe width="400" height="230" src="https://www.youtube.com/embed/JHGweB4hK3w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>

                            <div className="div-container-diasGravacao">
                                <div className="dia1">
                                    <div className="container-text-iframe">
                                        <h2>
                                            Dia 03
                                        </h2>
                                    </div>
                                    <div className="div-iframes">
                                        <iframe width="400" height="230" src="https://www.youtube.com/embed/cOWyX-xktR4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        <iframe width="400" height="230" src="https://www.youtube.com/embed/b8_6XoeRQm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>

                            <div className="div-container-diasGravacao">
                                <div className="dia1">
                                    <div className="container-text-iframe">
                                        <h2>
                                            Dia 04
                                        </h2>
                                    </div>
                                    <div className="div-iframes">
                                        <iframe width="400" height="230" src="https://www.youtube.com/embed/8OFoiH1ZgLM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        <iframe width="400" height="230" src="https://www.youtube.com/embed/1SvbyOAiCus" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        <iframe width="400" height="230" src="https://www.youtube.com/embed/t8k5OC_g9Ac" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>

                            <div className="div-container-diasGravacao">
                                <div className="dia1">
                                    <div className="container-text-iframe">
                                        <h2>
                                            Dia 05
                                        </h2>
                                    </div>
                                    <div className="div-iframes">
                                        <iframe width="400" height="230" src="https://www.youtube.com/embed/jpfD9VYQf9I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        <iframe width="400" height="230" src="https://www.youtube.com/embed/f3IqWMJF2HE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        <iframe width="400" height="230" src="https://www.youtube.com/embed/slyPWui2Vao" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>

                            <div className="div-container-diasGravacao">
                                <div className="dia1">
                                    <div className="container-text-iframe">
                                        <h2>
                                            Dia 06
                                        </h2>
                                    </div>
                                    <div className="div-iframes">
                                        <iframe width="400" height="230" src="https://www.youtube.com/embed/I1DIal1vDjU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        <iframe width="400" height="230" src="https://www.youtube.com/embed/gETHLJj5teo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        <iframe width="400" height="230" src="https://www.youtube.com/embed/_NFIFarYP2w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        <iframe width="400" height="230" src="https://www.youtube.com/embed/AhfY3_bTsFg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        <iframe width="400" height="230" src="https://www.youtube.com/embed/YfNo4k4AE0I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        <iframe width="400" height="230" src="https://www.youtube.com/embed/Y4ubLQd5RbY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>


                            <div className="div-container-diasGravacao">
                                <div className="dia1">
                                    <div className="container-text-iframe">
                                        <h2>
                                            Dia 07
                                        </h2>
                                    </div>
                                    <div className="div-iframes">
                                        <iframe width="400" height="230" src="https://www.youtube.com/embed/NzNb-EAGTlg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        <iframe width="400" height="230" src="https://www.youtube.com/embed/vJRwYEUDCRQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        <iframe width="400" height="230" src="https://www.youtube.com/embed/1xwhY1RYsNs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        <iframe width="400" height="230" src="https://www.youtube.com/embed/PwNW-Z5kNWs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        <iframe width="400" height="230" src="https://www.youtube.com/embed/A97mTrAD4SM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>


                            <div className="div-container-diasGravacao">
                                <div className="dia1">
                                    <div className="container-text-iframe">
                                        <h2>
                                            Dia 08
                                        </h2>
                                    </div>
                                    <div className="div-iframes">
                                        <iframe width="400" height="230" src="https://www.youtube.com/embed/0QB3Mjn3bFY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        <iframe width="400" height="230" src="https://www.youtube.com/embed/BwoKqmCFcfg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        <iframe width="400" height="230" src="https://www.youtube.com/embed/5PvANLkagKk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        <iframe width="400" height="230" src="https://www.youtube.com/embed/jW_F5Syhybs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        <iframe width="400" height="230" src="https://www.youtube.com/embed/h3lRZoDgZUU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>

                            <div className="div-container-diasGravacao">
                                <div className="dia1">
                                    <div className="container-text-iframe">
                                        <h2>
                                            Dia 09
                                        </h2>
                                    </div>
                                    <div className="div-iframes">
                                        <iframe width="400" height="230" src="https://www.youtube.com/embed/eNnBQM_86Oc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        <iframe width="400" height="230" src="https://www.youtube.com/embed/T-g9OP887BI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        <iframe width="400" height="230" src="https://www.youtube.com/embed/eROjb-b1ha8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        <iframe width="400" height="230" src="https://www.youtube.com/embed/WZWqQSW6EFA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>

                            <div className="div-container-diasGravacao">
                                <div className="dia1">
                                    <div className="container-text-iframe">
                                        <h2>
                                            Dia 10
                                        </h2>
                                    </div>
                                    <div className="div-iframes">
                                        <iframe width="400" height="230" src="https://www.youtube.com/embed/ot-Hdz_g_Nc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        <iframe width="400" height="230" src="https://www.youtube.com/embed/4uOfYg6yU40" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </StyledComponetPatro>
                <FooterComponents />
            </StyledPageGravacao>
        </motion.div>
    )
}