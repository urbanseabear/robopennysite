import { motion } from 'framer-motion';

function aniDoc({ Component, pageProps, router }) {
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
                delay: .4
              }
            },
          }}>
            <Component {...pageProps} />
        </motion.div>
    )
  }
  
  export default aniDoc;
  