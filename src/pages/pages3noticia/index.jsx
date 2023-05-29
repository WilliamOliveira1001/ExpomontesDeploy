import { HeaderComponents } from "../../components/Header"
import { HeadllineCarroucel } from "../../components/BannerCarroucel"
import { FooterComponents } from "../../components/footer";
import { motion } from "framer-motion";
import { HeaderPageNoticiasStyleComponet } from "../../components/HeaderPageNoticias/style";
import { StyleComponetPageNoticias } from "../../components/StyleNoticiasPage/style";
import imgExpresidente from "../../assets/noticiaimgsociedaderural.png"



export const Page3Noticia = () => {
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
                                Notícias - Rainhas da Expomontes
                            </p>
                        </div>
                        <h1>
                            Sociedade Rural
                        </h1>
                        <p>09/01/2023 • 3 min. de leitura</p>
                    </div>
                </HeaderPageNoticiasStyleComponet>


                <StyleComponetPageNoticias>

                    <p>
                        Fundada em 21 de junho de 1944, a Sociedade Rural de Montes Claros, caminha para completar 79 anos. Participou de episódios marcantes na história do Norte de Minas e se estabeleceu como uma das principais vozes dos produtores rurais. A Sociedade Rural é a promotora da Exposição Agropecuária de Montes Claros, que se constitui numa das maiores mostras agropecuárias do Estado.  <br /><br />
                        “A entidade sempre esteve à frente do seu tempo na defesa dos direitos e novas estratégias para o homem do campo. Além disso, a Rural demonstra que tradição com inovação são ingredientes que norteiam o sucesso da Expomontes e assim pretendemos para este ano”, finalizou José Henrique. <br /><br />
                        A Expomontes demonstra o vigor do sertanejo, a força e união para solucionar os problemas do campo. <br />
                        “E foi a união que nos trouxe até aqui. Sem medir esforços buscamos inúmeras possibilidades para ajudar o produtor rural. Diante disso, temos buscado implementar recursos midiáticos para levar mais informações ao homem do campo, com qualidade e com uma comunicação eficiente e assertiva. Estamos usando ferramentas digitais na Expomontes para que quem fica em casa também possa consumir o que produzimos nos dez dias de evento”, descreveu Silene Barreto, diretora de Difusão. <br /><br />
                        <h2>Expomontes 
                            </h2> <br />
                        A mostra, que figura entre as melhores e maiores feiras agropecuárias do País, começa dia 30 de junho e vai até 09 de julho deste ano. Movimenta R$ 400 milhões de reais, gera cerca de 4 mil empregos diretos e indiretos, promove 20 shows com artistas nacionais e regionais, tem 90 estandes para expositores, cerca de 1 mil animais inscritos para  comercialização e julgamento, 10 mil animais em 10 leilões, 80 barracas de produtos da agricultura familiar, 20 brinquedos no Ita Parque, lazer, entretenimento, produção de conhecimento, formação, visibilidade, visitas técnicas, Dia de campo, Inclusão social, Mini-fazenda, turismo e impulso da economia, atraindo a atenção de cerca de 400 mil pessoas. <br /><br />


                    </p>

                    <figure >
                        <img src={imgExpresidente} alt="" />
                    </figure>
                    <br />


                </StyleComponetPageNoticias>


            </main>


            <FooterComponents />

        </motion.div>
    )
}