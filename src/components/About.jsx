import { motion } from 'framer-motion'
import { Award, Users, Globe, Shield } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Globe, value: '40+', label: 'Countries Served' },
    { icon: Shield, value: '100%', label: 'Authenticity Guarantee' },
  ]

  return (
    <section className="section-padding bg-heritage-charcoal relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-heritage-green/5 to-transparent" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <div 
                className="aspect-[4/5] rounded-2xl bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80')`,
                }}
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-heritage-green rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-heritage-gold rounded-2xl -z-10" />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-heritage-gold text-sm font-medium tracking-widest uppercase mb-4 block">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-heritage-cream mb-6">
              A Legacy of
              <br />
              <span className="text-gradient">Automotive Excellence</span>
            </h2>
            <p className="text-heritage-gray-light text-lg leading-relaxed mb-6">
              Founded in 2008, Heritage Horsepower has established itself as the premier 
              curator of exceptional classic and luxury automobiles. Our team of passionate 
              experts combines decades of experience in automotive history, engineering, 
              and the global collector market.
            </p>
            <p className="text-heritage-gray-light text-lg leading-relaxed mb-8">
              We don't just source cars—we discover automotive treasures that tell stories, 
              preserve history, and represent the pinnacle of engineering artistry. Every 
              vehicle in our collection meets the most stringent standards of authenticity, 
              provenance, and condition.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-heritage-gold/10 flex items-center justify-center">
                    <stat.icon size={24} className="text-heritage-gold" />
                  </div>
                  <div>
                    <p className="text-2xl font-serif font-bold text-heritage-cream">{stat.value}</p>
                    <p className="text-sm text-heritage-gray-light">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
