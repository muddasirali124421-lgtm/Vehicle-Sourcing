import { motion } from 'framer-motion'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300'
  
  const variants = {
    primary: 'bg-heritage-gold text-heritage-charcoal hover:bg-heritage-gold-light hover:shadow-lg hover:shadow-heritage-gold/30',
    secondary: 'bg-transparent border-2 border-heritage-gold text-heritage-gold hover:bg-heritage-gold hover:text-heritage-charcoal',
    outline: 'bg-transparent border border-heritage-gray-light/30 text-heritage-cream hover:border-heritage-gold hover:text-heritage-gold',
    ghost: 'bg-transparent text-heritage-cream hover:text-heritage-gold',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button
