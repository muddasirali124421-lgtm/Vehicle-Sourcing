import { motion } from 'framer-motion'
import SectionHeading from './ui/SectionHeading'

const Founder = () => {
  return (
    <section className="section-padding bg-heritage-black">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
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
            
            <div className="space-y-4 md:space-y-6 mt-6 md:mt-8">
              <p className="text-heritage-gray-light text-base md:text-lg leading-relaxed">
                "From my earliest memories, automobiles have been more than machines—they are 
                rolling sculptures, mechanical poetry, and vessels of human achievement. When I 
                founded Heritage Horsepower in 2008, my vision was to create a sanctuary for 
                those who share this profound appreciation."
              </p>
              <p className="text-heritage-gray-light text-base md:text-lg leading-relaxed">
                "Every vehicle we source, every experience we curate, is an opportunity to 
                celebrate the artistry and engineering that makes these automobiles extraordinary. 
                We don't merely facilitate transactions; we steward legacies and forge lasting 
                relationships with collectors who understand that true luxury lies in authenticity 
                and provenance."
              </p>
              <p className="text-heritage-gray-light text-base md:text-lg leading-relaxed">
                "It is my privilege to welcome you to our world, where passion meets purpose 
                and every journey begins with excellence."
              </p>
            </div>

            <div className="mt-8 md:mt-10 flex items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-heritage-gold to-heritage-gold-dark flex items-center justify-center text-heritage-charcoal">
                <span className="font-serif font-bold text-xl md:text-2xl">AH</span>
              </div>
              <div className="ml-4 md:ml-5">
                <p className="text-heritage-cream font-serif text-lg md:text-xl font-semibold">
                  Alexander Harrington
                </p>
                <p className="text-heritage-gold text-sm md:text-base">Founder & CEO</p>
              </div>
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative mt-8 lg:mt-0"
          >
            <div className="relative max-w-md lg:max-w-none mx-auto">
              <div 
                className="aspect-[4/3] rounded-2xl bg-cover bg-center"
                style={{
                  backgroundImage: `url('/src/assets/car1.jpg')`,
                }}
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-heritage-black/40 to-transparent" />
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-32 h-32 md:w-48 md:h-48 bg-heritage-green/30 rounded-2xl -z-10" />
              <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-24 h-24 md:w-32 md:h-32 border-2 border-heritage-gold rounded-2xl -z-10" />
              
              {/* Experience Badge */}
              <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 bg-heritage-dark/90 backdrop-blur-md rounded-xl p-3 md:p-4 border border-heritage-gold/20">
                <p className="text-2xl md:text-3xl font-serif font-bold text-heritage-gold">15+</p>
                <p className="text-heritage-gray-light text-xs md:text-sm">Years of Excellence</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Founder
