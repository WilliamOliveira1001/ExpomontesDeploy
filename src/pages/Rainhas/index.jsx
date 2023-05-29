import { motion } from "framer-motion"
import { StyledRainhas } from "./style"
import { HeaderComponents } from "../../components/Header"
import { HeadllineCarroucel } from "../../components/BannerCarroucel"
import { FooterComponents } from "../../components/footer"
import { StyledComponetPatro } from "../../components/PapelDeParede/style"
import { StyledComponentsTituloMain } from "../../components/StyledTituloMain/style"

import identidade from "../../assets/identidade.png"


export const RainhasDaExpoComponents = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}>
            <StyledRainhas>

                <HeaderComponents />

                <HeadllineCarroucel />

                <StyledComponetPatro>

                    <div className="container-data-espera">

                        <div className="bk-corda"></div>

                        <figure>
                            <img className="img-identidade" src={identidade} alt="" />
                        </figure>

                        <StyledComponentsTituloMain id="titulo-rainha">
                            <h2>
                                Rainhas da Expomontes 2023
                            </h2>
                            <div>

                            </div>
                            {/* <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p> */}
                        </StyledComponentsTituloMain>

                        <div className="container-card">

                            <div className="card" id="rainha1">

                                <h2 className="h2-card">
                                Flavia Gabriela Lopes de Oliveira
                                </h2>
                                <p className="p-card">
                                Rainha do Sicoob Credinor, 16 anos, Montes Claros – MG. “Eu sempre desejei ser rainha desde a infância, minha irmã, foi rainha, eu cresci com isso, eu via todo o corre corre e queria que isso, um dia, fosse uma experiência minha também”.
                                </p>

                            </div>

                            <div className="card" id="rainha2">

                                <h2 className="h2-card">
                                    Emanuelle Moreira Antunes Damasceno

                                </h2>
                                <p className="p-card">
                                    Rainha do Núcleo de Cavalos, 15 anos, Montes Claros - MG. "Meu hobby é andar a cavalo. Desde criança quis representar o núcleo do cavalo. Esse sempre foi o meu sonho. Amo Cavalo".
                                </p>

                            </div>

                            <div className="card" id="rainha3">

                                <h2 className="h2-card">
                                    Júlia Barreto Godoi

                                </h2>
                                <p className="p-card">
                                    Rainha da Sociedade Rural de Montes Claros, 16 anos, Montes Claros - MG. " Minha relação com a Sociedade Rural e a Expomontes é como se fossemos uma aliança, desde pequena sempre fui muito presente e fui muito bem acolhida, eu diria que é meu refúgio".
                                </p>

                            </div>

                            <div className="card" id="rainha4">

                                <h2 className="h2-card">
                                    Maria Eduarda Sampaio Zuba
                                </h2>
                                <p className="p-card">
                                    Rainha do Sindicato dos Produtores Rurais, 15 anos, Montes Claros – MG. “Estou muito ansiosa para Expomontes 2023, principalmente pela responsabilidade de ser rainha e representar o Sindicato Rural”.
                                </p>

                            </div>

                        </div>

                    </div>
                </StyledComponetPatro>

                <FooterComponents />

            </StyledRainhas>
        </motion.div>
    )
}