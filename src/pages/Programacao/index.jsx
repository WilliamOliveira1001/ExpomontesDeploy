import { motion } from "framer-motion"
import { HeaderComponents } from "../../components/Header";
import { StyledComponentsProgramacao } from "./style";
import { FooterComponents } from "../../components/footer";
import { useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai"
import { AiOutlineCaretUp } from "react-icons/ai"
import { HeadllineCarroucel } from "../../components/BannerCarroucel";
import { StyledComponetPatro } from "../../components/PapelDeParede/style";
import { StyledComponentsTituloMain } from "../../components/StyledTituloMain/style";

import identidade from "../../assets/identidade.png"


export const ProgramacaoPage = () => {

    const [view, setView] = useState(false)
    const [view1, setView1] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}>

            <HeaderComponents />

            <StyledComponentsProgramacao>

                <HeadllineCarroucel />

                <StyledComponetPatro>

                    <div className="container-data-espera">

                        <div className="bk-corda"></div>
                        <figure>
                            <img className="img-identidade" src={identidade} alt="" />
                        </figure>
                        <div className="container-card-programacao">

                            <StyledComponentsTituloMain className="titulo-programacao">
                                {/* <h2>Confira nossa programação 2023!</h2> */}
                                <h2>Programação 2023 disponível em breve...</h2>
                                <div></div>
                            </StyledComponentsTituloMain>

                            <div className="div-card-programacao">
                                <button className="div-fixed" onClick={() => setView(!view)}>
                                    <p>
                                        Dia1  - **/**/*** */
                                    </p>
                                    {view ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
                                </button>
                                {view &&
                                    <div className="div-relative">
                                        {/* <br />
                                        <p><strong>Local:</strong>  Parque de Exposição</p> <br />

                                        <strong> **h às **h </strong> <br />

                                        <p>Abertura</p><br />

                                        <strong> **h às **h </strong> <br />

                                        <strong>**</strong> */}

                                        {/* <ul>
                                            <li>Soluções biológicas para melhoria da física do solo – Trincheira</li>
                                            <li>Soluções biológicas para melhoria da física do solo – Trincheira</li>
                                            <li>Soluções biológicas para melhoria da física do solo – Trincheira</li>
                                            <li>Soluções biológicas para melhoria da física do solo – Trincheira</li>
                                            <li>Soluções biológicas para melhoria da física do solo – Trincheira</li>
                                        </ul><br /> */}

                                        {/* <strong> 16h às 15:30min </strong> <br />
                                        <strong>Encontro do núcleo de mulheres do Agro</strong>

                                        <ul>
                                            <li>Soluções biológicas para melhoria da física do solo – Trincheira</li>
                                        </ul> */}

                                    </div>
                                }
                            </div>


                            {/* <div className="div-card-programacao">
                                <button className="div-fixed" onClick={() => setView1(!view1)}>
                                    <p>
                                        Dia - 01/06/2023
                                    </p>
                                    {view1 ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
                                </button>
                                {view1 &&
                                    <div className="div-relative">
                                        <br />
                                        <p><strong>Local:</strong>  Parque de Exposição</p> <br />

                                        <strong> 08h às 11h </strong> <br />

                                        <p>Abertura</p><br />

                                        <strong> 13h às 16h </strong> <br />

                                        <strong>Manejo Biológico de Solos para Altas Produtividades </strong>

                                        <ul>
                                            <li>Soluções biológicas para melhoria da física do solo – Trincheira</li>
                                            <li>Soluções biológicas para melhoria da física do solo – Trincheira</li>
                                            <li>Soluções biológicas para melhoria da física do solo – Trincheira</li>
                                            <li>Soluções biológicas para melhoria da física do solo – Trincheira</li>
                                            <li>Soluções biológicas para melhoria da física do solo – Trincheira</li>
                                        </ul><br />

                                        <strong> 16h às 15:30min </strong> <br />
                                        <strong>Encontro do núcleo de mulheres do Agro</strong>

                                        <ul>
                                            <li>Soluções biológicas para melhoria da física do solo – Trincheira</li>
                                        </ul>

                                    </div>
                                }
                            </div> */}

                        </div>
                    </div>

                </StyledComponetPatro>

                <FooterComponents />

            </StyledComponentsProgramacao>

        </motion.div>
    )
}