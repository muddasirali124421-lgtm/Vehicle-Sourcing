import { motion } from 'framer-motion'
import { Calendar, MapPin, Users, Star, ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'

const AutomotiveExperiences = () => {
  const experiences = [
    {
      title: 'The Mille Miglia Revival',
      location: 'Italy',
      duration: '4 Days',
      group: '12 Participants',
      price: 'From €15,000',
      image: 'https://images.unsplash.com/photo-1511994714008-b6d68a8b32a2?auto=format&fit=crop&q=80',
      description: 'Join the world\'s most beautiful race, driving through Tuscany and Umbria in period-correct classics.',
      highlights: ['Period-correct vehicle provided', 'Castle accommodations', 'Gala dinner in Florence', 'VIP grandstand access']
    },
    {
      title: 'Scottish Highlands Rally',
      location: 'Scotland',
      duration: '3 Days',
      group: '8 Participants',
      price: 'From £8,500',
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80',
      description: 'Winding mountain roads, dramatic landscapes, and exclusive castle stays in the UK\'s most scenic territory.',
      highlights: ['Luxury lodge accommodation', 'Whisky distillery tour', 'Private road sections', 'Gourmet dining']
    },
    {
      title: 'Monaco Grand Prix Experience',
      location: 'Monaco',
      duration: '5 Days',
      group: '20 Participants',
      price: 'From €25,000',
      image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80',
      description: 'The ultimate F1 weekend with yacht hospitality, pit lane access, and parade lap on the legendary circuit.',
      highlights: ['Yacht hospitality', 'Pit lane access', 'Driver meet & greet', 'Casino evening']
    },
    {
      title: 'Nürburgring Track Days',
      location: 'Germany',
      duration: '2-3 Days',
      group: '16 Participants',
      price: 'From €5,000',
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80',
      description: 'Experience the Green Hell with professional instruction and a fleet of track-prepared vehicles.',
      highlights: ['Professional instruction', 'Track-prepared cars', 'Garage hospitality', 'Onboard video']
    },
    {
      title: 'Targa Florio Tribute',
      location: 'Sicily',
      duration: '5 Days',
      group: '10 Participants',
      price: 'From €12,000',
      image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80',
      description: 'Drive the legendary Madonie circuit in classic Italian sports cars through mountain villages.',
      highlights: ['Classic Italian cars', 'Historic route', 'Vineyard dinners', 'Palermo exploration']
    },
    {
      title: 'Amalfi Coast Grand Tour',
      location: 'Italy',
      duration: '4 Days',
      group: '6 Participants',
      price: 'From €10,000',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80',
      description: 'Coastal roads, cliffside villages, and luxury accommodations on Italy\'s most glamorous coastline.',
      highlights: ['Cliffside driving', 'Positano stay', 'Boat excursion', 'Michelin dining']
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
            backgroundImage: `url('https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80')`,
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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-heritage-cream mb-6">
              Automotive
              <br />
              <span className="text-gradient">Experiences</span>
            </h1>
            <p className="text-xl md:text-2xl text-heritage-gray-light max-w-2xl">
              From exclusive track days to curated driving tours through Europe's 
              most scenic routes—experience motoring at its finest.
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

          <div className="grid md:grid-cols-3 gap-8 mt-16">
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
                className="text-center p-6"
              >
                <div className="w-16 h-16 rounded-full bg-heritage-gold/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon size={32} className="text-heritage-gold" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-heritage-cream mb-2">
                  {item.title}
                </h3>
                <p className="text-heritage-gray-light">{item.desc}</p>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {experiences.map((exp, index) => (
              <Card key={exp.title} className="group flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${exp.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-heritage-dark via-heritage-dark/20 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-heritage-gold text-heritage-charcoal px-3 py-1 rounded-full text-sm font-medium">
                      {exp.price}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center text-heritage-gray-light text-sm mb-3 space-x-4">
                    <span className="flex items-center">
                      <MapPin size={14} className="mr-1 text-heritage-gold" />
                      {exp.location}
                    </span>
                    <span className="flex items-center">
                      <Calendar size={14} className="mr-1 text-heritage-gold" />
                      {exp.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-heritage-cream mb-3 group-hover:text-heritage-gold transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-heritage-gray-light text-sm leading-relaxed mb-4 flex-1">
                    {exp.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {exp.highlights.slice(0, 2).map((highlight) => (
                      <li key={highlight} className="flex items-center text-sm text-heritage-gray-light">
                        <Check size={14} className="mr-2 text-heritage-gold" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button variant="outline" className="w-full">
                      Inquire Now
                      <ArrowRight size={16} className="ml-2" />
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div 
                className="aspect-square rounded-2xl bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80')`,
                }}
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-heritage-green/30 rounded-2xl -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-heritage-cream mb-6">
                Every Detail <span className="text-gradient">Considered</span>
              </h2>
              <p className="text-heritage-gray-light text-lg leading-relaxed mb-8">
                From the moment you join us to your final farewell, every aspect of your 
                experience is meticulously planned and executed to ensure unforgettable moments.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center space-x-3">
                    <Check size={18} className="text-heritage-gold flex-shrink-0" />
                    <span className="text-heritage-cream text-sm">{feature}</span>
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
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-heritage-cream mb-6">
              Private & Corporate Events
            </h2>
            <p className="text-heritage-gray-light text-xl leading-relaxed mb-8">
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
