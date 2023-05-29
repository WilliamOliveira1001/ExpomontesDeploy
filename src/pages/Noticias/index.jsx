import { motion } from "framer-motion"
import { StyledPageNoticia } from "./style"
import { HeaderComponents } from "../../components/Header"
import { StyledCapaNoticias } from "../../components/StyledCapanoticias"
import { FooterComponents } from "../../components/footer"
import { StyledComponentsTituloMain } from "../../components/StyledTituloMain/style"
import { HeadllineCarroucel } from "../../components/BannerCarroucel"
import { StyledComponetPatro } from "../../components/PapelDeParede/style"


import seta from "../../assets/setaAdireita.png"
import identidade from "../../assets/identidade.png"
import { Link } from "react-router-dom"


export const NoticiasPages = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}>
            <StyledPageNoticia>

                <HeaderComponents />

                <HeadllineCarroucel />

                <StyledComponetPatro>
                    <div className="container-data-espera">
                        <div className="bk-corda"></div>
                        <figure>
                            <img className="img-identidade" src={identidade} alt="" />
                        </figure>
                        <StyledComponentsTituloMain className="styled2-titulo">
                            <h2>
                                Navegue nas noticias do mundo Agro
                            </h2>
                            <div></div>
                        </StyledComponentsTituloMain>

                        <div className="div-card-noticias">
                            <ul>
                                <li>

                                    <StyledCapaNoticias className="div-info-card">
                                        <Link to="/page1">
                                            <section>
                                                <img src="https://i.ibb.co/123LMc9/presidente-SR1.png" alt="" />
                                                <div className="div-text-noticia" id="id-text-card-noticia">
                                                    <h2>
                                                        49ª Expomontes - Lançamento Oficial e apresentação das rainhas
                                                    </h2>
                                                    <p>
                                                        Com novo slogan, semeando inovação, colhendo futuro – e fortalecendo que o agro é o que nos conecta, a Sociedade Rural de Montes Claros faz o lançamento oficial da 49ª Expomontes...
                                                    </p>
                                                </div>
                                            </section>

                                            <div className="div-rodape-card-noticias" id="id-span-card-noticia">
                                                <span>
                                                    29/05/2023
                                                </span>
                                                <a href=""> <p>Ler noticia</p>
                                                    <img src={seta} alt="" /></a>
                                            </div>
                                        </Link>
                                    </StyledCapaNoticias>

                                    <StyledCapaNoticias className="div-info-card">
                                        <Link to="/page2">
                                            <section>
                                                <img src="https://i.ibb.co/xXwd151/capanoticiarainha.png" alt="" />
                                                <div className="div-text-noticia" id="id-text-card-noticia">
                                                    <h2>
                                                        Rainhas da Expomontes
                                                    </h2>
                                                    <p>
                                                        Na mesma solenidade, as Rainhas da Sociedade Rural de Montes Claros, Sindicato dos Produtores Rurais, Sicoob Credinor e Núcleo Mangalarga Marchador do Norte de Minas serão apresentadas à comunidade. Para o Diretor Social, Bernardo Pinheiro...     <br />
                                                    
                                                    </p>
                                                </div>
                                            </section>

                                            <div className="div-rodape-card-noticias" id="id-span-card-noticia">
                                                <span>
                                                    29/05/2023
                                                </span>
                                                <a href=""> <p>Ler noticia</p>
                                                    <img src={seta} alt="" /></a>
                                            </div>
                                        </Link>
                                    </StyledCapaNoticias>

                                    <StyledCapaNoticias className="div-info-card">
                                        <Link to="/page3">
                                            <section>
                                                <img src="https://i.ibb.co/C6tKvC0/capanoticias3.png" alt="" />
                                                <div className="div-text-noticia" id="id-text-card-noticia">
                                                    <h2>
                                                        Sociedade Rural
                                                    </h2>
                                                    <p>
                                                        Fundada em 21 de junho de 1944, a Sociedade Rural de Montes Claros, caminha para completar 79 anos. Participou de episódios marcantes na história do Norte de Minas e se estabeleceu como uma das principais vozes dos produtores rurais...
                                                    </p>
                                                </div>
                                            </section>
                                            <div className="div-rodape-card-noticias" id="id-span-card-noticia">
                                                <span>
                                                    29/05/2023
                                                </span>
                                                <a href=""> <p>Ler noticia</p>
                                                    <img src={seta} alt="" /></a>
                                            </div>
                                        </Link>
                                    </StyledCapaNoticias>

                                    <StyledCapaNoticias className="div-info-card">
                                        <Link to="/page4">
                                            <section>
                                                <img src="https://i.ibb.co/5jX1LR2/Design-sem-nome-87.png" alt="" />
                                                <div className="div-text-noticia" id="id-text-card-noticia">
                                                    <h2>
                                                        Pautas da agropecuária ao Presidente da Assembleia de MG
                                                    </h2>
                                                    <p>
                                                    A Sociedade Rural de Montes Claros apresentou ao Presidente da Assembleia, o Deputado Tadeu Martins Leite, as pautas elencadas como prioridades...
                                                    </p>
                                                </div>
                                            </section>
                                            <div className="div-rodape-card-noticias" id="id-span-card-noticia">
                                                <span>
                                                    29/05/2023
                                                </span>
                                                <a href=""> <p>Ler noticia</p>
                                                    <img src={seta} alt="" /></a>
                                            </div>
                                        </Link>
                                    </StyledCapaNoticias>
                                </li>
                            </ul>
                        </div>
                    </div>
                </StyledComponetPatro>


                <div className="div-container-card-noticia">


                    <div className="div-style-noticias"></div>

                </div>
                <FooterComponents />

            </StyledPageNoticia>
        </motion.div>
    )
}