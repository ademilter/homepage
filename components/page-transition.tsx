import { motion } from 'framer-motion'

const PageTransition = (props) => (
  <motion.div
    initial={{ y: 5, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.4 }}
    {...props}
  />
)

export default PageTransition
