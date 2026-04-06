import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { to: '/about', label: 'About Us' },
      { to: '/vehicle-sourcing', label: 'Vehicle Sourcing' },
      { to: '/automotive-experiences', label: 'Experiences' },
      { to: '/contact', label: 'Contact' },
    ],
    services: [
      { to: '/vehicle-sourcing', label: 'Classic Car Sourcing' },
      { to: '/vehicle-sourcing', label: 'Investment Advisory' },
      { to: '/automotive-experiences', label: 'Track Days' },
      { to: '/automotive-experiences', label: 'Rally Tours' },
    ],
  }

  return (
    <footer className="bg-heritage-charcoal border-t border-heritage-gold/20">
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-heritage-gold to-heritage-gold-dark flex items-center justify-center">
                <span className="text-heritage-charcoal font-serif font-bold text-xl">H</span>
              </div>
              <div>
                <h2 className="text-lg font-serif font-semibold text-heritage-cream">
                  Heritage Horsepower
                </h2>
              </div>
            </Link>
            <p className="text-heritage-gray-light text-sm leading-relaxed mb-6">
              Curating exceptional classic and luxury automobiles for discerning collectors worldwide since 2008.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Facebook, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-heritage-dark-light flex items-center justify-center text-heritage-gray-light hover:text-heritage-gold hover:bg-heritage-gold/10 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-heritage-cream font-serif font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-heritage-gray-light hover:text-heritage-gold transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-heritage-cream font-serif font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={`${link.to}-${index}`}>
                  <Link
                    to={link.to}
                    className="text-heritage-gray-light hover:text-heritage-gold transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-heritage-cream font-serif font-semibold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-heritage-gold mt-0.5 flex-shrink-0" />
                <span className="text-heritage-gray-light text-sm">
                  150 Mayfair Lane<br />
                  London, W1K 2QF<br />
                  United Kingdom
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-heritage-gold flex-shrink-0" />
                <a href="tel:+442071234567" className="text-heritage-gray-light hover:text-heritage-gold transition-colors text-sm">
                  +44 (0) 20 7123 4567
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-heritage-gold flex-shrink-0" />
                <a href="mailto:concierge@heritagehorsepower.com" className="text-heritage-gray-light hover:text-heritage-gold transition-colors text-sm">
                  concierge@heritagehorsepower.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-heritage-gold/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-heritage-gray-light text-sm">
            &copy; {currentYear} Heritage Horsepower. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-heritage-gray-light hover:text-heritage-gold transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-heritage-gray-light hover:text-heritage-gold transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
