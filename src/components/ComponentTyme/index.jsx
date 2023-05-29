import identidade from "../../assets/identidade.png"
import { useCountdonw } from "../../hooks/userCountDonw";
import { StyledComponetTymeExpo } from "./style";

export const ComponentTymeExpo = () => {

    const [day, hours, minute, second] = useCountdonw("Jun 30, 2023 00:00");

    return (
        <>
            <StyledComponetTymeExpo>

                <div className="container-data-espera">
                    <div className="bk-corda"></div>
                    <section className="section-tyme">
                        <div className="div-data-espera-text">
                            <h2>Preparados?</h2>
                            <p>
                            A maior feira do agronegócio do Norte de Minas está chegando.
                            </p>
                            <p id="p-text-date">
                                O <strong>AGRO</strong> é o que nos conecta. 
                            </p>
                        </div>
                        <div className="div-auxliar-style-time">
                            <div className="div-data-espera-time">
                                <div className="div-time">
                                    <h3>{day}</h3>
                                    <h4>Dias</h4>
                                </div>
                                <p>:</p>
                                <div className="div-time">
                                    <h3>{hours}</h3>
                                    <h4>Horas</h4>
                                </div>
                                <p>:</p>
                                <div className="div-time">
                                    <h3>{minute}</h3>
                                    <h4>Minutos</h4>
                                </div>
                                <p>:</p>
                                <div className="div-time">
                                    <h3>{second}</h3>
                                    <h4>Segundos</h4>
                                </div>
                            </div>

                        </div>
                    </section>

                    <figure>
                        <img className="img-identidade" src={identidade} alt="" />
                    </figure>
                </div>
            </StyledComponetTymeExpo>
        </>
    )
}