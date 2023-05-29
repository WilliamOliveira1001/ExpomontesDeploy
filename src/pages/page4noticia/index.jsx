import { HeaderComponents } from "../../components/Header"
import { HeadllineCarroucel } from "../../components/BannerCarroucel"
import { FooterComponents } from "../../components/footer";
import { motion } from "framer-motion";
import { HeaderPageNoticiasStyleComponet } from "../../components/HeaderPageNoticias/style";
import { StyleComponetPageNoticias } from "../../components/StyleNoticiasPage/style";


export const Page4Noticia = () => {
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
                                Notícias - Pautas da agropecuária
                            </p>
                        </div>
                        <h1>
                            Rural apresenta pautas da agropecuária ao Presidente da Assembleia de MG
                        </h1>
                        <p>09/01/2023 • 5 min. de leitura</p>
                    </div>
                </HeaderPageNoticiasStyleComponet>


                <StyleComponetPageNoticias>

                    <p>
                        A Sociedade Rural de Montes Claros apresentou ao Presidente da Assembleia, o Deputado Tadeu Martins Leite, as pautas elencadas como prioridades para que ele possa buscar junto aos órgãos competentes melhorias para o desenvolvimento da região. <br />

                        O Presidente da entidade classista, José Henrique de Carvalho Veloso, informou que o Governador Romeu Zema sancionou recentemente a Lei 24273, que  trata da redução ao consumo de água e estímulo a  sua reservação.<br /> <br />

                        “A nossa sugestão é de que sejam criados convênios com prefeituras para uma gestão compartilhada com o Estado e com o produtor rural. Assim definindo atribuições e criando mecanismos eficientes de gestão, toda a região pode ser beneficiada. Seria um projeto de grande impacto no aumento dos recursos hídricos regionais”, explicou José Henrique. <br /> <br />

                        Não menos importante, mas necessários, estão os licenciamentos ambientais e outorgas de água. O Governo criou o Investminas. Entretanto, no setor agropecuário, muitos investidores estão com projetos parados, e encontram uma série de dificuldades para obter os licenciamentos ambientais.<br /> <br />

                        “Um processo demorado e extremamente burocrático. Nossa sugestão é transformar esses licenciamentos em Atos Declaratórios a exemplo do CAR – Cadastro Ambiental Rural”.

                        Reivindicou e citou ainda a necessidade do asfalto da BR-365 ao Distrito de São João da Vereda. <br />

                        “São 33 quilômetros que vão beneficiar mais de 30 distritos e povoados, escolas rurais, escoamento da importante produção agropecuária regional (gado de corte, leite, madeira, hortigranjeiros, etc), além de dois importantes projetos:  o de abastecimento de água  de Montes Claros, executado pela Copasa,  com captação nos Rios Pacui e São Francisco, e adutora que margeia  toda a estrada e importantes projetos de energia fotovoltaica da Cemig, a Usina Nova Esperança, que fica à margem da estrada”, finalizou José Henrique. <br /> <br />

                        O que diz o Deputado <br /> <br />

                        Tadeu Martins Leite entende como pautas legítimas e muito importantes não só para o setor como para toda a região, o documento apresentado pela Sociedade Rural de Montes Claros. <br /> <br />
                        “Estamos atentos a essas demandas e já buscamos, seja por meio da legislação, da desburocratização ou de políticas públicas, viabilizar cada vez mais essa atividade que move o nosso estado. Vamos trabalhar aqui no legislativo e buscar o apoio dos setores responsáveis para encontrar caminhos para as questões que afligem o agronegócio, e atuar, sobretudo, para levar melhores condições de produção, divulgação e comercialização aos nossos produtores rurais”, esclareceu Tadeu Martins Leite, Presidente da Assembleia de Minas Gerais. <br /> <br />
                    
                        Presidente da Sociedade Rural, José Henrique de Carvalho Veloso entregando do Tadeu Martins Leite demandas do agro. Foto: Solon Queiroz
                    </p>

                    <figure >
                        <img src="https://i.ibb.co/5jX1LR2/Design-sem-nome-87.png" alt="" />
                    </figure>
                    <br /> 
                    <p>

                    </p>

                </StyleComponetPageNoticias>


            </main>


            <FooterComponents />

        </motion.div>
    )
}