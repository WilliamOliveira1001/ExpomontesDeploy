import identidade from "../../assets/identidade.png"
import { StyledComponetPatro } from "./style.js"
import { BannerPatrocinadoresComponents } from "../BannerPatrocinadores"


export const ComponentPatrocinador = () => {
    return (
        <>
            <StyledComponetPatro>

                <div className="container-data-espera">
                    <div className="bk-corda"></div>
                    <figure>
                        <img className="img-identidade" src={identidade} alt="" />
                    </figure>
                    <section className="section-tyme">


                        <BannerPatrocinadoresComponents />

                    </section>
                </div>

            </StyledComponetPatro>
        </>
    )
}