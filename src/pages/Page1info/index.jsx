import { HeaderComponents } from "../../components/Header"
import { HeadllineCarroucel } from "../../components/BannerCarroucel"
import { FooterComponents } from "../../components/footer";
import { motion } from "framer-motion";
import { HeaderPageNoticiasStyleComponet } from "../../components/HeaderPageNoticias/style";
import { StyleComponetPageNoticias } from "../../components/StyleNoticiasPage/style";



export const Page1Noticia = () => {
    return (
        <motion.div
            className="container-geral"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
            <HeaderComponents  />

            <HeadllineCarroucel />

            <main id="topo">

                <HeaderPageNoticiasStyleComponet>

                    <div class="div-informacao-post">

                        <div class="div-caminho-blog">
                            <p>
                                Notícias - Estreia da Expomontes e Rainhas da Expomontes 2023
                            </p>
                        </div>

                        <h1>
                            49ª Expomontes - Lançamento Oficial e apresentação das rainhas
                        </h1>

                        <p>09/01/2023 • 2 min. de leitura</p>

                    </div>

                </HeaderPageNoticiasStyleComponet>


                <StyleComponetPageNoticias>

                    <p>Com novo slogan, SEMEANDO INOVAÇÃO, COLHENDO FUTURO – e fortalecendo que o AGRO É O QUE NOS CONECTA, a SOCIEDADE RURAL DE MONTES CLAROS faz o lançamento oficial da 49ª Expomontes, nesta segunda-feira (08). </p> <br /><br />
                    <p>Essa é a primeira Exposição da atual gestão. “Estamos em franco planejamento das atividades, visando fazer um evento que demonstre a o crescimento robusto e acelerado da agricultura e da pecuária regional, que tem sido pontos de sustentação para o progresso do Norte de Minas”, destacou José Henrique de Carvalho Veloso, Presidente da Sociedade Rural. </p> <br /><br />
                    <p>A previsão é de excelentes negócios, fomento da economia, valorização da classe produtora, explica o Diretor Financeiro Flávio Gonçalves. 99% dos estandes foram comercializados.   <br /> <br /></p>
                    <p>“E Expomontes se reinventa anualmente, além de reunir quem se destaca na agropecuária, abre espaço a todos os segmentos de negócios. É palco para quem está crescendo e investindo, mostra como a região se desenvolve”, discorreu Flávio. </p> <br />
                    <p>A agenda de leilões, conforme explicou o diretor da área, Osvaldo Miranda Junior, será anunciada até o dia 10 deste mês. </p> <br />

                    <figure >
                        <img src="https://i.ibb.co/CmhN5td/noticia-Presidente.png" alt="" />
                    </figure>
                    <br />


                </StyleComponetPageNoticias>


            </main>


            <FooterComponents />

        </motion.div>
    )
}