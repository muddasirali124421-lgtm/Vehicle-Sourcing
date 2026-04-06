import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import WhyChoose from '../components/WhyChoose'
import Experiences from '../components/Experiences'
import Testimonials from '../components/Testimonials'
import Founder from '../components/Founder'
import CTA from '../components/CTA'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Experiences />
      <Testimonials />
      <Founder />
      <CTA />
    </motion.div>
  )
}

export default Home
