import { motion } from "framer-motion";
import { HeaderComponents } from "../../components/Header";
import { FooterComponents } from "../../components/footer";
import { HeadllineCarroucel } from "../../components/BannerCarroucel";
import { ComponentVideoExpos } from "../../components/ComponentVideoExpo";
import { ComponentNoticia } from "../../components/Noticias";
import { ComponentTymeExpo } from "../../components/ComponentTyme";
import { OutrasMidiasComponets } from "../../components/OutrasMidias";
import { BannerPatrocinadoresComponents } from "../../components/BannerPatrocinadores"

export const MainPages = () => {
  
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

      <ComponentTymeExpo />

      <ComponentVideoExpos />

      <BannerPatrocinadoresComponents />

      <ComponentNoticia />

      <OutrasMidiasComponets />

      <FooterComponents />

    </motion.div>
  );
};
