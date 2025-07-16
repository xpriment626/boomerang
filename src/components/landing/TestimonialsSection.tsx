'use client';

import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Operations Director',
    company: 'StyleForward',
    image: '/api/placeholder/64/64',
    content: 'Boomerang transformed our returns process completely. We went from 3-day processing times to instant decisions. Our customer satisfaction scores increased by 40%.',
    rating: 5,
    metrics: '3 days → 3 seconds'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Finance Manager',
    company: 'TrendLux',
    image: '/api/placeholder/64/64',
    content: 'The fraud detection alone saved us over $500K in the first quarter. The AI catches patterns our team would never spot manually.',
    rating: 5,
    metrics: '$500K fraud prevented'
  },
  {
    name: 'Emily Watson',
    role: 'Customer Service Lead',
    company: 'ModernWear',
    image: '/api/placeholder/64/64',
    content: 'Our customer service team can now focus on complex issues instead of routine returns. Processing accuracy improved from 78% to 95%.',
    rating: 5,
    metrics: '78% → 95% accuracy'
  }
];

const companyLogos = [
  { name: 'StyleForward', logo: '/api/placeholder/120/40' },
  { name: 'TrendLux', logo: '/api/placeholder/120/40' },
  { name: 'ModernWear', logo: '/api/placeholder/120/40' },
  { name: 'FashionFirst', logo: '/api/placeholder/120/40' },
  { name: 'ChicBoutique', logo: '/api/placeholder/120/40' },
  { name: 'UrbanStyle', logo: '/api/placeholder/120/40' }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Trusted by Leading Fashion Retailers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Join hundreds of retailers who have transformed their returns process with Boomerang
          </motion.p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>

              {/* Metrics badge */}
              <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-6 inline-block">
                {testimonial.metrics}
              </div>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-gray-600 font-medium text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 pt-12"
        >
          <p className="text-center text-gray-500 mb-8 font-medium">
            Trusted by 200+ fashion retailers worldwide
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
            {companyLogos.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.6 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ opacity: 1 }}
                className="flex justify-center"
              >
                <div className="bg-gray-300 h-10 w-24 rounded flex items-center justify-center">
                  <span className="text-xs text-gray-600 font-medium">{company.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}