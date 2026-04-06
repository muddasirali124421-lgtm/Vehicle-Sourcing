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
    sm: 'px-4 py-2.5 text-sm min-h-[44px] min-w-[44px]',
    md: 'px-5 md:px-6 py-3 text-sm md:text-base min-h-[44px] min-w-[44px]',
    lg: 'px-6 md:px-8 py-3.5 md:py-4 text-base md:text-lg min-h-[48px] min-w-[48px]',
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
