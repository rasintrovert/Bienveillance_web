import { motion } from 'framer-motion'

const transitionVariants = {
  initial: {
    opacity: 0,
    y: 24
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: 'easeOut'
    }
  },
  exit: {
    opacity: 0,
    y: -24,
    transition: {
      duration: 0.35,
      ease: 'easeIn'
    }
  }
}

const PageTransition = ({ children }) => {
  return (
    <motion.div
      className="page-transition"
      variants={transitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  )
}

export default PageTransition

