import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Search, Calendar, ArrowRight } from 'lucide-react'
import Card from './ui/Card'
import Button from './ui/Button'
import SectionHeading from './ui/SectionHeading'

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Vehicle Sourcing',
      description: 'Access our global network to find rare classics, limited editions, and investment-grade vehicles matched to your exact specifications.',
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80',
      link: '/vehicle-sourcing'
    },
    {
      icon: Calendar,
      title: 'Automotive Experiences',
      description: 'From exclusive track days to curated driving tours through Europe\'s most scenic routes, experience motoring at its finest.',
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80',
      link: '/automotive-experiences'
    }
  ]

  return (
    <section className="section-padding bg-heritage-black">
      <div className="container-custom">
        <SectionHeading
          subtitle="Our Services"
          title="Bespoke Automotive"
          description="Whether you're seeking the perfect addition to your collection or an unforgettable driving experience, we deliver excellence at every turn."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-10 md:mt-16">
          {services.map((service, index) => (
            <Card key={service.title} className="group">
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${service.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-heritage-dark via-heritage-dark/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="w-14 h-14 rounded-xl bg-heritage-gold/20 backdrop-blur-md flex items-center justify-center">
                    <service.icon size={28} className="text-heritage-gold" />
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-heritage-cream mb-3 md:mb-4">
                  {service.title}
                </h3>
                <p className="text-heritage-gray-light text-sm md:text-base leading-relaxed mb-4 md:mb-6">
                  {service.description}
                </p>
                <Link to={service.link}>
                  <Button variant="ghost" className="!p-0 text-heritage-gold hover:text-heritage-gold-light">
                    Learn More
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
