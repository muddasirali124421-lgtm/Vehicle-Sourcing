import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MapPin, Clock, Users, ArrowRight } from 'lucide-react'
import Card from './ui/Card'
import SectionHeading from './ui/SectionHeading'

const Experiences = () => {
  const experiences = [
    {
      title: 'Route 66 Muscle Run',
      location: 'Chicago to Los Angeles',
      duration: '7 Days',
      group: '12 Participants',
      image: '/images/maxresdefault.jpg',
      description: 'Drive the legendary Mother Road in period-correct American muscle cars, experiencing the golden age of American motoring.'
    },
    {
      title: 'Desert Muscle Rally',
      location: 'Phoenix to Las Vegas',
      duration: '3 Days',
      group: '8 Participants',
      image: '/images/maxresdefault (1).jpg',
      description: 'Push American muscle to the limit through dramatic desert highways and mountain passes with expert guidance.'
    },
    {
      title: 'Track Day Thunder',
      location: 'Daytona Speedway',
      duration: '2 Days',
      group: '16 Participants',
      image: '/images/car7.jpg',
      description: 'Experience the raw power of classic muscle cars on the legendary high banks of Daytona with professional instruction.'
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
