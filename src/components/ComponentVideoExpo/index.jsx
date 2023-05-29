import { StyledComponentsVideo } from "./style"
import { StyledComponentsTituloMain } from "../StyledTituloMain/style"

export const ComponentVideoExpos = () => {
    return (
        <>
            <StyledComponentsVideo>

                <div className="container-agro-tech">

                    <section className="section-info-video">
                        <div className="div-text-desck">
                            <StyledComponentsTituloMain >
                                <h2 id="H2-text" >49ª Expomontes, semeando futuro, colhendo inovação!</h2>
                                <div></div>
                                <p id="H2-test">
                                    O maior evento do setor agropecuário do Norte de Minas, realizado pela Sociedade Rural de Montes Claros, é nacionalmente conhecido, e além da grande credibilidade que a entidade possui, é ainda uma viabilizadora de diversos projetos e programas, com marcas fortes e consolidadas no cenário.
                                </p>
                            </StyledComponentsTituloMain>

                            <div className="div-text-agro-tech">
                                <p>
                                    O AGRO é o que nos conecta, venha para onde a tradição encontra a inovação.
                                </p>
                                <button>
                                    <h6>Saber mais</h6>
                                </button>
                            </div>
                        </div>

                        <div className="div-iframe-video1">
                            <iframe
                                className="iframe-video1"
                                id="video-modi"
                                src="https://www.youtube.com/embed/FxB70NhYzzI"
                            ></iframe>
                        </div>
                    </section>

                </div>

            </StyledComponentsVideo>
        </>
    )
}