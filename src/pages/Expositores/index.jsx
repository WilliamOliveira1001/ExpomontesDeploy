import { motion } from "framer-motion"

export const ExpositoresPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}>
            <h1>
                ExpositoresPage
            </h1>
        </motion.div>
    )
}