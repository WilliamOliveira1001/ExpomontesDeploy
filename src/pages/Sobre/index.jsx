import { motion } from "framer-motion"
import { StyledPaginaSObre } from "./style"
import { HeaderComponents } from "../../components/Header"
import { FooterComponents } from "../../components/footer"
import { HeadllineCarroucel } from "../../components/BannerCarroucel"
import { StyledComponetPatro } from "../../components/PapelDeParede/style"
import identidade from "../../assets/identidade.png"



export const SobrePage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}>

            <HeaderComponents />

            <StyledPaginaSObre>

                <HeadllineCarroucel />

                <StyledComponetPatro >
                    <div className="container-data-espera">
                        <div className="bk-corda"></div>
                        <figure>
                            <img className="img-identidade" src={identidade} alt="" />
                        </figure>

                        <section className="section-tyme">
                            <div className="div-text-conteudo">
                                <h2>
                                    A Expomontes
                                </h2>
                                <p>
                                    A Sociedade Rural de Montes Claros apresenta a 49ª Exposição Agropecuária de Montes Claros, que é hoje o maior e mais importante evento do agronegócio do Norte de Minas. <br />
                                    Uma edição híbrida, tendo eventos virtuais e presenciais. Essa modalidade de negócios ganhou força e avançou pelo campo, sem perder a tradição e experiências vivenciadas com o contato entre as pessoas, no Parque de Exposições João Alencar Athayde, com o propósito de viabilizar o desenvolvimento regional a partir da formalização de parcerias e apoio à implementação de diversos projetos e programas
                                </p>
                            </div>
                            <figure className="figure-img1">
                                <img src="https://i.ibb.co/hYd5dh6/expomontes.webp" alt="" />
                            </figure>
                        </section>

                        <section className="section-tyme" id="id-section-tyme">
                            <div className="div-text-conteudo" id="id-div-text-conteudo">
                                <p>  A intenção em 2023, é realizar o maior evento de todos os tempos, com uma programação com leilões, projetos de sustentabilidade, julgamento e exposições de animais, estandes comerciais e institucionais, palestras, seminários. O potencial de negócios com a mostra agropecuária, comercialização de animais e a movimentação do público nos estandes, atrai e motiva instituições, empresas regionais e nacionais que encontram aqui uma ótima oportunidade para exporem suas marcas e desenvolverem ações de marketing. <br /> <br />
                                    A movimentação almejada em negociações parte, sobretudo dos insumos e máquinas agrícolas e leilões. No quesito entretenimento, são várias atrações artísticas de renome nacional, passando por vários estilos.
                                </p>
                                
                                <a href="https://www.bilheteriadigital.com/expomontes-2023-passaporte-30-de-junho">
                                    <button>
                                        <h6>Quero participar</h6>
                                    </button>
                                </a>
                            </div>
                            <figure className="figure-img1">
                                <img src="https://i.ibb.co/FzKzZZr/capanoticiaboi.png" alt="" />
                            </figure>
                        </section>

                        <figure className="figure-identidade">
                            <img className="img-identidade" src={identidade} alt="" />
                        </figure>
                    </div>

                </StyledComponetPatro>

                <FooterComponents />

            </StyledPaginaSObre>


        </ motion.div>
    )
}