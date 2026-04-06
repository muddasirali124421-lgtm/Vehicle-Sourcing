import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MapPin, Clock, Users, ArrowRight } from 'lucide-react'
import Card from './ui/Card'
import SectionHeading from './ui/SectionHeading'

const Experiences = () => {
  const experiences = [
    {
      title: 'Mille Miglia Revival',
      location: 'Brescia to Rome',
      duration: '4 Days',
      group: '12 Participants',
      image: 'https://images.unsplash.com/photo-1511994714008-b6d68a8b32a2?auto=format&fit=crop&q=80',
      description: 'Join us for the world\'s most beautiful race, driving through Tuscany and Umbria in period-correct classic automobiles.'
    },
    {
      title: 'Scottish Highlands Rally',
      location: 'Highlands, Scotland',
      duration: '3 Days',
      group: '8 Participants',
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80',
      description: 'Experience dramatic landscapes, winding mountain roads, and exclusive castle stays in the UK\'s most scenic driving territory.'
    },
    {
      title: 'Monaco Grand Prix Experience',
      location: 'Monte Carlo',
      duration: '5 Days',
      group: '20 Participants',
      image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80',
      description: 'The ultimate Formula 1 weekend featuring yacht hospitality, pit lane access, and a parade lap on the legendary circuit.'
    }
  ]

  return (
    <section className="section-padding bg-heritage-black">
      <div className="container-custom">
        <SectionHeading
          subtitle="Signature Experiences"
          title="Curated Journeys"
          description="Immerse yourself in unforgettable automotive adventures designed for the discerning enthusiast."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-16">
          {experiences.map((exp, index) => (
            <Card key={exp.title} className="group">
              <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${exp.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-heritage-dark via-heritage-dark/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center text-heritage-gold text-sm space-x-4">
                    <span className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center">
                      <Users size={14} className="mr-1" />
                      {exp.group}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex items-center text-heritage-gray-light text-xs sm:text-sm mb-2 sm:mb-3">
                  <MapPin size={12} className="sm:w-3.5 sm:h-3.5 mr-1 text-heritage-gold" />
                  {exp.location}
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-semibold text-heritage-cream mb-2 sm:mb-3 group-hover:text-heritage-gold transition-colors">
                  {exp.title}
                </h3>
                <p className="text-heritage-gray-light text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                  {exp.description}
                </p>
                <Link 
                  to="/automotive-experiences"
                  className="inline-flex items-center text-heritage-gold text-sm font-medium hover:text-heritage-gold-light transition-colors"
                >
                  Discover More
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experiences
