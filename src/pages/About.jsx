import { motion } from 'framer-motion'
import { Award, Users, Clock, Globe, Target, Heart } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We pursue perfection in every vehicle we source and every experience we create.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Our love for automotive history drives everything we do.'
    },
    {
      icon: Award,
      title: 'Integrity',
      description: 'Transparency and honesty form the foundation of our client relationships.'
    }
  ]

  const milestones = [
    { year: '2008', event: 'Heritage Horsepower founded in London' },
    { year: '2012', event: 'Expanded to European market with Monaco office' },
    { year: '2015', event: 'Launched Signature Experiences program' },
    { year: '2018', event: 'Opened New York showroom' },
    { year: '2021', event: 'Reached 500+ satisfied clients milestone' },
    { year: '2024', event: 'Launched digital concierge platform' }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-heritage-black/70 via-heritage-black/50 to-heritage-black" />
        
        <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-heritage-gold text-sm font-medium tracking-widest uppercase mb-4 block">
              Our Story
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-heritage-cream mb-6">
              About Heritage
              <br />
              <span className="text-gradient">Horsepower</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-heritage-charcoal">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-heritage-gray-light text-lg leading-relaxed mb-6">
                Heritage Horsepower was born from a simple yet profound belief: that exceptional 
                automobiles deserve exceptional care. Founded in 2008 by Alexander Harrington, 
                a former racing driver turned automotive historian, we have grown from a modest 
                London showroom to a global curator of the world's finest classic and luxury vehicles.
              </p>
              <p className="text-heritage-gray-light text-lg leading-relaxed mb-6">
                Our journey has been defined by an unwavering commitment to authenticity, provenance, 
                and the preservation of automotive heritage. We don't merely source cars—we uncover 
                stories, validate histories, and connect discerning collectors with machines that 
                represent the pinnacle of human engineering and artistic expression.
              </p>
              <p className="text-heritage-gray-light text-lg leading-relaxed">
                Today, Heritage Horsepower stands as a trusted partner to collectors across 40+ 
                countries, offering bespoke sourcing services, investment advisory, and curated 
                automotive experiences that celebrate the golden age of motoring.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: Clock, value: '15+', label: 'Years Experience' },
                { icon: Users, value: '500+', label: 'Happy Clients' },
                { icon: Globe, value: '40+', label: 'Countries Served' },
                { icon: Award, value: '100%', label: 'Satisfaction Rate' }
              ].map((stat, index) => (
                <div key={stat.label} className="bg-heritage-dark p-6 rounded-xl border border-heritage-gold/10 text-center">
                  <stat.icon className="w-8 h-8 text-heritage-gold mx-auto mb-3" />
                  <p className="text-3xl font-serif font-bold text-heritage-cream">{stat.value}</p>
                  <p className="text-heritage-gray-light text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-heritage-black">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Values"
            title="What We Stand For"
            description="The principles that guide every decision we make and every relationship we build."
          />

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-heritage-gold/20 to-heritage-gold/5 flex items-center justify-center mx-auto mb-6">
                  <value.icon size={40} className="text-heritage-gold" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-heritage-cream mb-4">
                  {value.title}
                </h3>
                <p className="text-heritage-gray-light leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-heritage-charcoal">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Journey"
            title="Milestones & Achievements"
          />

          <div className="max-w-4xl mx-auto mt-16">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center gap-8 mb-8 last:mb-0"
              >
                <div className="w-24 flex-shrink-0">
                  <span className="text-2xl font-serif font-bold text-heritage-gold">
                    {milestone.year}
                  </span>
                </div>
                <div className="w-4 h-4 rounded-full bg-heritage-gold flex-shrink-0" />
                <div className="flex-1 bg-heritage-dark p-6 rounded-xl border border-heritage-gold/10">
                  <p className="text-heritage-cream">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="section-padding bg-heritage-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-heritage-green/5 to-heritage-gold/5" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-heritage-cream mb-6">
              Join Our Team
            </h2>
            <p className="text-heritage-gray-light text-lg leading-relaxed mb-8">
              We're always looking for passionate automotive enthusiasts to join our growing team. 
              If you share our love for classic cars and commitment to excellence, we'd love to hear from you.
            </p>
            <Button variant="primary" size="lg">
              View Open Positions
            </Button>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default AboutPage
