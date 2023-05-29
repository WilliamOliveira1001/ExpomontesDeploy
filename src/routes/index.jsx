import { Route, Routes } from 'react-router-dom';
import { MainPages } from '../pages/MainPage';
import { NoticiasPages } from '../pages/Noticias';
import { ProgramacaoPage } from '../pages/Programacao';
import { GravacaoPage } from '../pages/Gravacao';
import { PodCastPage } from '../pages/PodCast';
import { GaleriaFotosPages } from '../pages/GaleriaFotos';
import { MapaPages } from '../pages/MapaEvento';
import { SobrePage } from '../pages/Sobre';
import { ExpositoresPage } from '../pages/Expositores';
import { AnimatePresence } from "framer-motion"
import { RainhasDaExpoComponents } from "../pages/Rainhas"
import { Page1Noticia } from "../pages/Page1info"
import { Page2Noticia } from "../pages/page2noticia"
import { Page3Noticia } from "../pages/pages3noticia"
import { Page4Noticia } from "../pages/page4noticia"

export const Router = () => {
    return (
        <AnimatePresence>
            <Routes>
                <Route exact path="/" element={<MainPages />} />
                <Route path="noticias" element={<NoticiasPages />} />
                <Route path="programacao" element={<ProgramacaoPage />} />
                <Route path="gravacao" element={<GravacaoPage />} />
                <Route path="podcast" element={<PodCastPage />} />
                <Route path="galeria" element={<GaleriaFotosPages />} />
                <Route path="mapa" element={<MapaPages />} />
                <Route path="sobre" element={<SobrePage />} />
                <Route path="expositores" element={<ExpositoresPage />} />
                <Route path="rainhas" element={<RainhasDaExpoComponents />} />
                <Route path="page1" element={<Page1Noticia />} />
                <Route path="page2" element={<Page2Noticia />} />
                <Route path="page3" element={<Page3Noticia />} />
                <Route path="page4" element={<Page4Noticia />} />
            </Routes>
        </AnimatePresence>
    )
}