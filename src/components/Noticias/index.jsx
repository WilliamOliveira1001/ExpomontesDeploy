import corda from "../../assets/corda2.png"
import corda1 from "../../assets/corda3.png"
import setaNoticia from "../../assets/setaAdireita.png";

import { Link } from "react-router-dom"
import { StyledNoticias } from "./style"
import { StyledComponentsTituloMain } from "../StyledTituloMain/style"
import { StyledCapaNoticias } from "../StyledCapanoticias"

export const ComponentNoticia = () => {
    return (
        <>
            <StyledNoticias>

                <div className="container-agro-tech">

                    <section>
                        <figure>
                            <img className="corda1" src={corda1} alt="" />
                        </figure>
                    </section>

                    <section className="sesction-noticias">
                        
                        <StyledComponentsTituloMain id="noticia-titulo">
                            <h2>Notícias!</h2>
                            <div></div>
                            <p>
                                Confira nossas ultimas notícias do Agro do norte de minas.
                            </p>
                        </StyledComponentsTituloMain>

                        <div className="div-noticias-main-page">
                            <ul>
                                
                                <Link to="/page1#topo">
                                    <li>
                                        <StyledCapaNoticias className="div-noticias">
                                            <section>
                                                <img src="https://i.ibb.co/123LMc9/presidente-SR1.png" alt="" />
                                                <div className="div-text-noticia">
                                                    <h2>Lançamento Oficial e apresentação das rainhas</h2>
                                                    <p>
                                                        Com novo slogan, semeando inovação, colhendo futuro – e fortalecendo que o agro é o que nos conecta, a Sociedade Rural de Montes Claros faz o lançamento oficial da 49ª Expomontes, nesta segunda-feira (08).
                                                    </p>
                                                </div>
                                            </section>
                                            <div className="div-rodape-card-noticias">
                                                <span>29/05/2023</span>
                                                <a href="">
                                                    {" "}
                                                    <p>Ler notícia</p>
                                                    <img src={setaNoticia} alt="" />
                                                </a>
                                            </div>
                                        </StyledCapaNoticias>
                                    </li>
                                </Link>

                                <Link to="/page2">
                                    <li>
                                        <StyledCapaNoticias className="div-noticias">
                                            <section>
                                                <img src="https://i.ibb.co/xXwd151/capanoticiarainha.png" alt="" />
                                                <div className="div-text-noticia">
                                                    <h2>Rainhas da Expomontes</h2>
                                                    <p>
                                                        Na mesma solenidade, as Rainhas da Sociedade Rural de Montes Claros, Sindicato dos Produtores Rurais, Sicoob Credinor e Núcleo Mangalarga Marchador do Norte de Minas serão apresentadas à comunidade.
                                                    </p>
                                                </div>
                                            </section>
                                            <div className="div-rodape-card-noticias">
                                                <span>29/05/2023</span>
                                                <a href="">
                                                    {" "}
                                                    <p>Ler notícia</p>
                                                    <img src={setaNoticia} alt="" />
                                                </a>
                                            </div>
                                        </StyledCapaNoticias>
                                    </li>
                                </Link>

                                <Link to="/page3">
                                    <li>
                                        <StyledCapaNoticias className="div-noticias">
                                            <section>
                                                <img src="https://i.ibb.co/C6tKvC0/capanoticias3.png" alt="" />
                                                <div className="div-text-noticia">
                                                    <h2>Sociedade Rural</h2>
                                                    <p>
                                                    Fundada em 21 de junho de 1944, a Sociedade Rural de Montes Claros, caminha para completar 79 anos. Participou de episódios marcantes na história do Norte de Minas e se estabeleceu como uma das principais vozes dos produtores rurais...</p>
                                                </div>
                                            </section>
                                            <div className="div-rodape-card-noticias">
                                                <span>29/05/2023</span>
                                                <a href="">
                                                    {" "}
                                                    <p>Ler notícia</p>
                                                    <img src={setaNoticia} alt="" />
                                                </a>
                                            </div>
                                        </StyledCapaNoticias>
                                    </li>
                                </Link>

                            </ul>
                        </div>

                        <button>
                            <Link to="/noticias">
                                <p>
                                    Mais Informações
                                </p>
                            </Link>
                        </button>
                    </section>

                    <section>
                        <figure>
                            <img className="corda" src={corda} alt="" />
                        </figure>
                    </section>

                </div>

            </StyledNoticias>
        </>
    )
}