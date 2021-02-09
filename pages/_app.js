import '../styles/globals.scss';
import { motion } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
  return (
    <motion.div key={router.route} initial="hidden" animate="visible" variants={{
        hidden: {
          scale: .8,
          opacity: 0
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: .2
          }
        },
      }}>
        <Component {...pageProps} />
    </motion.div>
)
}

export default MyApp
