import { motion } from 'framer-motion'

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  ...props 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={hover ? { y: -8, boxShadow: '0 20px 40px rgba(201, 169, 97, 0.15)' } : {}}
      className={`bg-heritage-dark rounded-2xl overflow-hidden border border-heritage-gold/10 ${
        hover ? 'transition-all duration-300 cursor-pointer' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Card
