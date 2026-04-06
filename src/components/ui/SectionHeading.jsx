import { motion } from 'framer-motion'

const SectionHeading = ({ 
  subtitle, 
  title, 
  description,
  align = 'center',
  className = ''
}) => {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`${alignClasses[align]} ${className}`}
    >
      {subtitle && (
        <span className="text-heritage-gold text-sm font-medium tracking-widest uppercase mb-3 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-heritage-cream mb-4 md:mb-6">
        {title}
      </h2>
      {description && (
        <p className="text-heritage-gray-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
          {description}
        </p>
      )}
    </motion.div>
  )
}

export default SectionHeading
