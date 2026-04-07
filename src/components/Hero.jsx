import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, ChevronLeft, Car, Globe, Award } from 'lucide-react'
import Button from './ui/Button'

const Hero = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const [currentSlide, setCurrentSlide] = useState(0)
  
  const featuredCars = [
    {
      name: '1967 Ford Mustang GT',
      category: 'American Muscle',
      image: '/src/assets/maxresdefault (2).jpg'
    },
    {
      name: '1957 Chevrolet Bel Air',
      category: 'Classic American',
      image: '/src/assets/5d55d871e501f2ae0df45d876ad7e031.jpg'
    },
    {
      name: '1938 Packard Super Eight',
      category: 'Pre-War Luxury',
      image: '/src/assets/360_F_980473079_GJmswDXUvXahT18ra0awcrPpdxn2Md4Q.jpg'
    }
  ]

  const stats = [
    { icon: Car, value: '500+', label: 'Cars Curated' },
    { icon: Globe, value: '40+', label: 'Countries' },
    { icon: Award, value: '15+', label: 'Years Experience' }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredCars.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % featuredCars.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + featuredCars.length) % featuredCars.length)

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 w-full h-[120%]"
      >
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('/src/assets/maxresdefault.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-heritage-black via-heritage-black/80 to-heritage-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-heritage-black via-transparent to-heritage-black/30" />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 h-full flex items-center"
      >
        <div className="container-custom px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start lg:items-center h-full py-8 pt-28 lg:pt-8">
            
            {/* Left Side - Text & Buttons */}
            <div className="flex flex-col justify-center order-1">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-heritage-gold text-xs sm:text-sm font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4 sm:mb-6 block"
              >
                Est. 2008
              </motion.span>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-heritage-gold leading-[0.9] mb-4 sm:mb-6"
              >
                Heritage
                <br />
                Horsepower
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-base sm:text-lg md:text-xl text-heritage-gray-light mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-xl"
              >
                Curating exceptional classic and luxury automobiles for discerning collectors worldwide
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to="/vehicle-sourcing">
                  <Button variant="primary" size="lg" className="group">
                    Explore Collection
                    <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/automotive-experiences">
                  <Button variant="secondary" size="lg">
                    Our Experiences
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Right Side - Feature Box */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="order-2 flex justify-center lg:justify-end lg:mt-16"
            >
              <div className="relative bg-heritage-dark/80 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-heritage-gold/20 overflow-hidden max-w-md lg:max-w-[450px] w-full ml-auto">
                {/* Feature Card Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-heritage-gold text-sm font-medium tracking-wider uppercase">Featured Collection</p>
                    <p className="text-heritage-cream font-serif text-lg">Curated for Excellence</p>
                  </div>
                  <Link to="/vehicle-sourcing" className="text-heritage-gold hover:text-heritage-gold-light transition-colors text-sm font-medium">
                    View All
                  </Link>
                </div>

                {/* Featured Car Carousel */}
                <div className="relative mb-6">
                  <div className="aspect-video rounded-xl overflow-hidden relative">
                    {featuredCars.map((car, index) => (
                      <motion.div
                        key={car.name}
                        initial={false}
                        animate={{
                          opacity: currentSlide === index ? 1 : 0,
                          scale: currentSlide === index ? 1 : 1.1
                        }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0"
                      >
                        <div 
                          className="w-full h-full bg-cover bg-center"
                          style={{ backgroundImage: `url('${car.image}')` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-heritage-black/80 via-transparent to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <p className="text-heritage-gold text-xs font-medium tracking-wider uppercase mb-1">{car.category}</p>
                          <p className="text-heritage-cream font-serif text-lg">{car.name}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Carousel Controls */}
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    <button 
                      onClick={prevSlide}
                      className="w-8 h-8 rounded-full bg-heritage-black/50 backdrop-blur-sm flex items-center justify-center text-heritage-cream hover:bg-heritage-gold hover:text-heritage-black transition-all"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button 
                      onClick={nextSlide}
                      className="w-8 h-8 rounded-full bg-heritage-black/50 backdrop-blur-sm flex items-center justify-center text-heritage-cream hover:bg-heritage-gold hover:text-heritage-black transition-all"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>

                  {/* Carousel Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {featuredCars.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          currentSlide === index 
                            ? 'bg-heritage-gold w-6' 
                            : 'bg-heritage-gray-light/50 hover:bg-heritage-gray-light'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="flex justify-between items-center pt-4 border-t border-heritage-gold/10">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <stat.icon size={20} className="text-heritage-gold mx-auto mb-2" />
                      <p className="text-heritage-cream font-serif text-xl font-bold">{stat.value}</p>
                      <p className="text-heritage-gray-light text-xs">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-heritage-gold/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-heritage-gold rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
