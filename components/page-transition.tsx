import { motion, AnimatePresence } from "framer-motion";

const PageTransition = (props) => (
  <AnimatePresence exitBeforeEnter>
    <motion.div
      initial={{ y: 5, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -5, opacity: 0 }}
      transition={{ duration: 0.4 }}
      {...props}
    />
  </AnimatePresence>
);

export default PageTransition;
