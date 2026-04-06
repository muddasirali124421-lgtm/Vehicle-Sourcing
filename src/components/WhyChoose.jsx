import { motion } from 'framer-motion'
import { Check, Clock, Shield, Heart, Globe, Award } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'

const WhyChoose = () => {
  const reasons = [
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Access to exclusive vehicles and private collections across 40+ countries through our established industry relationships.'
    },
    {
      icon: Shield,
      title: 'Verified Authenticity',
      description: 'Every vehicle undergoes rigorous provenance verification and mechanical inspection by certified specialists.'
    },
    {
      icon: Clock,
      title: 'White-Glove Service',
      description: 'From initial consultation to delivery and beyond, experience seamless service tailored to your lifestyle.'
    },
    {
      icon: Award,
      title: 'Investment Advisory',
      description: 'Expert market analysis and portfolio guidance to help you make informed acquisition decisions.'
    },
    {
      icon: Heart,
      title: 'Passion & Expertise',
      description: 'Our team brings together automotive historians, former racing drivers, and master mechanics.'
    },
    {
      icon: Check,
      title: 'Lifetime Support',
      description: 'Ongoing maintenance guidance, event invitations, and re-sale services for your entire collection.'
    }
  ]

  return (
    <section className="section-padding bg-heritage-charcoal relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #c9a961 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-custom relative z-10">
        <SectionHeading
          subtitle="Why Choose Us"
          title="The Heritage Difference"
          description="We combine old-world craftsmanship with modern expertise to deliver an unparalleled automotive experience."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-heritage-dark p-8 rounded-2xl border border-heritage-gold/10 hover:border-heritage-gold/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-heritage-gold/20 to-heritage-gold/5 flex items-center justify-center mb-6">
                <reason.icon size={28} className="text-heritage-gold" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-heritage-cream mb-3">
                {reason.title}
              </h3>
              <p className="text-heritage-gray-light leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
