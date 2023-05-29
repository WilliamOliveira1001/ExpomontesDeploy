import { StyleOutrasmidia } from "./style"
import identidade from "../../assets/identidade.png"
import { StyledComponentsTituloMain } from "../StyledTituloMain/style"

import { Link } from "react-router-dom"


export const OutrasMidiasComponets = () => {
    return (
        <StyleOutrasmidia>

            <div className="container-data-espera">
                <div className="bk-corda"></div>
                <figure>
                    <img className="img-identidade" src={identidade} alt="" />
                </figure>
                <section className="section-tyme">
                    
                    <StyledComponentsTituloMain className="titulo-texttura">
                        <h2 className="titulo-outra-comunicacao">
                            Confira outros meio de comunicação!
                        </h2>
                    </StyledComponentsTituloMain >

                    <div className="container-cards-comunicacao">
                        <figure>
                            <Link to="/programacao">
                                <img src="https://i.ibb.co/Jmg2Q2F/programacao.png" alt="" />
                            </Link>
                        </figure>
                        <figure>
                            <Link to="/podcast">
                                <img src="https://i.ibb.co/hd2RvZf/podcast.png" alt="" />
                            </Link>
                        </figure>
                        <figure>
                            <a href="https://youtube.com/playlist?list=PLe488SFArwEfDAwqTG4zUyh9cFKtLIf2a" target="black">
                                <img src="https://i.ibb.co/Ln3dcj3/gravado.png" alt="" />
                            </a>
                        </figure>
                    </div>
                </section>
            </div>

        </StyleOutrasmidia>
    )
}