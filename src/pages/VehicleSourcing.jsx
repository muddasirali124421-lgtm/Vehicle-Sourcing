import { motion } from 'framer-motion'
import { Search, Check, Shield, FileText, Truck, Wrench } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'

const VehicleSourcing = () => {
  const process = [
    {
      icon: Search,
      title: 'Discovery',
      description: 'We begin with an in-depth consultation to understand your vision, requirements, and investment goals.'
    },
    {
      icon: Shield,
      title: 'Verification',
      description: 'Every vehicle undergoes rigorous provenance research and mechanical inspection by certified specialists.'
    },
    {
      icon: FileText,
      title: 'Documentation',
      description: 'Comprehensive history reports, authentication certificates, and market analysis are provided.'
    },
    {
      icon: Truck,
      title: 'Delivery',
      description: 'White-glove transport with full insurance coverage to your specified location worldwide.'
    }
  ]

  const categories = [
    {
      title: 'Pre-War Classics',
      description: 'Brass-era automobiles and vintage masterpieces from the golden age of motoring.',
      image: 'https://images.unsplash.com/photo-1552519507-da3b1421fb31?auto=format&fit=crop&q=80'
    },
    {
      title: 'Post-War Icons',
      description: 'The legendary machines that defined automotive culture from the 1940s to 1970s.',
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80'
    },
    {
      title: 'Modern Classics',
      description: 'Limited editions and investment-grade vehicles from the 1980s to present day.',
      image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80'
    },
    {
      title: 'Competition Cars',
      description: 'Race-proven machines with documented competition history and proven performance.',
      image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80'
    }
  ]

  const guarantees = [
    '100% Authenticity Guarantee',
    'Full Provenance Documentation',
    'Pre-purchase Inspection Reports',
    'Price Transparency',
    'Global Secure Transport',
    'Post-sale Support'
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
            backgroundImage: `url('https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80')`,
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
              Bespoke Sourcing
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-heritage-cream mb-6">
              Vehicle Sourcing
            </h1>
            <p className="text-xl md:text-2xl text-heritage-gray-light max-w-2xl">
              Access our global network to find rare classics, limited editions, 
              and investment-grade vehicles matched to your exact specifications.
            </p>
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
              <SectionHeading
                subtitle="Our Approach"
                title="The Art of Discovery"
                align="left"
                className="mb-0"
              />
              <p className="text-heritage-gray-light text-lg leading-relaxed mt-6">
                Finding the perfect automobile requires more than a search engine—it demands 
                deep industry knowledge, established relationships with collectors and dealers 
                worldwide, and an instinct for authenticity that only comes from decades of 
                experience.
              </p>
              <p className="text-heritage-gray-light text-lg leading-relaxed mt-4">
                Our sourcing specialists combine traditional automotive expertise with modern 
                market intelligence to locate vehicles that meet your precise criteria, whether 
                you're seeking a specific model, era, or provenance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div 
                className="aspect-video rounded-2xl bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80')`,
                }}
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-heritage-gold/20 rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-heritage-black">
        <div className="container-custom">
          <SectionHeading
            subtitle="How It Works"
            title="Our Sourcing Process"
            description="A refined approach to finding your perfect automobile, from initial consultation to final delivery."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-heritage-gold to-heritage-gold-dark flex items-center justify-center mb-6">
                  <step.icon size={28} className="text-heritage-charcoal" />
                </div>
                <span className="absolute top-0 right-0 text-6xl font-serif font-bold text-heritage-gold/10">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-xl font-serif font-semibold text-heritage-cream mb-3">
                  {step.title}
                </h3>
                <p className="text-heritage-gray-light leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-heritage-charcoal">
        <div className="container-custom">
          <SectionHeading
            subtitle="What We Source"
            title="Categories of Excellence"
          />

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {categories.map((category, index) => (
              <Card key={category.title} className="group">
                <div className="relative h-64 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${category.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-heritage-dark via-heritage-dark/50 to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif font-semibold text-heritage-cream mb-3">
                    {category.title}
                  </h3>
                  <p className="text-heritage-gray-light leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="section-padding bg-heritage-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-heritage-green/5 to-heritage-gold/5" />
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-heritage-cream mb-6">
                Our <span className="text-gradient">Commitment</span> to You
              </h2>
              <p className="text-heritage-gray-light text-lg leading-relaxed mb-8">
                Every vehicle sourced through Heritage Horsepower comes with our comprehensive 
                guarantee package, ensuring complete confidence in your acquisition.
              </p>
              <Link to="/contact">
                <Button variant="primary" size="lg">
                  Start Your Search
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {guarantees.map((guarantee, index) => (
                <div 
                  key={guarantee}
                  className="flex items-center space-x-3 bg-heritage-dark p-4 rounded-xl"
                >
                  <Check size={20} className="text-heritage-gold flex-shrink-0" />
                  <span className="text-heritage-cream text-sm">{guarantee}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-heritage-charcoal">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Wrench size={48} className="text-heritage-gold mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-heritage-cream mb-6">
              Ready to Find Your Perfect Vehicle?
            </h2>
            <p className="text-heritage-gray-light text-xl leading-relaxed mb-8">
              Schedule a complimentary consultation with our sourcing specialists 
              to discuss your automotive aspirations.
            </p>
            <Link to="/contact">
              <Button variant="primary" size="lg">
                Request Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default VehicleSourcing
