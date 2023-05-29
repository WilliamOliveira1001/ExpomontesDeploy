import { HeaderComponents } from "../../components/Header"
import { HeadllineCarroucel } from "../../components/BannerCarroucel"
import { FooterComponents } from "../../components/footer";
import { motion } from "framer-motion";
import { HeaderPageNoticiasStyleComponet } from "../../components/HeaderPageNoticias/style";
import { StyleComponetPageNoticias } from "../../components/StyleNoticiasPage/style";


export const Page2Noticia = () => {
    return (
        <motion.div
            className="container-geral"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
            <HeaderComponents />

            <HeadllineCarroucel />

            <main>

                <HeaderPageNoticiasStyleComponet>
                    <div class="div-informacao-post">
                        <div class="div-caminho-blog">
                            <p>
                                Notícias- Rainhas da Expomontes
                            </p>
                        </div>
                        <h1>
                            Rainhas da Expomontes
                        </h1>
                        <p>09/01/2023 • 3 min. de leitura</p>
                    </div>
                </HeaderPageNoticiasStyleComponet>


                <StyleComponetPageNoticias>

                    <p>Na mesma solenidade, as Rainhas da Sociedade Rural de Montes Claros, Sindicato dos Produtores Rurais, Sicoob Credinor e Núcleo Mangalarga Marchador do Norte de Minas serão apresentadas à comunidade.  <br /> <br />
                        Para o Diretor Social, Bernardo Pinheiro, a grandeza da Expomontes traz com ela o contínuo encantamento das Rainhas. “As Rainhas representam a família ruralista. As meninas são indicadas pelas entidades rurais e são, obrigatoriamente, filhas ou netas de produtores rurais e os pais delas devem ser associados às entidades que as indicaram. A presença delas não perderam a função no tempo, só reforçam as nossas tradições”, falou Bernardo. <br /> <br />
                        Line-up Expomontes  <br /><br />
                        A Cia Promoções apresenta as atrações já confirmadas para a Expomontes 2023. <br /> <br />
                        •         Wesley Safadão  <br />
                        •         Pedro Sampaio <br />
                        •         Gusttavo Lima <br />
                        •         Nattan <br />
                        •         Mari Fernandez <br />
                        •         Menos é Mais <br />
                        •         Jorge & Mateus <br />
                        •         Pixote <br />
                        •         Além dos shows gospel, católico, infantil e Noite Universitária <br /> <br /><br /><br />

                    </p>

                    <figure >
                        <img src="https://i.ibb.co/TwM8b7g/shownoticias.png" alt="" />
                    </figure>
                    <br />


                </StyleComponetPageNoticias>


            </main>


            <FooterComponents />

        </motion.div>
    )
}