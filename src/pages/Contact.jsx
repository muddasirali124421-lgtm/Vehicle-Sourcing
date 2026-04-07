import { motion } from 'framer-motion'
import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['150 Mayfair Lane', 'London, W1K 2QF', 'United Kingdom']
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+44 (0) 20 7123 4567', '+44 (0) 20 7123 4568']
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['concierge@heritagehorsepower.com', 'sourcing@heritagehorsepower.com']
    },
    {
      icon: Clock,
      title: 'Opening Hours',
      details: ['Monday - Friday: 9:00 - 18:00', 'Saturday: 10:00 - 16:00']
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/src/assets/car3.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-heritage-black/70 via-heritage-black/50 to-heritage-black" />
        
        <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="text-heritage-gold text-sm font-medium tracking-widest uppercase mb-4 block">
              Get In Touch
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-heritage-cream mb-4 md:mb-6">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-heritage-gray-light max-w-2xl mx-auto px-4 sm:px-0">
              Whether you're seeking a specific vehicle or exploring possibilities, 
              our team is ready to assist you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-heritage-charcoal">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-heritage-dark p-6 rounded-2xl border border-heritage-gold/10 hover:border-heritage-gold/30 transition-all duration-300"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-heritage-gold/10 flex items-center justify-center mb-3 md:mb-4">
                  <info.icon size={20} className="md:w-6 md:h-6 text-heritage-gold" />
                </div>
                <h3 className="text-base md:text-lg font-serif font-semibold text-heritage-cream mb-2 md:mb-3">
                  {info.title}
                </h3>
                {info.details.map((detail) => (
                  <p key={detail} className="text-heritage-gray-light text-xs md:text-sm">
                    {detail}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-heritage-black">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              subtitle="Send a Message"
              title="How Can We Help?"
              description="Fill out the form below and our concierge team will respond within 24 hours."
            />

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 md:py-16"
              >
                <CheckCircle size={48} className="md:w-16 md:h-16 text-heritage-gold mx-auto mb-4 md:mb-6" />
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-heritage-cream mb-3 md:mb-4">
                  Thank You
                </h3>
                <p className="text-heritage-gray-light text-sm md:text-base">
                  Your message has been received. Our team will contact you shortly.
                </p>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                onSubmit={handleSubmit}
                className="mt-8 md:mt-12 space-y-4 md:space-y-6 px-4 sm:px-0"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block text-heritage-cream text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-heritage-dark border border-heritage-gold/20 rounded-xl px-4 py-3 text-heritage-cream placeholder-heritage-gray-light focus:outline-none focus:border-heritage-gold transition-colors min-h-[44px]"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-heritage-cream text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-heritage-dark border border-heritage-gold/20 rounded-xl px-4 py-3 text-heritage-cream placeholder-heritage-gray-light focus:outline-none focus:border-heritage-gold transition-colors min-h-[44px]"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block text-heritage-cream text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-heritage-dark border border-heritage-gold/20 rounded-xl px-4 py-3 text-heritage-cream placeholder-heritage-gray-light focus:outline-none focus:border-heritage-gold transition-colors min-h-[44px]"
                      placeholder="+44 (0) 20 0000 0000"
                    />
                  </div>
                  <div>
                    <label className="block text-heritage-cream text-sm font-medium mb-2">
                      Area of Interest
                    </label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full bg-heritage-dark border border-heritage-gold/20 rounded-xl px-4 py-3 text-heritage-cream focus:outline-none focus:border-heritage-gold transition-colors min-h-[44px]"
                    >
                      <option value="">Select an option</option>
                      <option value="vehicle-sourcing">Vehicle Sourcing</option>
                      <option value="automotive-experiences">Automotive Experiences</option>
                      <option value="investment-advisory">Investment Advisory</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-heritage-cream text-sm font-medium mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-heritage-dark border border-heritage-gold/20 rounded-xl px-4 py-3 text-heritage-cream placeholder-heritage-gray-light focus:outline-none focus:border-heritage-gold transition-colors resize-none"
                    placeholder="Tell us about your automotive aspirations..."
                  />
                </div>

                <div className="text-center">
                  <Button type="submit" variant="primary" size="lg">
                    <Send size={18} className="mr-2" />
                    Send Message
                  </Button>
                </div>
              </motion.form>
            )}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-heritage-charcoal">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <SectionHeading
              subtitle="Our Location"
              title="Visit Our Showroom"
              description="Experience our collection in person at our Mayfair showroom in the heart of London."
            />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-8 md:mt-12 rounded-2xl overflow-hidden border border-heritage-gold/20"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.680563398788!2d-0.14965348423093837!3d51.50739797963565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487605292b173927%3A0x62be8dd493c69068!2sMayfair%2C%20London%2C%20UK!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0, filter: 'grayscale(100%) invert(92%)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Heritage Horsepower Location"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Contact
