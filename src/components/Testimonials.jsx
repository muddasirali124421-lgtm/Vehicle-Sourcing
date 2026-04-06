import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { testimonials } from '../data/testimonials'
import SectionHeading from './ui/SectionHeading'

const Testimonials = () => {
  return (
    <section className="section-padding bg-heritage-charcoal relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-heritage-gold/5 blur-3xl" />

      <div className="container-custom relative z-10">
        <SectionHeading
          subtitle="Client Testimonials"
          title="Words From Our Collectors"
          description="Discover why discerning enthusiasts worldwide trust Heritage Horsepower with their automotive aspirations."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-heritage-dark p-6 md:p-8 rounded-2xl border border-heritage-gold/10 relative"
            >
              <Quote size={32} className="md:w-10 md:h-10 text-heritage-gold/20 mb-3 md:mb-4" />
              <p className="text-heritage-cream text-sm md:text-base leading-relaxed mb-4 md:mb-6">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-heritage-gold to-heritage-gold-dark flex items-center justify-center text-heritage-charcoal font-serif font-bold text-sm md:text-base">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3 md:ml-4">
                  <p className="text-heritage-cream font-medium text-sm md:text-base">{testimonial.name}</p>
                  <p className="text-heritage-gray-light text-xs md:text-sm">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
