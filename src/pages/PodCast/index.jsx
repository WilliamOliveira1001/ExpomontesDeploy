import { motion } from "framer-motion"
import { HeaderComponents } from "../../components/Header"
import { StyledComponentsPodcast } from "./style"
import { StyledComponentsTituloMain } from "../../components/StyledTituloMain/style"
import { FooterComponents } from "../../components/footer"
import { StyledComponetPatro } from "../../components/PapelDeParede/style"
import { HeadllineCarroucel } from "../../components/BannerCarroucel"

import identidade from "../../assets/identidade.png"



export const PodCastPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}>

            <HeaderComponents />

            <HeadllineCarroucel />

            <StyledComponentsPodcast>

                <StyledComponetPatro>

                    <div className="container-data-espera">
                        <div className="bk-corda"></div>
                        <figure>
                            <img className="img-identidade" src={identidade} alt="" />
                        </figure>
                        <div className="container-text-inicial">
                            <figure>
                                <img src="https://i.ibb.co/5hZJwn7/podcast-icon.png" alt="" />
                            </figure>
                            <StyledComponentsTituloMain className="text-podCast">
                                <h2>AGRO RURAL CAST</h2>
                                <div></div>
                                <p>
                                    Escolha o audio que gostaria de ouvir em nossa galeria:
                                </p>
                            </StyledComponentsTituloMain>
                        </div>
                        <div className="div-episodios">
                            <iframe src="https://open.spotify.com/embed/episode/7K26bCwRpJmUYEMlw8Wilx?utm_source=generator" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                            <iframe src="https://open.spotify.com/embed/episode/5xCDn9RVb8LzMf2134S2Tn?utm_source=generator" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                            <iframe src="https://open.spotify.com/embed/episode/1D2gsj9x4CysAw46sS8O2L?utm_source=generator" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                            <iframe src="https://open.spotify.com/embed/episode/5Pm7vUYFHdPkq4E8X9x2dW?utm_source=generator" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                            <iframe src="https://open.spotify.com/embed/episode/15I0qcykpZO9PAINIJrn25?utm_source=generator" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                            <iframe src="https://open.spotify.com/embed/episode/1bvaCKyZX2LXbmRdSNrjB4?utm_source=generator" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                            <iframe src="https://open.spotify.com/embed/episode/1j9fG21HW2ii7SWa0kzlEO?utm_source=generator" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        </div>
                    </div>

                </StyledComponetPatro>



            </StyledComponentsPodcast>

            <FooterComponents />

        </motion.div>
    )
}