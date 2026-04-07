import { motion } from 'framer-motion'
import { Calendar, MapPin, Users, Star, ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'

const AutomotiveExperiences = () => {
  const experiences = [
    {
      title: 'Route 66 Muscle Run',
      location: 'Chicago to LA',
      duration: '7 Days',
      group: '12 Participants',
      price: 'From $8,500',
      image: '/src/assets/maxresdefault.jpg',
      description: 'Drive the legendary Mother Road in period-correct American muscle cars, from Illinois to California.',
      highlights: ['1960s muscle car provided', 'Historic motels stay', 'Diner experiences', 'Grand Canyon stop']
    },
    {
      title: 'Desert Muscle Rally',
      location: 'Arizona / Nevada',
      duration: '3 Days',
      group: '8 Participants',
      price: 'From $4,500',
      image: '/src/assets/maxresdefault (1).jpg',
      description: 'Push American muscle to the limit through dramatic desert highways and mountain passes.',
      highlights: ['High-speed desert runs', 'Las Vegas finale', 'Professional coaching', 'Garage tours']
    },
    {
      title: 'Daytona Track Experience',
      location: 'Daytona, Florida',
      duration: '2 Days',
      group: '16 Participants',
      price: 'From $3,500',
      image: '/src/assets/car7.jpg',
      description: 'Experience the raw power of classic muscle cars on the legendary high banks of Daytona.',
      highlights: ['Track time included', 'Professional instruction', 'Pit lane access', 'Victory lane photos']
    },
    {
      title: 'Pacific Coast Highway Cruise',
      location: 'California',
      duration: '4 Days',
      group: '10 Participants',
      price: 'From $6,000',
      image: '/src/assets/5d55d871e501f2ae0df45d876ad7e031.jpg',
      description: 'Cruise the iconic PCH in classic American convertibles from San Francisco to Los Angeles.',
      highlights: ['Convertible muscle cars', 'Big Sur coastline', 'Monterey stop', 'Santa Monica finale']
    },
    {
      title: 'Detroit Muscle Heritage Tour',
      location: 'Michigan',
      duration: '3 Days',
      group: '12 Participants',
      price: 'From $3,000',
      image: '/src/assets/edff9d914a098e64f1c046c04d5464d4.jpg',
      description: 'Explore the birthplace of American muscle with factory tours and Woodward Dream Cruise.',
      highlights: ['Factory tours', 'Muscle car museum', 'Woodward Avenue', 'Private collection visits']
    },
    {
      title: 'Smoky Mountains Run',
      location: 'Tennessee / NC',
      duration: '4 Days',
      group: '8 Participants',
      price: 'From $5,500',
      image: '/src/assets/1ba9c3297081b75f99e6cb4a6df883d6.jpg',
      description: 'Tackle the Tail of the Dragon and scenic Blue Ridge Parkway in powerful V8 classics.',
      highlights: ['Tail of the Dragon', 'Mountain cabins', 'BBQ experiences', 'Scenic overlooks']
    }
  ]

  const features = [
    'All vehicles provided and insured',
    'Professional support vehicles',
    'Expert guides and instructors',
    'Premium accommodation',
    'Gourmet dining experiences',
    'Concierge support 24/7',
    'Professional photography',
    'Commemorative memorabilia'
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
            backgroundImage: `url('/src/assets/maxresdefault.jpg')`,
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
              Curated Adventures
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-heritage-cream mb-4 md:mb-6">
              Muscle Car
              <br />
              <span className="text-gradient">Experiences</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-heritage-gray-light max-w-2xl">
              From Route 66 road trips to track days at Daytona—experience 
              American muscle motoring at its finest.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-heritage-charcoal">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeading
              subtitle="The Heritage Difference"
              title="Beyond Ordinary Driving"
              description="Our signature experiences combine world-class automobiles with extraordinary destinations, creating memories that last a lifetime."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-16">
            {[
              { icon: Star, title: 'Premium Vehicles', desc: 'Drive meticulously maintained classics and supercars' },
              { icon: MapPin, title: 'Iconic Routes', desc: 'Curated roads through breathtaking landscapes' },
              { icon: Users, title: 'Small Groups', desc: 'Intimate experiences with like-minded enthusiasts' }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 sm:p-6"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-heritage-gold/10 flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <item.icon size={28} className="md:w-8 md:h-8 text-heritage-gold" />
                </div>
                <h3 className="text-lg md:text-xl font-serif font-semibold text-heritage-cream mb-2">
                  {item.title}
                </h3>
                <p className="text-heritage-gray-light text-sm md:text-base">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="section-padding bg-heritage-black">
        <div className="container-custom">
          <SectionHeading
            subtitle="Upcoming Experiences"
            title="2024/2025 Calendar"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-16">
            {experiences.map((exp, index) => (
              <Card key={exp.title} className="group flex flex-col">
                <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${exp.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-heritage-dark via-heritage-dark/20 to-transparent" />
                  <div className="absolute top-3 right-3 md:top-4 md:right-4">
                    <span className="bg-heritage-gold text-heritage-charcoal px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium">
                      {exp.price}
                    </span>
                  </div>
                </div>
                <div className="p-4 sm:p-6 flex-1 flex flex-col">
                  <div className="flex items-center text-heritage-gray-light text-xs md:text-sm mb-2 md:mb-3 space-x-3 md:space-x-4">
                    <span className="flex items-center">
                      <MapPin size={12} className="mr-1 text-heritage-gold" />
                      {exp.location}
                    </span>
                    <span className="flex items-center">
                      <Calendar size={12} className="mr-1 text-heritage-gold" />
                      {exp.duration}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-serif font-semibold text-heritage-cream mb-2 md:mb-3 group-hover:text-heritage-gold transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-heritage-gray-light text-xs md:text-sm leading-relaxed mb-3 md:mb-4 flex-1">
                    {exp.description}
                  </p>
                  <ul className="space-y-1.5 md:space-y-2 mb-4 md:mb-6">
                    {exp.highlights.slice(0, 2).map((highlight) => (
                      <li key={highlight} className="flex items-center text-xs md:text-sm text-heritage-gray-light">
                        <Check size={12} className="mr-2 text-heritage-gold" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button variant="outline" className="w-full text-sm">
                      Inquire Now
                      <ArrowRight size={14} className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-heritage-charcoal">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div 
                className="aspect-square rounded-2xl bg-cover bg-center max-w-md lg:max-w-none mx-auto"
                style={{
                  backgroundImage: `url('/src/assets/068d4bc05d7a99c1cbd0eae05c6583a8.jpg')`,
                }}
              />
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-32 h-32 md:w-48 md:h-48 bg-heritage-green/30 rounded-2xl -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-heritage-cream mb-4 md:mb-6">
                Every Detail <span className="text-gradient">Considered</span>
              </h2>
              <p className="text-heritage-gray-light text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                From the moment you join us to your final farewell, every aspect of your 
                experience is meticulously planned and executed to ensure unforgettable moments.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center space-x-3">
                    <Check size={16} className="md:w-[18px] md:h-[18px] text-heritage-gold flex-shrink-0" />
                    <span className="text-heritage-cream text-sm md:text-base">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Private Events CTA */}
      <section className="section-padding bg-heritage-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-heritage-green/5 to-heritage-gold/5" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-heritage-cream mb-4 md:mb-6">
              Private & Corporate Events
            </h2>
            <p className="text-heritage-gray-light text-base md:text-xl leading-relaxed mb-6 md:mb-8 px-4 sm:px-0">
              Looking to create a bespoke automotive experience for your team or clients? 
              Our event specialists can craft custom itineraries tailored to your requirements.
            </p>
            <Link to="/contact">
              <Button variant="primary" size="lg">
                Plan Your Event
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default AutomotiveExperiences
