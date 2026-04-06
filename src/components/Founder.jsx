import { motion } from 'framer-motion'
import SectionHeading from './ui/SectionHeading'

const Founder = () => {
  return (
    <section className="section-padding bg-heritage-black">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <SectionHeading
              subtitle="A Note From Our Founder"
              title="Passion Meets Purpose"
              align="left"
              className="mb-0"
            />
            
            <div className="space-y-6 mt-8">
              <p className="text-heritage-gray-light text-lg leading-relaxed">
                "From my earliest memories, automobiles have been more than machines—they are 
                rolling sculptures, mechanical poetry, and vessels of human achievement. When I 
                founded Heritage Horsepower in 2008, my vision was to create a sanctuary for 
                those who share this profound appreciation."
              </p>
              <p className="text-heritage-gray-light text-lg leading-relaxed">
                "Every vehicle we source, every experience we curate, is an opportunity to 
                celebrate the artistry and engineering that makes these automobiles extraordinary. 
                We don't merely facilitate transactions; we steward legacies and forge lasting 
                relationships with collectors who understand that true luxury lies in authenticity 
                and provenance."
              </p>
              <p className="text-heritage-gray-light text-lg leading-relaxed">
                "It is my privilege to welcome you to our world, where passion meets purpose 
                and every journey begins with excellence."
              </p>
            </div>

            <div className="mt-10 flex items-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-heritage-gold to-heritage-gold-dark flex items-center justify-center text-heritage-charcoal">
                <span className="font-serif font-bold text-2xl">AH</span>
              </div>
              <div className="ml-5">
                <p className="text-heritage-cream font-serif text-xl font-semibold">
                  Alexander Harrington
                </p>
                <p className="text-heritage-gold">Founder & CEO</p>
              </div>
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative">
              <div 
                className="aspect-[3/4] rounded-2xl bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80')`,
                }}
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-heritage-black/40 to-transparent" />
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-heritage-green/30 rounded-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-heritage-gold rounded-2xl -z-10" />
              
              {/* Experience Badge */}
              <div className="absolute bottom-8 left-8 bg-heritage-dark/90 backdrop-blur-md rounded-xl p-4 border border-heritage-gold/20">
                <p className="text-3xl font-serif font-bold text-heritage-gold">15+</p>
                <p className="text-heritage-gray-light text-sm">Years of Excellence</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Founder
