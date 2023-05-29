import { motion } from "framer-motion"

export const GaleriaFotosPages = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}>
            <h1>
                Galeria de fotos
            </h1>
        </motion.div>
    )
}