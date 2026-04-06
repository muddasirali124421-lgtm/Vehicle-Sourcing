import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'
import Button from './ui/Button'

const CTA = () => {
  return (
    <section className="section-padding bg-heritage-charcoal relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-heritage-green/10 via-transparent to-heritage-gold/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-heritage-gold/10 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="text-heritage-gold text-sm font-medium tracking-widest uppercase mb-4 block">
            Begin Your Journey
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-heritage-cream mb-6">
            Ready to Find Your
            <br />
            <span className="text-gradient">Perfect Machine?</span>
          </h2>
          <p className="text-heritage-gray-light text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Whether you're seeking a specific model or simply exploring possibilities, 
            our concierge team is ready to guide you toward automotive excellence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button variant="primary" size="lg">
                Schedule a Consultation
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </Link>
            <a href="tel:+442071234567">
              <Button variant="secondary" size="lg">
                <Phone size={18} className="mr-2" />
                Call Us Now
              </Button>
            </a>
          </div>

          <p className="mt-8 text-heritage-gray-light text-sm">
            Available Monday through Saturday, 9:00 AM - 6:00 PM GMT
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
